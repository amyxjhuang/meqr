# MEQR - Face-Based URL Shortener

MEQR is a unique URL shortening service that uses face recognition technology to generate and access shortened URLs. Instead of traditional random strings, MEQR creates URLs based on your face embedding, making them both secure and memorable.

## 🚀 Features

- **Face-Based URL Generation**: Create shortened URLs using your face as the key
- **Real-Time Face Detection**: Uses face-api.js for instant face tracking in the browser
- **Advanced Face Embeddings**: Backend uses DeepFace/Hugging Face models for high-quality face embeddings
- **Secure Access**: Only the person whose face was used to create the URL can access it
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
uvicorn app:app --reload --port 5000
```

The backend will be available at `http://localhost:5000`

### Start the Frontend Development Server

In the `web` directory:
```bash
npm run dev
```

The frontend will be available at `http://localhost:3001` (or the next available port)

## 📱 How to Use

1. **Open the Application**: Navigate to `http://localhost:3001` in your browser
2. **Allow Camera Access**: Grant permission for the webcam when prompted
3. **Position Your Face**: Make sure your face is clearly visible in the camera
4. **Create a URL**: 
   - Click "Capture Face" when your face is detected
   - Enter the long URL you want to shorten
   - The system will generate a face-based shortened URL
5. **Access URLs**: Use the generated URL to access your original link

## 🔧 API Endpoints

- `POST /face-embedding`: Generate face embedding from image
- `POST /create_url/`: Create a new face-based URL mapping
- `GET /{face_key}`: Redirect to the original URL using face key

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
- Heroku
- Railway
- DigitalOcean App Platform
- AWS Lambda (with modifications)

## 🛡️ Security Considerations

- Face embeddings are used as cryptographic keys
- Only the person whose face was used can access the URL
- Consider implementing additional authentication for production use
- CORS is currently set to allow all origins for development

## 🐛 Troubleshooting

### Common Issues

1. **Camera Not Working**: Ensure you've granted camera permissions in your browser
2. **Face Detection Issues**: Make sure you're in a well-lit environment
3. **CORS Errors**: Ensure the backend is running on port 5000 and CORS is properly configured
4. **Model Loading Errors**: Verify that face-api.js models are downloaded to `web/public/models/`

### Development Tips

- Use browser developer tools to check for JavaScript errors
- Check the FastAPI logs for backend errors
- Ensure both frontend and backend are running simultaneously

## 📝 License

[Add your license information here]

## 🤝 Contributing

[Add contribution guidelines here]