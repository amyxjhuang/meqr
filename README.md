# meqr
Use face embedding to generate URL 

`pip install fastapi uvicorn`
`npm install --save-dev gh-pages`

To download the faceapi models
```
bash download_faceapi_models.sh
```

For github pages:
Inside `web` run:
```
npm install
npm run build
```

   npm run deploy

To run the backend: 
```
uvicorn app:app --reload
```