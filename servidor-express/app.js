const express = require('express')
const app = express();
const port = 5000;


//Rutas   www.google.com.ar/nosotros o /index.html
app.get('/',(req, res)=> {
//   res.send('Hello World Hola Express')
  app.send(express.static(__dirname + "/index.html"))
})

//app.use(express.static(__dirname + "/public"))
// localhost:6000/


app.listen(port,()=>{
    console.log(`El servidor esta encendido en 
    http://localhost:${port} /`)
});