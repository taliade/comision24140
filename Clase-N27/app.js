const express = require ('express');

const app = express();

const PORT = 4000;



app.get('/',(req,res) =>{
    res.send('Hola Bienvenidos')
})
app.get('/home',(req,res) =>{
    res.send('Hola Mundo! Estamos viendo los cambios desde Nodemon - modifico desde start')
})
app.use(express.static('public'));

app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

/// Middleware 


app.listen(PORT, ()=>{
    console.log(`El servidor esta encendidor en http://localhost:${PORT}/ `)
});