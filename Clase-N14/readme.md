## Variables : Son nombres que apuntar a guardar en los espacios de la memoria virtual,  apunta a un datos - permite reconocerlo y pueden variable mutar. 

//const : Cuando definimos el espacios de la memoria virtual va hacer siempre el mismo.  
 
 
 ## BUCLE  FOR
  ```
    for (let i = 0; i < 5; i++) {
      console.log("Iteración #" + (i + 1));
    }
  
 ```
//While 
## BUCLE WHILE 
 ```
    let contador = 0;
    
    while (contador < 5) {
      console.log("Iteración #" + (contador + 1));
      contador++;
    }
 ```

<p> 
El bucle while imprimirá "Iteración #1" hasta "Iteración #5" porque la condición contador < 5 es verdadera en cada iteración. A medida que aumentamos el contador, eventualmente la condición será falsa y el bucle se detendrá. ** Importante si la condicion es verdadera sigue el bucle
</p>

## BUCLE DO WHILE <
//ejemplo 
 ```
    let contador = 0;
    
    do {
      console.log("Iteración #" + (contador + 1));
      contador++;
    } while (contador < 5);
 ```
<p> El bucle do...while es similar al while, pero garantiza que el bloque de código se ejecute al menos una vez antes de verificar la condición. </p>

### Diferencias 
<p>Ambos bucles son útiles en diferentes situaciones. El while se usa cuando no estás seguro de si la condición será verdadera desde el principio, mientras que el do...while se utiliza cuando deseas asegurarte de que el bloque de código se ejecute al menos una vez antes de verificar la condición.</p>

 

 # Clase N°14 Funciones 

### Funcion Declarada

 ```
function saludar() {
  
  console.log("¡Hola, mundo!");
}

saludar();
 ```
##### En una función declarada, el nombre de la función está disponible en todo el ámbito en el que se define. Esto significa que puedes llamar a la función en cualquier parte del código, incluso antes de que la declaración de la función aparezca en el código.


### Funcion Expresada
 ```
var sumar = function(a, b) {
  return a + b;
};

var resultado = sumar(3, 5);
console.log(resultado);

 ```

###  Las funciones declaradas son accesibles en todo el ámbito en el que se definen, incluso antes de su declaración en el código. Las funciones expresadas solo están disponibles después de que se haya realizado la asignación de la función a una variable.

### Return 
 ```
function sumar(a, b) {
  let resultado = a + b;
  return resultado;
}

let numero1 = 5;
let numero2 = 3;
let suma = sumar(numero1, numero2);
console.log(suma);

#### Funcion Flecha 

const sumarConsole = (a, b) =>{
let resultado = a + b;
 console.log('El valor retinado es: ', resultado);
}

const sumarAlert = (a, b) =>{
let resultado = a + b;
    alert('El valor retinado es: ', resultado);
}
 ```

### Como resultado 

    const sumar = (a, b, callback) =>{
        let resultado = a + b;

        callback(resultado);
    }
    suma(10, 7, fuction (suma){
        console.log('El valor retornado es' , suma);
    });

    sumar(8, 5, fuction (suma){
    alert('El valor retornado es: ', suma);
    });


 ```









### Callback (Sincronicos llamar de vuelta)
#### Los callbacks generalmente se utilizan para manejar operaciones asíncronas. Sin embargo, también es posible usar callbacks de forma sincrónica, aunque no es tan común. Un callback síncrono se ejecuta inmediatamente después de que se llama a la función que lo recibe como argumento.

Ejemplo : 
 ```
function operacionSincrona(callback) {
  console.log("Realizando operación sincrónica...");
  callback();
}

function callback() {
  console.log("Callback ejecutado.");
}

operacionSincrona(callback);
 ```

#### Callback Asincrona

##### Aunque los callbacks sincrónicos pueden ser útiles en algunos casos, es más común usarlos para manejar operaciones asíncronas, ya que permiten un mejor control del flujo del programa cuando se trabaja con tareas que pueden llevar tiempo, como solicitudes de red o lecturas/escrituras de archivos.
 ```

function operacionAsincrona(callback) {
  // Simulamos una operación asíncrona
  setTimeout(function() {
    // Después de 2 segundos, llamamos al callback
    callback();
  }, 2000);
}

function callback() {
  console.log("La operación asíncrona ha finalizado.");
}
 ```
// Llamamos a la función operacionAsincrona pasando el callback
operacionAsincrona(callback);