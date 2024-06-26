const express = require('express');
const router = express.Router();

router.get('/movies', (req,res)=>{
    res.json({mensaje:'Hola mensaje desde el json de peliculas'});
    res.json(__dirname + 'peliculas.json');
});


router.get('movies/:id', (req,res)=>{
    res.json(__dirname + 'peliculas.json');
   
})
 .post 
 .put 
 .delete 



module.exports= router