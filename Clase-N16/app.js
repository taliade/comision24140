
// let curso ={
//     titulo:"Curso Profesional de Codo a Codo",
//     formato: "Virtual",
//    modulos: ["Frontend", "Backend"]
// }

// console.log(curso );

// let cursos ={
//     titulo:"Curso Profesional de Codo a Codo",
//     formato: "Virtual",
//     bloques: ["Frontend", "Backend"],
//     inscribir: function(){
//     console.log("Inscritos al curso");
//     }
// }
// console.log(cursos.inscribir);
// console.log(cursos["inscribir"]);


// // Creamos el objeto
// var miAuto = new Object()
// // Creamos las propiedades
// miAuto.marca = 'Ford'
// miAuto.tipo = 'Ranger'
// miAuto.modelo = 2019
// console.log("El auto es:", miAuto.marca, miAuto.tipo,"y el modelo es",miAuto.modelo)
// console.log(`El auto es :: ${miAuto.marca}, el tipo de auto es: ${miAuto.tipo}, y el modelo ${miAuto.modelo}`);


// var perro = {
//     nombre: "Milo",
//     edad: 12,
//     vivo: false,
//     quienSoy() {return "Soy " + this.nombre},
//     ladrar() {return this.nombre + " dice guau!"}
// }
// console.log(perro.nombre,"tiene",perro.edad,"años"
// )
// console.log(perro.quienSoy())
// if (perro.vivo) {
// console.log(perro.ladrar())
// }


// class Perro{
//     constructor (nombre, edad, vivo){
//         this.nombre = nombre
//         this.edad = edad 
//         this.vivo =vivo
//     }
// }

// var perro1 = new Perro ('Lola', 12 , true)
// var perro2 = new Perro ('Lazzie',12,false)

// // Modificacion de la propiedad 
// console.log(perro1)
// console.log(perro2)

// console.log('--------------')
// perro1.nombre = 'ToBY'
// perro2.edad = 5

// console.log(perro1)
// console.log(perro2)


// Creamos una variable de texto
var texto1 = "¡Hola a todos!"
largo = texto1.length
console.log(largo)   //14
// Se puede usar directamente:
console.log("Hola".length) //4

// // Creamos una variable de texto
// var cad = "¡Hola "
// // Concatenamos con otra
// var saludo = cad.concat("Codo a Codo!")
// // Y en la consola vemos "¡Hola Codo a Codo!"
// console.log(saludo)

var cad= "hol acomo estas?"
document.write("CHAR AT <br>")
document.write(cad.charAt(10), "<br>") // devuelve "h"
var pos1= cad[1] //Almaceno en pos1 el caracter 1(“o”)
var pos2= cad[2] //indefinido (no hay elemento nro 20)
document.write(pos1) //devuelve o
document.write(pos2) //undefinded
