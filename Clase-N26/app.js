//SErvidor Estatico 


const http = require ('http');
const fs = require ('fs');
const { create } = require('domain');

// const server = http.createServer((req,res)=>{
//     res.writeHead(200, {
//         'Content-Type': 'text/html, charset=UTF-8'
//     });

//     res.end('Hola mundo!!  <h1> Hola mundo!!!</h1>');
// });

const server = http.createServer((req,res) =>{
    const file = fs.readFileSync(__dirname + '/index.html');
    res.writeHead(200 , { 
        'Content-Type': 'text/html; charset=UTN-8'
    });
    res.end(file);
});



server.listen(5000, ()=> console.log(
    "El servidor esta encendido http://localhost:5000 "
));