//alert('error')

// Comentarios  Empezamos como CSS  // Comentarios en linea

/**
 * Comentario de Texto o indicaciones 
 * 
 * Pertenecen al ámbito o scope global de nuestro documento, por lo que pueden ser accedidas y reasignadas desde cualquier lugar del mismo.
El uso de ésta, puede dar resultados inesperados, por eso, hay que tener cuidado de cómo se usa.
 * 
 */

var deporte = 10; //Numero datos int
console.log(deporte);
var jugador = 'Nicolas' //Cadena de texto
console.log(jugador);
//renombrar a la variable  
jugador = 'Daniel'

console.log(jugador);
deporte = 9000;
console.log(deporte);


/**
 * LET 
 * El alcance de estas variables es local, solo pueden ser accedidas dentro del bloque donde se definen. 
También, permiten que su valor pueda ser reasignado.
 */

let ropa = 'Remera';
console.log(ropa);
ropa = 'Pantalon';
console.log(ropa);

{
    // BLOQUE DE CODIGO  
    let frutas = 'Frutilla';
    console.log(frutas);
}


let frutas = 'Mandarina';
console.log(frutas);


/**
 * 
 * CONST  constante
 * no puede mutar o no reasignar   
 * Solo pueden ser accedidas dentro del bloque donde están definidas, pero no permite que su valor sea reasignado, es decir, la variable se vuelve inmutable.

*/

const PI = 3.14 ;

console.log(PI);

// Funciones  { crear variables asignar funcionalidad suma  resta  comparaciones }

console.info(PI);
console.error(ropa)
console.warn(deporte)


let nuevo_mas = ' Muchos alumnos';
let nuevo2024 =  50;

//objetos 
let datos = { //objeto 
    propiedad : 'valor',
    propiedad2 : 'valor'

}

console.info(datos);

console.log(typeof datos)
console.log(typeof frutas)
console.log(typeof nuevo2024)


var cadenaNumero ='6000 hola'; 
// cadena en un número entero
var numeroEntero = parseInt(cadenaNumero);

var Entero = '42'
// Imprimir el resultado
console.log(Entero); // Output: 42

var suma = Entero + 10;
console.log(suma); //
console.log(Entero +=10);
console.log(42 + 10 );

var num = 90;
var num2 = 100;
console.log(num + num2);
document.write( 'Hola mundo des script')
document.write( 'Hola mundo des script')
document.write( 'Hola mundo des  <br> script')


