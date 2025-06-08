<script setup>
import './FaceCapture.css'
import { ref, onMounted, onUnmounted } from 'vue'
import * as faceapi from 'face-api.js'

const videoRef = ref(null)
const embedding = ref(null)
const loading = ref(true)
const error = ref('')
const processing = ref(false)
const faceBox = ref(null)
const faceDetected = ref(false)
const showCaptureBtn = ref(false)
const videoWidth = ref(0)
const videoDisplaySize = ref({ width: 0, height: 0 })
const videoNaturalSize = ref({ width: 0, height: 0 })
const smoothedBtnPos = ref({ x: 0, y: 0, width: 0, height: 0 })
const smoothingFactor = 0.15 // Lower = smoother/slower
let detectLoop = null
const testImageRef = ref(null)
const testImageEmbedding = ref(null)

async function setupCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: 'user' },
      audio: false,
    })
    videoRef.value.srcObject = stream
    await videoRef.value.play()
    loading.value = false
  } catch (e) {
    error.value = 'Could not access the camera: ' + e
    loading.value = false
  }
}

async function loadModels() {
  try {
    console.log("Loading SSD Mobilenet V1...");
    await faceapi.nets.ssdMobilenetv1.loadFromUri('/models/ssd_mobilenetv1');
    console.log("SSD Mobilenet V1 loaded.", faceapi.nets.ssdMobilenetv1.isLoaded);
    console.log("SSD Mobilenet V1:", faceapi.nets.ssdMobilenetv1);

    console.log("Loading Face Landmark 68...");
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models/face_landmark_68');
    console.log("Face Landmark 68 loaded.");

    console.log("Loading Face Recognition Net...");
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models/face_recognition');
    console.log('Face Recognition Net loaded:', faceapi.nets.faceRecognitionNet.isLoaded);
  } catch (err) {
    console.error("Model loading error:", err);
    error.value = 'Failed to load one or more models.'
  }
}

function updateVideoSizes() {
  if (videoRef.value) {
    videoDisplaySize.value = {
      width: videoRef.value.offsetWidth,
      height: videoRef.value.offsetHeight
    }
    videoNaturalSize.value = {
      width: videoRef.value.videoWidth,
      height: videoRef.value.videoHeight
    }
    videoWidth.value = videoRef.value.offsetWidth // for backward compatibility
  }
}

onMounted(async () => {
  await loadModels()
  await setupCamera()
  startFaceDetection()
  updateVideoSizes()
  window.addEventListener('resize', updateVideoSizes)
})

onUnmounted(() => {
  if (detectLoop) cancelAnimationFrame(detectLoop)
  window.removeEventListener('resize', updateVideoSizes)
})

async function startFaceDetection() {
  if (!videoRef.value) return
  const detect = async () => {
    if (!videoRef.value || videoRef.value.readyState !== 4) {
      faceBox.value = null
      faceDetected.value = false
      showCaptureBtn.value = false
      detectLoop = requestAnimationFrame(detect)
      return
    }
    const result = await faceapi.detectSingleFace(
      videoRef.value,
      new faceapi.SsdMobilenetv1Options()
    )
    if (result && result.box) {
      faceBox.value = result.box
      faceDetected.value = true
      showCaptureBtn.value = true
      // Smoothing logic
      const target = getScaledAndMirroredBox(result.box)
      smoothedBtnPos.value.x = smoothedBtnPos.value.x + (target.x - smoothedBtnPos.value.x) * smoothingFactor
      smoothedBtnPos.value.y = smoothedBtnPos.value.y + (target.y - smoothedBtnPos.value.y) * smoothingFactor
      smoothedBtnPos.value.width = smoothedBtnPos.value.width + (target.width - smoothedBtnPos.value.width) * smoothingFactor
      smoothedBtnPos.value.height = smoothedBtnPos.value.height + (target.height - smoothedBtnPos.value.height) * smoothingFactor
    } else {
      faceBox.value = null
      faceDetected.value = false
      showCaptureBtn.value = false
    }
    detectLoop = requestAnimationFrame(detect)
  }
  detectLoop = requestAnimationFrame(detect)
}

async function getFaceEmbedding() {
  if (!videoRef.value) return
  processing.value = true
  const options = new faceapi.SsdMobilenetv1Options({ minConfidence: 0.1 })

  const detections = await faceapi.detectSingleFace(
    videoRef.value,
    options
  ).withFaceLandmarks().withFaceDescriptor()

  // const descriptor = await faceapi.computeFaceDescriptor(videoRef.value);
  // console.log("descriptor", descriptor)
  if (detections && detections.descriptor) {
    console.log(detections)
    embedding.value = Array.from(detections.descriptor)
    console.log(embedding)
  } else {
    embedding.value = null
    error.value = 'No face detected.'
  }
  processing.value = false
}

function getScaledAndMirroredBox(box) {
  const disp = videoDisplaySize.value
  const nat = videoNaturalSize.value
  if (!disp.width || !disp.height || !nat.width || !nat.height) return box
  const scaleX = disp.width / nat.width
  const scaleY = disp.height / nat.height
  const scaled = {
    x: box.x * scaleX,
    y: box.y * scaleY,
    width: box.width * scaleX * 2,
    height: box.height * scaleY
  }
  // Mirror horizontally
  return {
    ...scaled,
    x: disp.width - scaled.x - scaled.width
  }
}

function handleCaptureFace() {
  getFaceEmbeddingFromBackend().then(() => {
    if (embedding.value) {
      console.log('Face embedding:', embedding.value)
    }
  })
}

async function getDescriptorFromTestImage() {
  if (!testImageRef.value) return
  const detection = await faceapi
    .detectSingleFace(testImageRef.value, new faceapi.SsdMobilenetv1Options())
    .withFaceLandmarks()
    .withFaceDescriptor()
  if (detection && detection.descriptor) {
    testImageEmbedding.value = Array.from(detection.descriptor)
    console.log('Descriptor:', testImageEmbedding.value)
    return testImageEmbedding.value
  } else {
    testImageEmbedding.value = null
    error.value = 'No face detected in test.jpg.'
    return null
  }
}

async function getFaceEmbeddingFromBackend() {
  if (!videoRef.value || !faceBox.value) return;

  // 1. Draw the face region to a canvas
  const canvas = document.createElement('canvas');
  canvas.width = faceBox.value.width;
  canvas.height = faceBox.value.height;
  const ctx = canvas.getContext('2d');
  ctx.drawImage(
    videoRef.value,
    faceBox.value.x, faceBox.value.y, faceBox.value.width, faceBox.value.height,
    0, 0, faceBox.value.width, faceBox.value.height
  );

  // 2. Convert to base64
  const dataUrl = canvas.toDataURL('image/jpeg');

  // 3. Send to backend
  const response = await fetch('http://localhost:5000/face-embedding', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ image: dataUrl })
  });
  const result = await response.json();
  // result.embedding contains the embedding array
}
</script>

<template>
  <div class="container">
    <div v-if="loading" class="status">Loading camera...</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <div class="video-container">
      <video
        v-show="!loading && !error"
        ref="videoRef"
        autoplay
        playsinline
        class="video-feed"
        @loadedmetadata="updateVideoSizes"
      ></video>
      <transition name="face-overlay-fade">
        <div
          v-if="faceDetected && faceBox && videoDisplaySize.width"
          class="face-overlay"
          :style="{
            left: getScaledAndMirroredBox(faceBox).x + 'px',
            top: getScaledAndMirroredBox(faceBox).y + 'px',
            width: getScaledAndMirroredBox(faceBox).width + 'px',
            height: getScaledAndMirroredBox(faceBox).height + 'px',
          }"
        ></div>
      </transition>
      <transition name="capture-btn-fade">
        <button
          v-if="showCaptureBtn && faceBox && videoDisplaySize.width"
          class="capture-face-btn"
          :style="{
            left: (smoothedBtnPos.x + smoothedBtnPos.width / 2) + 'px',
            top: (smoothedBtnPos.y + smoothedBtnPos.height + 16) + 'px',
            transform: 'translateX(-50%)',
            position: 'absolute',
            zIndex: 10
          }"
          @click="handleCaptureFace"
        >
          Capture Face
        </button>
      </transition>
    </div>
    <button
      v-if="!loading && !error"
      class="capture-btn"
      :disabled="processing"
      @click="getFaceEmbeddingFromBackend"
      style="display: none;"
    >
      {{ processing ? 'Processing...' : 'Get Face Embedding' }}
    </button>
    <div v-if="embedding" class="embedding-box">
      <h3>Face Embedding:</h3>
      <pre>{{ embedding }}</pre>
    </div>
  </div>
</template>
