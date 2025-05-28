from fastapi import FastAPI, HTTPException
from fastapi.responses import RedirectResponse
import db  # This imports your db.py functions

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