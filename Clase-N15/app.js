// function saludar() {
//     console.log('Hola, Como estas?');

//  }


//  saludar()

// function tablaDelCinco(){
//  for (a=1; a<=10; a++){
//     console.log('1 x', a, '=', 5*a);
//  }
// }

// for (i=1; i<=3; i++){
//     tablaDelCinco(); }


//     function suma(a,b){
//         return a + b;
//     }

//     console.log(suma(50,90));

//     function tablaMultiplicar(hasta) {
//         for (var i = 1; i <= hasta; i++)
//         console.log("1 x", i, "=", 1 * i)
//         }


//     tablaMultiplicar(6)

    // Declaración
// function saludarDos(miNombre){
//     console.log("Hola " + miNombre)
//     }

//     saludarDos("Codo a Codo") //Argumento fijo
// var nombre= prompt("Ingrese su nombre")
// saludarDos(nombre) //Argumento variable


// function mayoriaEdad(miApellido, miNombre, miEdad){
//     console.log("Apellido y nombre: " + miApellido + ", " + miNombre)
//     if (miEdad >= 18) {
//     console.log("Es mayor de edad " + "(" + miEdad + ")")}
//     else{
//         console.log("Es Menor de edad " + "(" + miEdad + ")")}
//     }

//         //Ejecución
// var apellido= prompt("Ingrese su apellido")
// var nombre= prompt("Ingrese su nombre")
// var edad= prompt("Ingrese su edad")
// mayoriaEdad(apellido, nombre, edad) // name lastname

// function sumar(a,b){
//     return a+b;
// }

// var a = 5, b = 5
// var resultado = sumar(a, b) // Se guarda 10 en la variable resultado
// console.log("La suma entre "+ a +" y "+ b +" es: "+ resultado)
// let resultado2= sumar(60,50); //
// console.log("La suma entre  los numeros de argumentos son: "+ resultado2)
// // ''  "" `comilla francesa  alt +96 `:`` Representacion del datos como objetos
// console.log(` jajajaa dato string texto : El resultado es: ${resultado2} `);
// function tablaDe(multiplicador = 1, inicio = 1, fin = 10) {
//     for (let index = inicio; index <= fin; index++) {
//         console.log(`${multiplicador} por ${index} es igual a: ${multiplicador * index}`)
//     }
//     console.log( multiplicador , ' por' , index , "es igual a:",multiplicador * index);
// }



// var numeroMaximo = function (valor1, valor2) {
//     if (valor1 > valor2) { return valor1 }
//     return valor2 // Agregar un else
//     }
//     var v1 = parseInt(prompt("Ingrese un número entero"))
//     var v2 = parseInt(prompt("Ingrese otro número entero"))
//     console.log("El número máximo es:", numeroMaximo(v1,v2))

//     // Función Arrow
// var aMultiplicar = (num1,num2) =>{
//     producto= num1*num2
//     return producto
//     }
// console.log(aMultiplicar(6,7))

//Funcion flecha
//     var fecha =() =>{
//         // Codigo a ejecutar
//     }
// console.log(fecha())

// Función anónima "saludo"
// const saludo = function () {
//     return "Hola"
//     }


// Función anónima "saludo"
let saludo = function (nombre) {
    var mensaje = "Hola " + nombre
    return mensaje
    }
saludo('Talia');



function saludar(nombre) {
    alert('Hola ' + nombre)
}
    function procesarEntradaUsuario(callback) {
    var nombre = prompt('Por favor ingresa tu nombre.')
    callback(nombre)
    }
  procesarEntradaUsuario(saludar)


  function iniciar() {
    var nombre = "Codo a Codo" // La variable nombre es una variable local creada por iniciar.
    function mostrarNombre() { // La función mostrarNombre es una función interna, una clausura.
    alert(nombre); // Usa una variable declarada en la función externa.
    }
    mostrarNombre()
    }

    iniciar()