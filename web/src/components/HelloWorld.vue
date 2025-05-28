<script setup>
import { ref, onMounted } from 'vue'
import * as faceapi from 'face-api.js'

const videoRef = ref(null)
const embedding = ref(null)
const loading = ref(true)
const error = ref('')
const processing = ref(false)

async function setupCamera() {
  try {
    const stream = await navigator.mediaDevices.getUserMedia({
      video: { facingMode: { exact: 'environment' } },
      audio: false,
    })
    videoRef.value.srcObject = stream
    await videoRef.value.play()
    loading.value = false
  } catch (e) {
    error.value = 'Could not access the back camera.'
    loading.value = false
  }
}

async function loadModels() {
  await faceapi.nets.tinyFaceDetector.loadFromUri('/models')
  await faceapi.nets.faceLandmark68Net.loadFromUri('/models')
  await faceapi.nets.faceRecognitionNet.loadFromUri('/models')
}

onMounted(async () => {
  await loadModels()
  await setupCamera()
})

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
</script>

<template>
  <div class="container">
    <h2>Face Embedding Capture</h2>
    <div v-if="loading" class="status">Loading camera...</div>
    <div v-else-if="error" class="status error">{{ error }}</div>
    <video
      v-show="!loading && !error"
      ref="videoRef"
      autoplay
      playsinline
      class="video-feed"
    ></video>
    <button
      v-if="!loading && !error"
      class="capture-btn"
      :disabled="processing"
      @click="getFaceEmbedding"
    >
      {{ processing ? 'Processing...' : 'Get Face Embedding' }}
    </button>
    <div v-if="embedding" class="embedding-box">
      <h3>Face Embedding:</h3>
      <pre>{{ embedding }}</pre>
    </div>
  </div>
</template>

<style scoped>
.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 1em;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: system-ui, sans-serif;
}
.video-feed {
  width: 100%;
  max-width: 350px;
  aspect-ratio: 3/4;
  border-radius: 12px;
  background: #222;
  margin-bottom: 1em;
}
.capture-btn {
  width: 100%;
  padding: 1em;
  font-size: 1.2em;
  border: none;
  border-radius: 8px;
  background: #42b883;
  color: white;
  margin-bottom: 1em;
  transition: background 0.2s;
}
.capture-btn:active {
  background: #368f6e;
}
.status {
  margin: 1em 0;
  color: #888;
}
.status.error {
  color: #d33;
}
.embedding-box {
  width: 100%;
  background: #f6f6f6;
  border-radius: 8px;
  padding: 0.5em;
  font-size: 0.9em;
  word-break: break-all;
}
@media (max-width: 600px) {
  .container {
    padding: 0.5em;
  }
  .video-feed {
    max-width: 100vw;
  }
}
</style>
