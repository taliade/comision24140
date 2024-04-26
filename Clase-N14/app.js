//Inicializar las variables

// var altura = 0;
// var edad = 0;
// altura = parseFloat(prompt("Ingrese la altura"));
// edad = parseInt(prompt("Ingrese la edad"));
// if (altura >= 1.30 && edad >= 14) {
//     console.log("Cumple con los requisitos");
// } else{
//     console.log("No cumple con los requisitos");
// }

// var color;
// color = prompt("Ingrese el color del auto  Puede ingresar Rojo  o Verde");
// if (color == "Rojo" || color == "Verde") {
//     console.log("El auto pertenece a la categoría A");
// } else{
//     console.log("El auto pertenece a la categoría B");
// }

// let i = 0;
// while(i < 5){
//     console.log("Valor de i es: " + i);
//     //i = i + 1;
//     i++;

// }

// let contador = 0;

// while (contador < 5) {
//   console.log("Iteración #" + (contador + 1));
//   contador++;
// }

// Inicializar la variable
//Segundo condicion que debe cumplir
//Tercer condicion Iteración Repita la ejecucion
// for (let a =0; a <= 10; a++ ){
//     //El codigo a mostrar o ejecutar
//     console.log("Dato de a:", a );
// }

// let contador = 0; // 5

// do {
//   console.log("Iteración #" + (contador));
//   contador++;
// } while (contador < 5);

// function saludar(){
//     console.log("Hola, soy una funcion");
// }

// saludar();

// //Declaración de la función tablaDelCinco()
// function tablaDelCinco(){
//     // Ingreso
//     for (i = 1; i <= 10; i++){
//         console.log("5 x", i, "=", 5 * i)}
//     }

//   tablaDelCinco(); //
//   console.log("Forma manual");

//     //Bucle que ejecuta 3 veces la función tablaDelCinco()
// for (let i = 1; i <= 3; i++) {
//     tablaDelCinco()
//     console.log("Estoy en la estructura for")
// }

// // Funcion Expresada
// ///        function sabes que es un funcion (parametros )
// var sumar = function(a, b) {
//     return a + b;
//   }; //retorna la operacion de suma

//  // Argumentos
//  // sumar("los argumentos")

//   var resultado = sumar(90, 15);
//   console.log(resultado);

//   console.log(sumar(60,10));

//   function saludarDos(miNombre){
//     console.log("Hola " + miNombre)
//     }
//     // saludarDos("Talia");

//     saludarDos("Codo a Codo") //Argumento fijo
//     var nombre= prompt("Ingrese su nombre");
//     saludarDos(String(nombre)) //Argumento que ingresa el usuario y el dato tiene que ser Tipo String
//     saludarDos('$(nombre)');

// Declaración
function tablaMultiplicar(tabla, hasta) {
  for (var i = 1; i <= hasta; i++)
    console.log(tabla + " x " + i + " = ", tabla * i);
}

tablaMultiplicar(6, 10);

// function mayoriaEdad(miApellido, miNombre, miEdad){
//     console.log("Apellido y nombre: " + miApellido + ", " + miNombre)
//     if (miEdad >= 18) {
//     console.log("Es mayor de edad " + "(" + miEdad + ")")}
//     else{
//     console.log("No es mayor de edad " + "(" + miEdad + ")")}
//     }

//     var ape= prompt("Ingrese su apellido")
//     var nom= prompt("Ingrese su nombre")
//     var edad= prompt("Ingrese su edad")
//     mayoriaEdad(ape, nom, edad)

var aCuadrado = (x) => x * x; //Flecha simple
console.log(aCuadrado(2));

//Funciones Flecha

var aMultiplicar = (num1, num2) => {
  producto = num1 * num2;
  return producto;
};
console.log(aMultiplicar(6, 7));
