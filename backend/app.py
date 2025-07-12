import db  # This imports your db.py functions
from fastapi import FastAPI, Request, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from fastapi.responses import RedirectResponse
from pydantic import BaseModel
from deepface import DeepFace
import base64
import json
from io import BytesIO
from PIL import Image
import numpy as np
import os

app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
async def root():
    return {"message": "MEQR Backend is running!"}

class ImageData(BaseModel):
    image: str  # base64 data URL

class FaceEmbeddingData(BaseModel):
    face_embedding: str  # JSON string of face embedding
    url: str = None  # URL to store with the face embedding

@app.post("/face-embedding")
async def face_embedding(data: ImageData):
    try:
        # Remove header (e.g., "data:image/jpeg;base64,")
        header, encoded = data.image.split(",", 1)
        img_bytes = base64.b64decode(encoded)
        img = Image.open(BytesIO(img_bytes)).convert("RGB")
        img_np = np.array(img)

        # Get embedding (using Facenet, but you can change model_name)
        embedding_obj = DeepFace.represent(img_path=img_np, model_name="Facenet")
        embedding = embedding_obj[0]["embedding"]
        return {"embedding": embedding}
    except Exception as e:
        print(f"Error in face embedding: {e}")  # Debug log
        return {"error": str(e)}

@app.get("/face-embedding")
async def face_embedding_get():
    return {"message": "GET method not supported. Use POST."}

@app.post("/store-face-embedding")
def store_face_embedding(data: FaceEmbeddingData):
    try:
        # Check if face already exists
        existing_face = db.find_matching_face(data.face_embedding, threshold=0.6)
        
        if existing_face:
            return {
                "face_key": existing_face, 
                "message": "Face already exists in database.. or am I wrong and bad? Let me kno.",
                "already_exists": True
            }
        
        # Generate a unique key based on the face embedding hash
        import hashlib
        face_key = hashlib.md5(data.face_embedding.encode()).hexdigest()[:8]
        print("face_key", face_key, "data.url", data.url)
        # Store the face embedding with optional URL
        db.insert_face_embedding(face_key, data.face_embedding, data.url)
        
        response_data = {
            "face_key": face_key, 
            "url": data.url,
            "message": "Face embedding stored successfully", 
            "already_exists": False
        }
        return response_data
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/face-keys")
def get_face_keys():
    try:
        keys = db.get_all_face_keys()
        return {"face_keys": keys}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/face-embedding/{face_key}")
def get_face_embedding(face_key: str):
    try:
        embedding = db.get_face_embedding_by_key(face_key)
        if embedding:
            return {"face_key": face_key, "face_embedding": embedding}
        else:
            raise HTTPException(status_code=404, detail="Face key not found")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.get("/url/{face_key}")
def get_url(face_key: str):
    try:
        url = db.get_url_by_face_key(face_key)
        if url:
            return {"face_key": face_key, "url": url}
        else:
            raise HTTPException(status_code=404, detail="URL not found for this face key")
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/check-face-exists")
def check_face_exists(data: FaceEmbeddingData):
    try:
        # Check if face already exists
        existing_face = db.find_matching_face(data.face_embedding, threshold=0.6)
        
        if existing_face:
            # Get the URL associated with this face
            url = db.get_url_by_face_key(existing_face)
            return {
                "exists": True,
                "face_key": existing_face,
                "url": url,
                "message": "Face found in database"
            }
        else:
            return {
                "exists": False,
                "message": "Face not found in database"
            }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@app.post("/get-face-similarities")
def get_face_similarities(data: FaceEmbeddingData):
    try:
        # Get all similar faces with their similarity scores
        similarities = db.get_face_similarity(data.face_embedding, threshold=0.3)
        
        return {
            "similarities": similarities,
            "total_matches": len(similarities)
        }
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

# URL functionality will be added later
# @app.get("/{face_key}")
# def redirect_to_url(face_key: str):
#     long_url = db.get_long_url(face_key)
#     if long_url:
#         return RedirectResponse(long_url)
#     else:
#         raise HTTPException(status_code=404, detail="URL not found.")