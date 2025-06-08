import db  # This imports your db.py functions
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
from deepface import DeepFace
import base64
from io import BytesIO
from PIL import Image
import numpy as np

app = FastAPI()

# Allow CORS for local development
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this in production!
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ImageData(BaseModel):
    image: str  # base64 data URL

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
        return {"error": str(e)}
    
app = FastAPI()

@app.post("/create_url/")
def create_url(face_key: str, long_url: str):
    try:
        db.insert_url_mapping(face_key, long_url)
        return {"face_url": f"http://localhost:8000/{face_key}"}
    except Exception as e:
        raise HTTPException(status_code=400, detail="Key already exists or invalid input.")

@app.get("/{face_key}")
def redirect_to_url(face_key: str):
    long_url = db.get_long_url(face_key)
    if long_url:
        return RedirectResponse(long_url)
    else:
        raise HTTPException(status_code=404, detail="URL not found.")