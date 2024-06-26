const express = require('express')
const expressRouter = require (expressRouter());
const {uploader} = require ('../../util/util.js');
const router = Router();

router.post('/', uploader.single('file'),(req,res)=>{
    if(!req.file){
        //Sino exite req.file significa que hubo un error al subir el archivo
        //queda en tus manos decidir continuar con el proceso o no.
        return res.status(400).send({send:"error", error:"No se puedo guardar la imagen"});

    }
    console(req.file); //Revisar los campos que viene en req.file por parte de multer
    //El resto del cuerpo del usuario 
    let user =req.body;
    user.profile = req.file.path;
    user.push(user);
    res.send({send:"success", message:"User created"})

})

export default router;