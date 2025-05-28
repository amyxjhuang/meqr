#!/bin/bash
# Download face-api.js models for use in the Vue app
set -e
MODEL_DIR="web/public/models"
BASE_URL="https://raw.githubusercontent.com/justadudewhohacks/face-api.js-models/master"

mkdir -p "$MODEL_DIR"
cd "$MODEL_DIR"

# List of required models
MODELS=(
  "tiny_face_detector/tiny_face_detector_model-weights_manifest.json"
  "tiny_face_detector/tiny_face_detector_model-shard1"
  "face_landmark_68/face_landmark_68_model-weights_manifest.json"
  "face_landmark_68/face_landmark_68_model-shard1"
  "face_recognition/face_recognition_model-weights_manifest.json"
  "face_recognition/face_recognition_model-shard1"
)

for FILE in "${MODELS[@]}"; do
  DIR=$(dirname "$FILE")
  mkdir -p "$DIR"
  if [ ! -f "$FILE" ]; then
    echo "Downloading $FILE..."
    curl -L -o "$FILE" "$BASE_URL/$FILE"
  else
    echo "$FILE already exists, skipping."
  fi
done

echo "All required face-api.js models are downloaded in $MODEL_DIR." 