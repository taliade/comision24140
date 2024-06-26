const express = require('express');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const app = express();
const port = 3000;

// Configuración de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploader/';
    // Crear el directorio si no existe
    if (!fs.existsSync(uploadPath)) {
      fs.mkdirSync(uploadPath);
    }
    cb(null, uploadPath);
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname); // Usa el nombre original del archivo
  }
});

const upload = multer({ storage: storage });

// Middleware para servir archivos estáticos (opcional)
app.use('/uploader', express.static(path.join(__dirname, 'uploader')));

// Servir el archivo HTML
app.use(express.static(path.join(__dirname, 'public')));

// Ruta principal
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'public', 'upload.html')));

// Ruta de subida de archivos
app.post('/upload', upload.single('archivo'), (req, res) => {
  if (!req.file) {
    return res.status(400).send('No se ha subido ningún archivo.');
  }
  res.send(`Archivo subido con éxito: ${req.file.filename}`);
});

// Iniciar el servidor
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}!`));
