const multer = require('multer');
const path = require('path');
const fs = require('fs');

// Configuración de multer
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    const uploadPath = 'uploads/';
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

exports.uploadFiles = upload.array('archivos', 10); // Hasta 10 archivos

exports.uploadFilesHandler = (req, res) => {
  if (!req.files || req.files.length === 0) {
    return res.status(400).send('No se ha subido ningún archivo.');
  }
  const fileNames = req.files.map(file => file.filename);
  res.send(`Archivos subidos con éxito: ${fileNames.join(', ')}`);
};
