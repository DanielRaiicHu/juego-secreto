
/*
//Desafío: Hora de practicar 2 - Clase 2
//1. Crear una función que muestre "¡Hola, mundo!" en la consola.
function saludar(){
    console.log ("Hola Mundo");
}
saludar();

//2. Crear una función que reciba un nombre como parámetro y muestre "¡Hola, [nombre]!" en la consola.
function saludar(nombre){
console.log(`Hola ${nombre}`);
}
let nombre = prompt("Ingresa tu nombre: ");
saludar(nombre);

//3. Crear una función que reciba un número como parámetro y devuelva el doble de ese número.

function dobleDelNumero(numero){
let doble = numero * 2;   
console.log(`El doble del número ${numero} es ${doble}`);
}

let numero = parseInt(prompt("Ingrese un número: "));
dobleDelNumero(numero);


//4. Crear una función que reciba tres números como parámetros y devuelva su promedio.
function promedio(numero1, numero2, numero3){
    let suma = numero1 + numero2 + numero3;
    let promedio = suma/3;
    let promedioRedondeado = promedio.toFixed(1);
    console.log(`El promedio de ${numero1}, ${numero2} y ${numero3} es ${promedioRedondeado}`) //promedio redondeado
}

let numero1 = parseFloat(prompt("Ingrese un número: "));
let numero2 = parseFloat(prompt("Ingrese un número: "));
let numero3 = parseFloat(prompt("Ingrese un número: "));
promedio(numero1, numero2, numero3);


//5. Crear una función que reciba dos números como parámetros y devuelva el mayor de ellos.

function encontrarNumeroMayor(numero1, numero2) {
    
    if(numero1 > numero2)
    {
    console.log(`El número mayor es: ${numero1}`);    
    }
    else if (numero1 < numero2){
    console.log(`El número mayor es: ${numero2}`);    
    }
    else{
    console.log(`Los números ${numero1} y ${numero2} son iguales`);
    }

}
let numero1 = parseInt(prompt("Ingrese un número: "));
let numero2 = parseInt(prompt("Ingrese un número: "));
//se puede reducir con el siguiente codigo
//let [numero1, numero2] = [0, 0].map(() => parseInt(prompt("Ingrese un número: "))); 
encontrarNumeroMayor(numero1, numero2);



//6. Crear una función que reciba un número como parámetro y devuelva el resultado de multiplicar ese número por sí mismo.
function multiplicar(numero){
    let multiplicar = numero * numero;
    console.log(`El resultado de ${numero} x ${numero} es ${multiplicar}`);
}
let numero = parseInt(prompt("Ingrese un número: "));
multiplicar(numero);
*/



/* //JUEGO DEL NUMERO SECRETO
//variables
let numeroSecreto = 0;
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 4;
//console.log(numeroSecreto); //para verificar en consola

function asignarTextoElemento(elemento, texto){
let elementoHTML = document.querySelector(elemento);
elementoHTML.innerHTML = texto;
} */

/*
//esto ya se eliminó
function intentoDeUsuario(){
    alert ("Click desde el botón");
}
*/

/* function generarNumeroSecreto() {
    //return Math.floor(Math.random()*10)+1; //previamente, antes de los cambios para incluir arreglos
    
    let numeroGenerado = Math.floor(Math.random()*numeroMaximo)+1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);
    //Si ya sorteamos todos los numeros
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números');
    }else{ //if anidado

        //Si el número generado está incluido en la lista
        if(listaNumerosSorteados.includes(numeroGenerado)){
        return generarNumeroSecreto();
        //Si el número generado NO está incluido en la lista
        } else{
        listaNumerosSorteados.push(numeroGenerado); //se coloca numero al final de la lista
        return numeroGenerado;
        }
    }
}

function limpiarCaja(){
    document.querySelector('#valorUsuario').value =''; //el # es el atributo 'id' dentro de la caja 
}

function verificarIntento(){
let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //forzar al numeroDeUsuario a ser valor numérico. Obtiene valor cuya id es 'valorUsuario' desde caja de texto
 */
/* 
//manera anterior 
console.log(typeof(numeroDeUsuario));
console.log(numeroSecreto);
console.log(typeof(numeroSecreto));
console.log(numeroDeUsuario);
console.log(numeroDeUsuario === numeroSecreto); // === compara ambos datos, tienen que ser del mismo tipo y valor */
//console.log(intentos);


/* if (numeroDeUsuario === numeroSecreto){
    asignarTextoElemento('p',`Acertaste el número secreto en ${intentos} ${(intentos===1)? 'intento':'intentos'}`);
    document.getElementById('reiniciar').removeAttribute('disabled')
} else {
    //El usuario no acertó
    if (numeroDeUsuario > numeroSecreto){
        asignarTextoElemento('p','El número secreto es menor');
        
    } else{
        asignarTextoElemento('p','El número secreto es mayor');
       

    }
    intentos++;
    limpiarCaja();
}

return;
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intentos=1;
}

function reiniciarJuego(){
    //limpiar caja
    limpiarCaja();
    //indicar mensaje de intervalo de numeros
    //generar el numero aleatorio
    //inicializar el numero de intentos
    condicionesIniciales();
    //deshabilitar el boton de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
}

condicionesIniciales(); */


//EJERCICIO
/* // Lista de libros disponibles
let listaDeLibros = ["libro 1", "libro 2", "libro 3"];

// Lista de libros sorteados (vacía inicialmente)
let listaDeLibrosSorteados = [];

// Límite de libros (cantidad total)
let numeroLimite = listaDeLibros.length;

function sortearLibro() {
    // Genera un número aleatorio entre 1 y numeroLimite
    let libroElegido = parseInt(Math.random() * numeroLimite + 1);

    // Cantidad de libros ya sorteados
    let cantidadDeLibrosSorteados = listaDeLibrosSorteados.length;

    // Si ya se sortearon todos los libros, reinicia la lista
    if (cantidadDeLibrosSorteados == numeroLimite) {
        listaDeLibrosSorteados = [];
        console.log("Se reinicia el sorteo, todos los libros han sido seleccionados.");
    }

    // Si el libro ya fue sorteado, intenta generar otro
    while (listaDeLibrosSorteados.includes(libroElegido)) {
        libroElegido = parseInt(Math.random() * numeroLimite + 1);
    }

    // Agrega el libro sorteado a la lista de sorteados
    listaDeLibrosSorteados.push(libroElegido);

    // Muestra el libro seleccionado por consola
    console.log(`Libro sorteado: ${listaDeLibros[libroElegido - 1]}`);
}

// Pruebas: Llamar la función 3 veces para sortear 3 libros
sortearLibro();
sortearLibro();
sortearLibro(); */

/* 




//Desafío. Hora de practicar 3.2
4. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion.
5. Crea una función que muestre en la consola todos los elementos de la lista "lenguagesDeProgramacion en orden inverso.
6. Crea una función que calcule el promedio de los elementos en una lista de números.
7. Crea una función que muestre en la consola el número más grande y el número más pequeño en una lista.
8. Crea una función que devuelva la suma de todos los elementos en una lista.
9. Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
10. Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
11. Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.
 */

//1. Crea una lista vacía llamada "listaGenerica".
let listaGenerica = []; 

//2. Crea una lista de lenguajes de programación llamada "lenguagesDeProgramacion con los siguientes elementos: 'JavaScript', 'C', 'C++', 'Kotlin' y 'Python'.
let lenguajesDeProgramacion = ['JavaScript','C','C++','Kotlin','Phyton']; 

//3. Agrega a la lista "lenguagesDeProgramacion los siguientes elementos: 'Java', 'Ruby' y 'GoLang'.
lenguajesDeProgramacion.push('Java','Ruby','GoLang');
console.log(lenguajesDeProgramacion);