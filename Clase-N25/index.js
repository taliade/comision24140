//console.log('Hola mundo desde Nodejs');


const http = require ('http');

const server = http.createServer((req,res)=>{
    res.writeHead(200, {
    'Content-type': 'text/plain' // text/html
    });

    res.end('Hola nodejs Desde Mi servidor Estatico')
    // res.end ('<h1>Hola Mundo!! </h1> ')
});

server.listen(3000,()=>console.log(`El servidor esta ensentido en puerto 3000 http://localhost:3000 `))