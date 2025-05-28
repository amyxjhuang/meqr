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
    console.log("Loading Tiny Face Detector...");
    await faceapi.nets.tinyFaceDetector.loadFromUri('/models/tiny_face_detector');
    console.log("Tiny Face Detector loaded.");

    console.log("Loading Face Landmark 68...");
    await faceapi.nets.faceLandmark68Net.loadFromUri('/models/face_landmark_68');
    console.log("Face Landmark 68 loaded.");

    console.log("Loading Face Recognition Net...");
    await faceapi.nets.faceRecognitionNet.loadFromUri('/models/face_recognition');
    console.log("Face Recognition Net loaded.");
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
      new faceapi.TinyFaceDetectorOptions()
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
  const detections = await faceapi.detectSingleFace(
    videoRef.value,
    new faceapi.TinyFaceDetectorOptions()
  ).withFaceLandmarks().withFaceDescriptor()
  if (detections && detections.descriptor) {
    embedding.value = Array.from(detections.descriptor)
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
    width: box.width * scaleX,
    height: box.height * scaleY
  }
  // Mirror horizontally
  return {
    ...scaled,
    x: disp.width - scaled.x - scaled.width
  }
}

function handleCaptureFace() {
  getFaceEmbedding().then(() => {
    if (embedding.value) {
      console.log('Face embedding:', embedding.value)
    }
  })
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
      @click="getFaceEmbedding"
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
