const express = require('express');
const router = express.Router();
const path = require('path');
const uploadController = require('../controllers/uploadController');

// Ruta para servir el formulario de subida
router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/upload.html'));
});

// Ruta de subida de archivos
router.post('/upload', uploadController.uploadFiles, uploadController.uploadFilesHandler);

module.exports = router;
