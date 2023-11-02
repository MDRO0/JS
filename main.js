//console.log('Hola desde el archivo .js');
//ESTO ES UN COMENTARIO
/* ESTO TAMBIEN ES UN COMENTARIO*/

/* SECCION 1 */

// --------- VARIABLES : Un espacio en memoria, y en javascript hay 3 tipos.

// Variable Global
var variableGlobal = 'Hola'; //Es una variable que se puede acceder desde cualquier parte del codigo

// Variable Local
let variableLocal = 'Como estas'; // Es una variable que solo se puede acceder desde la funcion o bloque de codigo

// Variable Constante
const constante = ' tu?'; // Es una variable que no se puede cambiar su valor
const PI = 3.1416;

console.log(variableGlobal)
console.log(variableLocal)
console.log(constante)
console.log(PI)

console.log(variableGlobal + ' ' + variableLocal + constante + ' ' + PI + ' Texto de relleno')

// --------- TIPOS DE DATOS

// String (Cadena de texto 'Hola soy un texto' "Hola soy un texto")
let nombre = 'Elimelech';

// Number (Numero entero por ej: 20 10 40 50 100)
let edad = 20;

// Float (Numero decimal por ej: 3.1416)
let altura = 1.75;

// Boolean (Boleano o este caso tambien (true or false) verdadero o falso)
let mayorDeEdad = false; //true / false

// Null (Tipo de dato nulo 'null')
let nada = null;

// Undefined (Tipo de dato indefinido)
let indefinido = undefined;

// Array (Lista, o arreglo)
let frutas = ['Manzana', 'Pera', 'Sandia'];
// Las posiciones de los elementos de un array (lista) parten desde el 0
console.log(frutas)
console.log(frutas[2])

// Objeto ( { nombre:'Elimelech', apellido:'Attale' } )
let personas = {nombre:'Elimelech',apellido:'Attale',materias:['Matematica','Castellano']};
console.log(personas.apellido);
personas.edad = 20;
console.log(personas);

//--------- REASIGNAR VARIABLES
console.log(altura);
altura = 1.80;
console.log(altura);
console.log(PI)
//PI = 0;
//console.log(PI)

//--------- OPERADORES ARITMETICOS
/*
+ (SUMA)
- (RESTA)
* (MULTIPLICACION)
/ (DIVISION)
% (MODULO DE UNA DIVISION ==> EL RESTO DE ESA DIVISION)
++ (INCREMENTO)
-- (DECREMENTO)
*/

let ejercicio1 = (10 + 5) * 2 / (5 - 3);
let ejercicio2 = 3 + '3' / 2;
let prueba = 3 * '3';
//ejercicio1--
console.log(prueba);

//--------- OPERADORES DE COMPARACION
/*

== (IGUAL A) ----> 2 == 2
=== (IGUAL VALOR IGUAL TIPO) ----> '2' === 2 <--- no es exactamente igual por el tipo de dato
!= (NO IGUAL) ----> 2 != 3 ---> VERDADERO (true)
!== (VALOR NO IGUAL o TIPO NO IGUAL) ----> '2' !== 2
> (MAYOR QUE)
< (MENOR QUE)
>= (MAYOR O IGUAL)----> 18 >= 18
<= (MENOR O IGUAL)----> 17 <= 17
? (OPERADOR TERNARIO)

*/

console.log(1 == 1)
console.log(1 == '1')
console.log(23 === '23')
console.log(5 != 9)
console.log(1 !== '1')
console.log(15 > 14)
console.log(5 < 6)
console.log(18 >= 18)
console.log((2 * 5) >= 12)
console.log((2 - 5) === '-3')
console.log((5 - 2) != 3)

//---------- OPERADORES DE ASIGNACION

/*
= (ASIGNACION)
+= (INCREMENTO)
-= (DECREMENTO)
*= (MULTIPLICACION)
/= (DIVISION)
%= (MODULO)
*/
let numero = 10;
numero+= 5 //numero = numero + 5;
numero-= 5; //numero = numero -5;
numero*= 5; //numero = numero * 5;
numero/= 5; //numero = numero / 5;
numero%= 2; //numero = numero % 2;
console.log(numero)
numero = 10;
numero+= (numero / 2)+ 5;
numero-= 20;
console.log(numero)

//---------- OPERADORES LOGICOS
/*

&& (and) ----> TODAS LAS CONDICIONES DEBEN SER VERDADERAS (true) --> 2 == 2 && 3 == 2
|| (or) ----> AL MENOS UNA CONDICION DEBE SER VERDADERA --> 2 == 2 || 3 == 2
! (not) (NEGACION)

*/
console.log(true && true)
console.log(false && true)
console.log(false && (4==4))
console.log(false && false);

console.log(false || false)
console.log(true || false)

console.log(!false)
console.log(!true)
console.log(!0)
console.log(!1)

let ejercicio3 = (5 === 5) || (!true);
let ejercicio4 = (!0) || (5 < 0);
let ejercicio5 = (3 > 4) && (!0);
console.log(ejercicio5)


//------- CONDICIONALES
// Son estructuras de control que nos permiten evaluar si una expresion es verdadera
// o falsa y ejecutar un codigo en base al resultado de esa evaluacion. IF,ELSE,ELSE IF

if(5!=5 || 3 == 3){
    console.log('ESTO ES VERDADERO, HOLA DESDE UN IF')
}else if(true){
    console.log('HOLA DESDE EL ELSE IF')
}else if(true){
    console.log('Hola desde else if 2')
}else{
    console.log('No se cumplio la condicion')
}
if(false){
    console.log('if 2')
}
if(17 >= 18){
    console.log('Puedes entrar')
}else{
    console.log('No puedes entrar')
}

let dato = parseInt(prompt('Ingresa un numero')); // let dato = '1';
//let transform = parseInt(dato); // let transform = 1;
if(dato === 1){ // '1' === 1
    console.log('Es uno')
}else{
    console.log('error')
}
console.log(dato)

//OPERADOR TERNARIO

// condicion ? valor verdadero : valor falso

let valor = 3 > 4 ? "Si" : "No";
console.log(valor)


//--------EJERCICIOS A REALZAR EN CLASE
/*

1) Verifica si un numero es par o impar.

2)Realiza un objeto "persona" con las siguientes propiedades:
        - Nombre
        - Apellido
        - Edad
        - Cedula
        - Nacionalidad
        - Profesion
        - Estado Civil
        - Hobbies
    Y evalua si la profesion es "Programador" y si el estado civil es "Soltero",
    En caso de ser programador, agregar una nueva propiedad "Lenguaje Favorito",
    y colocale "JavaScript", además de ello.
    colocale una propiedad llamada nombre completo, que sea la union del nombre 
    y el apellido.

3) Crea un objeto que represente a un "estudiante" que tenga las propiedades:
        - nombre
        - edad
        - nota1
        - nota2
        - nota3

    Debes crear un programa que determine si el estudiante aprueba o reprueba segun las siguientes condiciones:

        - El estudiante aprueba si su promedio de notas (nota1,nota2,nota3) es igual o mayor a 10
        - Ademas, el estudiante debe tener 18 años para aprobar.
        - Agregale una propiedad llamada resultadoFinal, que contenga el promedio.
        - Imprime por consola el objeto.


*/

//1

let num = 10;
if(num % 2 === 0){
    console.log('El numero es par')
}else{
    console.log('El numero no es par')
}


//2

let persona = {
    nombre:'Marcos',
    apellido:'Duque',
    edad:20,
    cedula:30622486,
    nacionalidad:'Venezolano',
    profesion:'Programador',
    estadoCivil:'Soltero',
    hobbies:['Futbol','videojuegos']
};

if(persona.profesion === 'Programador' && persona.estadoCivil === 'Soltero'){
    persona.lenguajeFavorito = 'JavaScript';
}
persona.nombreCompleto = persona.nombre + ' ' + persona.apellido;
console.log(persona);

//3

let estudiante = {
    nombre:'Marcos',
    edad:20,
    nota1:15,
    nota2:15,
    nota3:15,
}

let promedio = (estudiante.nota1 + estudiante.nota2 + estudiante.nota3) / 3;
estudiante.promedioFinal = promedio;
if(promedio >= 10 && estudiante.edad >= 18){
    console.log('El estudiante aprueba');
}else{
    console.log('El estudiante no aprueba');
}
console.log(estudiante);

