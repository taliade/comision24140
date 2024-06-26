import multer from 'multer';

// Configuración de multer
//Antes de instanciar multer, debemos configurar donde se almacenarán los archivos.
const storage = multer.diskStorage({
    //destination: hará refenecia a la carpeta donde se va a guardar el archivo
    destination: function (req, file, cb) {
      cb(null,__dirname + 'public/img') // specificamos la carpeta en este punto
      cb(null, uploadPath);
    },
    //filename: hará referencia al nombre  final que contendrá el archivo
    filename: function (req, file, cb) {
      cb(null,file.originalname); // Añade una marca de tiempo al nombre del archivo para evitar duplicados
    }
  });
  
export const uploader = multer ( {storage})  