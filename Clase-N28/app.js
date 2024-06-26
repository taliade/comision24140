const express = require ('express');
const app = express();
const router = express.Router();
// const moviesRouter = require ('./src/routers/movies')
const PORT = 4000;


app.use(express.static('public'));



// app.use('/movies', moviesRouter);
app.use(express.json);

app.get('/',(req,res) =>{
    res.send('Hola Bienvenidos')
})

app.get('/home',(req,res) =>{
    res.send('Hola Mundo! Estamos viendo los cambios desde Nodemon - modifico desde start')
})


// app.get('/index',(req,res)=>{
//     res.sendFile(__dirname + '/index.html')
// })





/// Middleware 


app.listen(PORT, ()=>{
    console.log(`El servidor esta encendidor en http://localhost:${PORT}/ `)
});