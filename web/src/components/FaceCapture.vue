<script setup>
import './FaceCapture.css'
import { ref, onMounted, onUnmounted } from 'vue'
import * as faceapi from 'face-api.js'
// import { backendUrl } from '../config.js'

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
const faceExistsMessage = ref('')
const showUrlInput = ref(false)
const urlToMap = ref('')

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

// handleCaptureFace function removed - now handled by handleGoButton

async function storeFaceEmbedding() {
  if (!embedding.value) {
    error.value = 'No face embedding available. Please capture a face first.'
    return
  }
  
      try {
      const response = await fetch('http://127.0.0.1:5001/store-face-embedding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        face_embedding: JSON.stringify(embedding.value)
      })
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    console.log('Face embedding result:', result)
    
    if (result.already_exists) {
      console.log('Face already exists with key:', result.face_key)
    } else {
      console.log('New face stored with key:', result.face_key)
    }
    
    return result
  } catch (err) {
    console.error('Error storing face embedding:', err)
    error.value = 'Failed to store face embedding: ' + err.message
  }
}

async function checkFaceExists() {
  if (!embedding.value) {
    error.value = 'No face embedding available. Please capture a face first.'
    return
  }
  console.log("embedding.value", embedding.value)
  try {
    const response = await fetch('http://127.0.0.1:5001/check-face-exists', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        face_embedding: JSON.stringify(embedding.value)
      })
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    console.log('Face exists check:', result)
    
    if (result.exists) {
      console.log('Face found with key:', result.face_key)
      
      // If there's a URL associated with this face, redirect to it
      if (result.url) {
        console.log('Redirecting to URL:', result.url)
        window.location.href = result.url
        return result
      }
    } else {
      console.log('Face not found in database')
    }
    
    return result
  } catch (err) {
    console.error('Error checking face existence:', err)
    error.value = 'Failed to check face existence: ' + err.message
  }
}

async function handleGoButton() {
  if (!videoRef.value || !faceBox.value) {
    error.value = 'No face detected. Please position your face in the camera.'
    return
  }
  
  processing.value = true
  faceExistsMessage.value = ''
  showUrlInput.value = false
  
  try {
    // First, capture the face embedding
    await getFaceEmbeddingFromBackend()
    
    if (!embedding.value) {
      error.value = 'Failed to capture face embedding. Please try again.'
      return
    }
    
    // Then check if the face already exists
    const result = await checkFaceExists()
    
    if (result && result.exists) {
      faceExistsMessage.value = 'Face already exists in database.'
      showUrlInput.value = false
    } else {
      faceExistsMessage.value = ''
      showUrlInput.value = true
    }
  } catch (err) {
    error.value = 'Failed to process face: ' + err.message
  } finally {
    processing.value = false
  }
}

async function handleSubmitUrl() {
  if (!urlToMap.value || !embedding.value) {
    error.value = 'Please enter a URL and capture a face first.'
    return
  }
  
  processing.value = true
  
  try {
    // Store the face embedding with URL in one call
    const response = await fetch('http://127.0.0.1:5001/store-face-embedding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ 
        face_embedding: JSON.stringify(embedding.value),
        url: urlToMap.value
      })
    })
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`)
    }
    
    const result = await response.json()
    console.log('Face and URL stored:', result)
    
    if (result.already_exists) {
      faceExistsMessage.value = 'Face already exists in database.'
      showUrlInput.value = false
    } else {
      // Clear the form
      urlToMap.value = ''
      showUrlInput.value = false
      faceExistsMessage.value = 'URL mapping created successfully!'
      
      // Clear the message after 3 seconds
      setTimeout(() => {
        faceExistsMessage.value = ''
      }, 3000)
    }
  } catch (err) {
    console.error('Error storing face and URL:', err)
    error.value = 'Failed to create URL mapping: ' + err.message
  } finally {
    processing.value = false
  }
}

async function getFaceEmbeddingFromBackend() {
  if (!videoRef.value || !faceBox.value) return;
  
  processing.value = true;
  error.value = '';

  try {
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
    const response = await fetch('http://127.0.0.1:5001/face-embedding', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ image: dataUrl })
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    const result = await response.json();
    
    if (result.error) {
      error.value = result.error;
      embedding.value = null;
    } else if (result.embedding) {
      embedding.value = result.embedding;
      // console.log('Face embedding from backend:', embedding.value);
    } else {
      error.value = 'No embedding received from backend';
      embedding.value = null;
    }
  } catch (err) {
    console.error('Error getting face embedding:', err);
    error.value = 'Failed to get face embedding: ' + err.message;
    embedding.value = null;
  } finally {
    processing.value = false;
  }
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
    </div>
    
    <!-- Go button to capture face and proceed -->
    <button
      v-if="!showUrlInput"
      class="go-btn"
      :disabled="loading || error || !faceDetected || processing"
      @click="handleGoButton"
    >
      {{ processing ? 'Processing...' : 'Go →' }}
    </button>
    <!-- Face does NOT already exist message -->
    <div v-if="showUrlInput" class="message-box">
      New face detected. Please enter a URL to map to this face!
    </div>
    <!-- Face already exists message -->
    <div v-if="faceExistsMessage" class="message-box error">
      {{ faceExistsMessage }}
    </div>
    
    <!-- URL input form -->
    <div v-if="showUrlInput" class="url-input-container">
      <div class="input-group">
        <input
          v-model="urlToMap"
          type="url"
          placeholder="URL to map to this face"
          class="url-input"
          :disabled="processing"
        />
        <button
          class="submit-btn"
          :disabled="processing || !urlToMap"
          @click="handleSubmitUrl"
        >
          {{ processing ? 'Submitting...' : 'Submit' }}
        </button>
      </div>
    </div>
  </div>
</template>
