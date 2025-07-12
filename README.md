# MEQR - Face-Based URL Shortener

MEQR is a unique URL shortening service that uses face recognition technology to generate and access shortened URLs. Instead of traditional random strings, MEQR creates URLs based on your face embedding, making them both secure and memorable.

## 🚀 Features

- **Face-Based URL Generation**: Create shortened URLs using your face as the key
- **Real-Time Face Detection**: Uses face-api.js for instant face tracking in the browser
- **Advanced Face Embeddings**: Backend uses DeepFace for high-quality face embeddings
- **Instant Access**: Automatic redirect when your face is recognized
- **Duplicate Prevention**: Smart face matching prevents duplicate entries
- **Modern Web Interface**: Built with Vue.js and Vite for a smooth user experience

## 🏗️ Architecture

- **Frontend**: Vue.js application with face-api.js for real-time face detection
- **Backend**: FastAPI server with DeepFace for face embedding generation
- **Database**: SQLite database for storing face-to-URL mappings
- **Face Models**: Pre-trained models for face detection and recognition

## 📋 Prerequisites

- Python 3.8+
- Node.js 16+
- npm or yarn
- Webcam access (for face capture)

## 🛠️ Installation & Setup

### 1. Clone the Repository
```bash
git clone <your-repo-url>
cd meqr
```

### 2. Backend Setup

Navigate to the backend directory and install Python dependencies:
```bash
cd backend
pip install -r requirements.txt
```

### 3. Frontend Setup

Navigate to the web directory and install Node.js dependencies:
```bash
cd web
npm install
```

### 4. Download Face Detection Models

Run the script to download required face-api.js models:
```bash
bash download_faceapi_models.sh
```

This will download the models to the `web/public/models/` directory.

## 🚀 Running the Application

### Start the Backend Server

In the `backend` directory:
```bash
uvicorn app:app --reload --port 5001
```

The backend will be available at `http://127.0.0.1:5001`

### Start the Frontend Development Server

In the `web` directory:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3001` (or the next available port)

## 📱 How to Use

### Creating a Face-URL Mapping

1. **Open the Application**: Navigate to `http://localhost:3001` in your browser
2. **Allow Camera Access**: Grant permission for the webcam when prompted
3. **Position Your Face**: Make sure your face is clearly visible in the camera
4. **Click "Go →"**: The system will automatically capture your face and check if it exists
5. **Enter URL**: If it's a new face, enter the URL you want to map to your face
6. **Submit**: Click "Submit" to create the face-URL mapping

### Accessing URLs with Your Face

1. **Open the Application**: Navigate to `http://localhost:3001`
2. **Position Your Face**: Make sure your face is clearly visible
3. **Click "Go →"**: If your face is recognized and has a URL mapped, you'll be automatically redirected
4. **Automatic Redirect**: The system will instantly take you to your mapped URL

## 🔧 API Endpoints

### Core Endpoints
- `POST /face-embedding`: Generate face embedding from image
- `POST /store-face-embedding`: Store face embedding with optional URL
- `POST /check-face-exists`: Check if face exists and return associated URL
- `GET /face-keys`: Get all stored face keys
- `GET /face-embedding/{face_key}`: Get face embedding by key
- `GET /url/{face_key}`: Get URL associated with face key

### Response Examples

**Store Face with URL:**
```json
{
  "face_key": "a1b2c3d4",
  "url": "https://example.com",
  "message": "Face embedding and URL stored successfully",
  "already_exists": false
}
```

**Check Face Exists:**
```json
{
  "exists": true,
  "face_key": "a1b2c3d4",
  "url": "https://example.com",
  "message": "Face found in database"
}
```

## 🎯 Key Features

### **Smart Face Recognition**
- Uses cosine similarity for face matching
- Handles lighting, angle, and expression variations
- Configurable similarity threshold (default: 0.6)

### **Automatic Redirect**
- Instant URL access when face is recognized
- No need to remember or type URLs
- Seamless user experience

### **Duplicate Prevention**
- Checks for existing faces before storing
- Prevents multiple entries for the same person
- Maintains data integrity

## 🚀 Deployment

### Frontend Deployment (GitHub Pages)

To deploy the frontend to GitHub Pages:
```bash
cd web
npm run build
npm run deploy
```

### Backend Deployment

The backend can be deployed to any platform that supports Python/FastAPI:
- **Railway** (recommended for Python backends)
- **Render** (good free tier)
- **Heroku** (requires credit card)
- **DigitalOcean App Platform**

### Environment Configuration

For production deployment, update the frontend configuration in `web/src/config.js`:
```javascript
const config = {
  development: {
    backendUrl: 'http://127.0.0.1:5001'
  },
  production: {
    backendUrl: 'https://your-backend-url.railway.app'
  }
}
```

## 🛡️ Security Considerations

- **Face embeddings** are used as cryptographic keys
- **Similarity matching** prevents exact duplicates while allowing for variations
- **Local development** uses SQLite database (consider cloud database for production)
- **CORS** is configured for development (restrict origins for production)
- **No user authentication** currently implemented (add for production use)

## 🐛 Troubleshooting

### Common Issues

1. **Camera Not Working**: 
   - Ensure you've granted camera permissions in your browser
   - Check if another application is using the camera

2. **Face Detection Issues**: 
   - Make sure you're in a well-lit environment
   - Position your face clearly in the camera view
   - Ensure face-api.js models are downloaded

3. **CORS Errors**: 
   - Ensure the backend is running on port 5001
   - Check that CORS is properly configured
   - Verify frontend is using `127.0.0.1` instead of `localhost`

4. **Database Issues**: 
   - Delete `backend/meqr.db` to reset the database
   - Restart the backend server to recreate with new schema

5. **Model Loading Errors**: 
   - Verify that face-api.js models are downloaded to `web/public/models/`
   - Check browser console for model loading errors

### Development Tips

- **Browser Developer Tools**: Check console for JavaScript errors
- **FastAPI Logs**: Monitor backend logs for API errors
- **Database Inspection**: Use `sqlite3 backend/meqr.db` to inspect data
- **Network Tab**: Check API requests in browser dev tools

## 📊 Database Schema

```sql
CREATE TABLE face_embeddings (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    face_key TEXT UNIQUE NOT NULL,
    face_embedding TEXT NOT NULL,
    url TEXT,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## 🔄 Workflow

```
1. User positions face → "Go →" button appears
2. Click "Go →" → Captures embedding + checks database
3a. If face exists WITH URL → Automatic redirect
3b. If face exists WITHOUT URL → "Face already exists" message
3c. If new face → URL input form appears
4. Enter URL → Submit → Face + URL stored in database
```

## 📝 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]