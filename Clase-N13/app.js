// alert("Hola Mundo!!")

//Operadores 
// let num1 = 10;
// let num2 = 6;
// let suma = num1 + num2;
// let resta = num1 - num2;
// let multiplicacion = num1 * num2;
// let division = num1 / num2;

// console.log("Suma:", suma); // Resultado: 15
// console.log("Resta:", resta); // Resultado: 5
// console.log("Multiplicación:", multiplicacion); // Resultado: 50
// console.log("División:", division); // Resultado: 2

// Operadores de Relacion

let edad = 25;
let edadMinima = 18;

let esMayorDeEdad = edad >= edadMinima;

console.log("¿Es mayor de edad?", esMayorDeEdad); // Resultado: true


// let contador = 5;
// contador++; // Incremento en 1
// console.log(contador); // Resultado: 6


// let contador = 10;
// contador--; // Decremento en 1
// console.log(contador); // Resultado: 9


// let numero = 7;
// let resultado = numero++ + 5; // Incremento después de la operación
// console.log(numero); // Resultado: 8 (el valor de 'numero' se incrementa después de la operación)
// console.log(resultado); // Resultado: 12 (7 + 5)

// let otroNumero = 10;
// let otroResultado = --otroNumero + 5; // Decremento antes de la operación
// console.log(otroNumero); // Resultado: 9 (el valor de 'otroNumero' se decrementa antes de la operación)
// console.log(otroResultado); // Resultado: 14 (9 + 5)

//Condicionales  anidadamiento - Recomedacion 3 IF -  ELSE IF -ELSE
// let temperatura = 39;

// if (temperatura > 30) {
//   console.log("Hace calor");
// } else if (temperatura <= 30 && temperatura >= 20) {
//   console.log("El clima es agradable");
// } else {
//   console.log("Hace frío");
// }

let diaDeLaSemana = 6;
    let nombreDia;
    
    switch (diaDeLaSemana) {
      case 1:
        nombreDia = "Lunes";
        break;
      case 2:
        nombreDia = "Martes";
        break;
      case 3:
        nombreDia = "Miércoles";
        break;
      case 4:
        nombreDia = "Jueves";
        break;
      case 5:
        nombreDia = "Viernes";
        break;
      case 6:
        nombreDia = "Sábado";
        break;
      case 7:
        nombreDia = "Domingo";
        break;
      default:
        nombreDia = "Día no válido";
    }
    
    console.log("Hoy es: ", nombreDia);