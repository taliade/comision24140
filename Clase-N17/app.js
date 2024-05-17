//                //0              1            2            3     
// const frutas = ['manzana🍎', 'plátano🍌', 'naranja🍊', 'uva🍇'];
// //let frutas2 = [] // cada uno elementos del mismo tipo string , number  
// console.log(frutas);
// console.log(frutas[2]);
               
// let matriz = [[1,2,3],[4,5,6],[7,8,9]];  //Filas y columnas
//  console.log(matriz);
//  console.log(matriz[1][2]);

//  let persona = [ "Juan", 39, "Buenos Aires", true];
//  console.log(persona);
//  //metodo .at  2015
//  console.log(persona.at(2));
//  console.log(persona.length);
//  var vacio = []
// console.log(vacio)

// const vectorTres = new Array (1, 5, 10, 15, 20)
// document.write("Elementos del vector 3: <br>")
// for(i = 0; i < vectorTres.length; i++){
// document.write(vectorTres[i] + ", ")
// }


// frutas.push('uva');
// console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva']

// let livestock = ["🐷", "🐮", "🐔"];
// livestock.push("🐴", "🐮");
// console.log(livestock);
// // ["🐷", "🐮", "🐔", "🐴", "🐮"]

// frutas.push('sandía🍉', 'melón🍈');
// console.log(frutas); // Salida: ['manzana', 'plátano', 'naranja', 'uva', 'sandía', 'melón']

// let train = ["🚃", "🚃", "🚃", "🚃"];
// train.unshift("🚂","🚃");
// console.log(train);
// // ["🚂", "🚃", "🚃", "🚃", "🚃"]
// train.push(  "🚃","🐮");
// console.log(train);


// //Every 
// const numeros = [-1, 2, 3, 4, 5,6,7];

// const todosMayoresQueCero = numeros.every(function(numero) {
//   return numero > 0;
// });

// console.log(todosMayoresQueCero); // Salida: true

// //some 
// const algunoMayorQueTres = numeros.some(function(numero) {
//     return numero > 6;
//   });
  
//   console.log(algunoMayorQueTres); // Salida: true
  
// const visitantes   = ["🧑", "👽", "🧑", "🧑", "🤖"];
// const isHuman    = e => e === "🧑";
// const onlyHumans = visitantes.every(isHuman);
// console.log(onlyHumans);

// let algunosSi = visitantes.some(isHuman);
// console.log(algunosSi);

// let arreglo=["P","r","u","e","b","a"]
// for (let letra in arreglo) {
// // console.log(letra)
// //console.log("---------------------------------");

// console.log(arreglo[letra])
// }


// let persona = {
//     nombre: "Ana",
//     apellido: "Paz",
//     edad: 25
//     };
//     for (let x in persona) {
//     console.log(x + ": " +
//     persona[x])
//     }


// let arreglo = ["P","r","u","e","b","a"]
// for (let letra of arreglo){
// console.log(letra)
// }



// ¿El navegador soporta esta función?
// if (typeof(Storage) !== "undefined") {
//     // setItem guarda datos en el dispositivo
//     localStorage.setItem("apellido", "Perez")
//     localStorage.setItem("nombre", "Juan")
//     console.log("Datos guardados.")
//     } else {
//     console.log("Web Storage no soportado.")
//     }

// ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
    // getItem recupera datos del dispositivo
    ape = localStorage.getItem("apellido")
    nom = localStorage.getItem("nombre")
    console.log(ape + ", " + nom)
    } else {
    console.log("Web Storage no soportado.")
    }


    // ¿El navegador soporta esta función?
if (typeof(Storage) !== "undefined") {
    // setItem guarda datos en el dispositivo
    sessionStorage.setItem("curso", "Full Stack Javascript")
    // getItem recupera datos del dispositivo
    curso = sessionStorage.getItem("curso")
    console.log("recuperado:" + curso)
    } else {
    console.log("Web Storage no soportado.")
    }


    lst =[
    {
        name:"Matias",
        age:53
    },{
        name:"Alicia",
        age:40
    }];


    const nuevo = JSON.stringify(lst);
    console.log(nuevo);

    let opuesto = JSON.parse(nuevo);
    console.log(opuesto);
    console.log(opuesto[0]);
