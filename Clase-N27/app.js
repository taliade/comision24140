const express = require ('express');

const app = express();

const PORT = 4000;
app.use(express.static('public'));


app.get('/',(req,res) =>{
    res.send('Hola Bienvenidos')
})
app.get('/home',(req,res) =>{
    res.send('Hola Mundo! Estamos viendo los cambios desde Nodemon - modifico desde start')
})


app.get('/index',(req,res)=>{
    res.sendFile(__dirname + '/index.html')
})

app.post('/login',(req,res)=>{
    console.log(req.body)
    const name = req.body;
    const password = req.body;
    // const {name, password} = req.body;
    res.send("OK")
})



/// Middleware 


app.listen(PORT, ()=>{
    console.log(`El servidor esta encendidor en http://localhost:${PORT}/ `)
});