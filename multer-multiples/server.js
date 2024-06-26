const express = require('express');
const path = require('path');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();
const port = 3000;

// Middleware para servir archivos estáticos (opcional)
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

// Usar las rutas de upload
app.use('/', uploadRoutes);

// Iniciar el servidor
app.listen(port, () => console.log(`Servidor escuchando en el puerto ${port}!`));
