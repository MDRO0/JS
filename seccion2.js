/* SECCION 2 DE JAVASCRIPT */

//------ LAS FUNCIONES
/*
Son bloques de codigo que nos permiten ejecutar una serie de instrucciones
en base a un nombre y parametros que le pasemos.
*/

//------ FUNCION SIN PARAMETROS
function saludar(){
    console.log('Hola, buenos dias!');
};
saludar();
if(true){
    saludar();
}
//------ FUNCION CON PARAMETROS
function saludarParametros(saludo){
    console.log(saludo); //console.log('Hola')
}

saludarParametros('Hola, desde un parametro');

//--------------
function multiplicar(num1,num2){
    console.log(num1 * num2); // console.log(5 * 9)
}

multiplicar(5,9);

//--------------
function realizarSaludo(nombre = null,apellido = null,edad = null){
    if(nombre === null || apellido === null){
        console.log('Hola anonimo!');
    }else{
        console.log('Hola ' + nombre + ' ' + apellido);
    }
}

realizarSaludo('Elimelech','Attale');
realizarSaludo();
realizarSaludo('Jose','Perdomo');

//---------- FUNCION CON RETORNO

function sumar(num1,num2){
    return num1 + num2;
}
console.log(sumar(20,20));

//----

function mayorDeEdad(edad){
    if(edad >= 18){
        return true;
    }else{
        return false;
    }
}
console.log(mayorDeEdad(17))

//------- FUNCION DENTRO DE UNA FUNCION

function permisos(edadUsuario){
    if(mayorDeEdad(edadUsuario)){
        console.log('Puedes ingresar!');
    }else{
        console.log('No puedes ingresar!');
    }
}

permisos(17);

// CREA UNA FUNCION QUE CALCULE EL AREA DE UN RECTANGULO
function calcular(ancho,altura){
    return ancho * altura;
}
console.log(calcular(10,5));


//-------- FUNCIONES RECURSIVA

function recursiva(num){
    console.log(num);
    if(num >= 10){
        return;
    }
    
    recursiva(num + 1);
}

recursiva(1);

//-------- SCOPE
if(true){
    var variableGlobal = 'Global';
    let variableLocal = 'Local';
    const variableConstante = 'Constante';
    console.log(variableGlobal);
    console.log(variableLocal);
    console.log(variableConstante);
}
console.log(variableGlobal);
//console.log(variableLocal);
//console.log(variableConstante);

function testScope(){
    var varVariable= 'Variable Global';
    let letVariable = 'Let';
    const constvariable = 'Const';
    //console.log(varVariable);
}
//console.log(letVariable);
//console.log(gabriel)
//testScope();


// EJERCICIOS
//1-) Crear una funcion que reciba como parametro un numero y que retorne verdadero
// si es par y falso si es impar

function detectarNumeros(numero){
    if(numero % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(detectarNumeros(19));

/*
2-) Crear una funcion que reciba como parametro dos numeros y un operador (+,-,*,/) y
que retorne el resultado de la operacion entre los dos numeros.
*/
function calculadora(num1,num2,operador){
    if(operador == '+'){
        return num1 + num2;
    } else if (operador == '-'){
        return num1 - num2;
    } else if (operador == '*'){
        return num1 * num2;
    } else if (operador == '/'){
        return num1 / num2;
    }
}

console.log(calculadora(50,20,'/'))

//------------ METODOS DE STRINGS ---------> METODOS A UNA CADENA DE TEXTO
let nombre = 'Pedrito Perez';
console.log(nombre[4]);

//length (longitud de una cadena de texto)
console.log(nombre.length)

//indexOf (buscar la posicion de un caracter o palabra)
console.log(nombre.indexOf('Perez'))

//slice (extraer una parte de la cadena de texto)
console.log(nombre.slice(8));
console.log(nombre.slice(0,7));

//trim (quitar espacios en blanco)
let nombre2 = '  Jose Perez  ';
console.log(nombre2.trim());

//split (convertir un string en un array)
let nombre3 = 'Juan-Perez-Lopez-Jimenez';
let nombre4 = 'Futbol';
console.log(nombre3.split('-')); //---> ['Juan','Perez','Lopez','Jimenez']
console.log(nombre4.split('')); //----> ['F','u','t','b','o','l']

//replace (reemplazar una parte de la cadena)
let nombre5 = 'Alberto Diaz';
console.log(nombre5.replace('Diaz','Perez'));

//toUpperCase (convertir a mayusculas);
console.log(nombre5.toUpperCase());

//toLowerCase (convertir a minusculas)
let mayusculas = 'TELEFONO';
console.log(mayusculas.toLowerCase());


//EJERCICIO
/*
Segun el siguiente string 
"La vida es como andar en bicicleta, para mantener el equilibrio, debes seguir adelante".

1-) Encontrar la posicion de la palabra "equilibrio"
2-) Encontrar la posicion de la palabra "bicicleta"
3-) Encontrar la posicion de la palabra "hola"
4-) Transformar el string en un array, separando por espacios.
5-) Transformar el string en mayusculas.
6-) Reemplzar la primera ocurrencia de "o" por "a"
7-) Concatenar a la frase lo siguiente ----> "- Albert Einstein"

*/

let frase = "La vida es como andar en bicicleta, para mantener el equilibrio, debes seguir adelante";

//1 
console.log(frase.indexOf('equilibrio'));
//2
console.log(frase.indexOf('bicicleta'));
//3
console.log(frase.indexOf('hola'));
//4
console.log(frase.split(' '));
//5
console.log(frase.toUpperCase());
//6
console.log(frase.replace('o','a'));
//console.log(frase.replaceAll('o','a'));
//7
console.log(frase + ' - Albert Einstein');

// ----------- METODOS DE ARRAYS
//----- COSAS A SABER DE UN ARRAY
let car1 = 'Mustang';
let car2 = 'Supra';
let car3 = 'Corvette';

let cars = ['Mustang','Supra','Corvette'];
console.log(cars[2]);

let array = [];
array[0] = 'iphone';
array[1] = 'Samsung';
array[2] = 'Xiaomi';
console.log(array)

cars[1] = 'Toyota';

console.log(cars)

//----------------
let frutas = ['Manzana','Banana','Pera','Aguacate','Kiwi'];

//length (longitud de un array)
console.log(frutas.length);

//push (nos permite agregar un elemento AL FINAL del array)
frutas.push('Naranja');
console.log(frutas);

//pop (quitar un elemento del FINAL del array)
frutas.pop();
console.log(frutas);

//unshift (agregar un elemento al PRINCIPIO del array)
frutas.unshift('Naranja');
console.log(frutas);

//shift (Quitar un elemento del PRINCIPIO del array)
frutas.shift();
console.log(frutas);

//indexOf (Encontrar la posicion de un elemento)
console.log(frutas.indexOf('Pera'));

//splice (Eliminar un elemento del array)
//let frutas = ['Manzana','Banana','Pera','Aguacate','Kiwi'];
//console.log(frutas.splice(2,3))
//------------------------(posicion(inicio),cantidadDeElementosAEliminar)
console.log(frutas)

//slice (Extraer una parte del array);
console.log(frutas.slice(1,3))

//sort (Ordenar un array)
console.log(frutas.sort())

//reverse (Invertir el orden de un array)
console.log(frutas.reverse())

//join (Convertir un array en un string)
console.log(frutas.join(', '));

//filter (filtrar en un array)

let correos = [
    "juan@gmail.com", ///----------> ME LO DEVUELVE
    "carlos@hotmail.com", //---------- > NO
    "raul@yahoo.com", //---------> NO
    "luis@gmail.com", //---------> ME LO DEVULVE
    "alberto@hotmail.com"
]

let correos_gmail = correos.filter(
    function (correo){
        return correo.includes('hotmail');
    }
)
//   =>
console.log(correos_gmail)

//Filtrar solo numeros pares
let numeros_array = [1,2,3,4,5,6,7,8,9,10,11,12];

const numerosPares = numeros_array.filter(function(numero){
    return numero % 2 !== 0 ;
})

console.log(numerosPares);

/*
EJERCICIOS

Dado el siguiente array de ciudades = ["Paris","Marsella","Lyon","Toulouse","Niza"]

1) Agregar dos ciudades mas al final del array.
2) Encontrar la posicion de la ciudad "Niza".
3) Eliminar la ciudad de "Niza".
4) Agregar la ciudad de "Burdeos" al principio del array.
5) Encontrar la posicion de la ciudad "Burdeos".
6) Encontrar todas las ciudades que tengan la letra "M".
7) Encontrar todas las ciudades que contengan la letra "P" o "N".
8) Encontrar todas las ciudades que contengan mas de 6 letras.
9) Encontrar todas las ciudades que contengan menos de 6 letras.

*/

let ciudades = ['Paris','Marsella','Lyon','Toulouse','Niza'];
//1
ciudades.push('Maracaibo','Coro');
console.log(ciudades);
//2
console.log(ciudades.indexOf('Niza'))
//3
//ciudades.splice(4,1);
console.log(ciudades);
//4
ciudades.unshift('Burdeos');
console.log(ciudades);
//5
console.log(ciudades.indexOf('Burdeos'));
//6
let ciudades_m = ciudades.filter(function(ciudad){
    return ciudad.includes('M');
})
console.log(ciudades_m);
//7
let ciudades_n_p = ciudades.filter(function(ciudad){
    return ciudad.includes('N') || ciudad.includes('P');
})
console.log(ciudades_n_p);
//8
let ciudad_mas_6 = ciudades.filter(function(ciudad){
    return ciudad.length > 6 
})

console.log(ciudad_mas_6);

//9
let ciudad_menos_6 = ciudades.filter(function(ciudad){
    return ciudad.length < 6 
})
console.log(ciudad_menos_6);

//------------ OBJETOS Y METODOS (Programacion orientada a objetos)

let carro = {
    marca:"Ford",
    modelo:"Fiesta",
    anno: 2020,
    color:"Rojo",
    encender: function(){
        console.log('El carro esta encendido');
    }
}
console.log(carro);
carro.encender();

//Objeto que representa un libro

const libro = {
    titulo:"La sombra del viento",
    autor:"Alberto Diaz",
    genero:"Novela",
    paginas:600,
    disponible: 5,
    prestar: function(){
        if(this.disponible > 0){ //---> if(true)
            this.disponible -= 1
            console.log('El libro ha sido prestado ' + this.disponible );
        }else{
            console.log('El libro ya esta prestado!')
        }
    },
    devolver: function(){
        if(this.disponible < 5){
            this.disponible += 1;
            console.log('El libro ha sido devuelto ' + this.disponible );
        }else{
            console.log('El libro ya esta disponible, no puede ser devuelto');
        }
    }
}

console.log(libro);
libro.prestar();
libro.prestar();
libro.prestar();
libro.prestar();
libro.prestar();
libro.prestar();
libro.devolver();
libro.devolver();
libro.devolver();
//libro.prestar();


//--------------------- Constructores 

let juego1 = {plataforma:'xbox',nombre:'Grand Theft Auto V', creador:'Rockstar Games'};
let juego2 = {plataforma:'ps4',nombre:'Fortnite',creador:'Epic Games'};

function Juego(plataforma,nombre,creador){
    this.plataforma = plataforma;
    this.nombre = nombre;
    this.creador = creador;

    this.mostrarInformacion = function(){
        console.log('Nombre: ' + this.nombre);
        console.log(`Plataforma: ${this.plataforma}`);
        console.log(`Creador: ${this.creador}`);
    }
}

let juego3 = new Juego('PC','FIFA','Esport');

console.log(juego3)
juego3.mostrarInformacion();
console.log(juego2)

//---------------------- CLASES
/*
JUEGO DE MARIO = MARIO Y LUIGI

Objeto: Player 1              Objeto : Player 2

Atributos: (Caracteristicas distintas entre los players)
Nombre: Mario                 Nombre: Luigi
color: Rojo                   color: Verde

Metodos:
Saltar()
Correr()
Saludar()

*/

//(Primera letra en Mayuscula)
class Player{
    constructor(nombre,color){
        this._nombre = nombre;
        this._color = color;
    }
    saltar(){

    }
    correr(){

    }
    saludar(){
        //console.log(`Holaaaaa soy ${this._nombre}`);
        return `Holaaaaa soy ${this._nombre}`;
    }

    //get ----> es mostrar informacion
    get nombre(){
        return this._nombre;
    }
    //set -----> Modificar
    set nombre(nuevo){
        this._nombre = nuevo;
    }
}

let player1 = new Player('Mario','Rojo');
let player2 = new Player('Luigi','Verde');

//Realizar un saludo
console.log(player1.saludar());
console.log(player2.saludar());

//Usar el metodo GET
console.log(player1.nombre)

//Usar el metodo SET
player1.nombre = 'Pedro';
console.log(player1.nombre)

//Mostrando las instancias de Player.
console.log(player1);
console.log(player2);

//----------------------- SUB CLASE (Herencia)
/*
    La herencia tambien suele ser llamada POLIMORFISMO, ya que nos permite
    crear objetos que comparten atributos y metodos de una clase padre,
    pero que a su vez pueden tener atributos y metodos propios.

*/

class Enemigo extends Player{
    constructor(nombre,color,fuerza){
        super(nombre,color); // referencia al padre (Player) lo esta heredando
        this._fuerza = fuerza;

    }
    get fuerza(){
        return this._fuerza;
    }
    set fuerza(nuevaFuerza){
        this._fuerza = nuevaFuerza;
    }
}

let enemigo1 = new Enemigo('Malvado','Amarillo',900);
console.log(enemigo1);
console.log(enemigo1.saludar());
console.log(enemigo1.fuerza)
enemigo1.fuerza = 800;
console.log(enemigo1.fuerza)



//ejemplo con carros

class Carro{
    constructor(marca,modelo,year,color){
        this._marca = marca;
        this._modelo = modelo;
        this._year = year;
        this._color = color;
    }
    encender(algo){
        return 'El carro esta encendido ' + algo;
    }
    get mostrar_informacion(){
        return `Marca: ${this._marca}, Anno: ${this._year}`;
    }
}

let carro1 = new Carro('Ford','Fiesta',2020,'Azul');
let carro2 = new Carro('Chevrolet','Corsa',2015,'Rojo');
console.log(carro1)
console.log(carro2)
console.log(carro1.encender('HOLA'));
console.log(carro2.encender('ADIOS'));
console.log(carro1.mostrar_informacion)

/*

    1) Crear una clase llamada Calculadora, que no tenga funcion constructora,
    y que tenga los siguientes metodos: sumar, restar, multiplicar y dividir.


    2) Crear una clase llamada Personaje, que tenga los siguientes atributos:
    nombre, apodo, edad, salud, fuerza, rareza, y que tenga los siguientes metodos:
    atacar, defender, saludar (Estos metodos deben imprimir en consola, solo eso (get)).
    Debes crear 5 personajes con diferentes atributos y ejecutar los metodos de cada
    uno.

*/

//1
class Calculadora{
    sumar(a,b){
        return a + b;
    }
    restar(a,b){
        return a - b;
    }
    multiplicar(a,b){
        return a * b;
    }
    dividir(a,b){
        if(b === 0){
            return 'No es posible';
        }else{
            return a / b;
        }
        
    }
}

let calculadoraC = new Calculadora();
console.log(calculadoraC.restar(10,5))

//2

class Personaje{
    constructor(nombre,apodo,edad,fuerza,rareza){
        this._nombre = nombre;
        this._apodo = apodo;
        this._edad = edad;
        this._fuerza = fuerza;
        this._rareza = rareza;
    }
    atacar(){
        return `El personaje ${this._nombre} esta atacando!`;
    }
    defender(){
        return `${this._nombre} se esta defendiendo.`;
    }
    get saludar(){
        return `Hola soy ${this._apodo}`;
    }
}

let personaje1 = new Personaje('Rodolfo','Olfors',25,900,'Epic');
console.log(personaje1);
console.log(personaje1.atacar());
console.log(personaje1.saludar)


//---------------------- BUCLES (LOOPS) (CICLOS)

let verduras = ["Tomate","Lechuga","Zanahoria","Papa","Cebolla"];

//-------FOR
/*
for ()
1. let i = 0 -----> Declaracion de la variable (contadora)

NOTA: Cada parte va separada por ;

2. i < 10; -------> Esta es la condicion que se verifica en cada iteracion del ciclo.

3. i++ ----> i = i + 1 ----> Despues de cada iteracion , la variable i se incrementa
en 1

Como es escribe un ciclo for:

for(let i = 0; i < 10; i++ ){

}

*/

for(let i = 0; i <= 10; i++){
    console.log('Hola mundo ' + i);
}

//For con array
for(let i = 0; i < verduras.length; i++){
    console.log(verduras[i] + i);
}

// Crea un ciclo que imprima solo los numeros pares del 0 al 100

for(let i = 0; i <= 100; i++){
    if(i % 2 === 0){
        console.log(`El numero ${i} es par`);
    }
}

for(let i = 2; i <= 100; i+=2){
    console.log(`El numero ${i} es par (Otra forma)`);
}

//------------- FOR IN   ----> DEVUELVE LA POSICION DE LOS ELEMENTOS
//Para arrays

for(let i in verduras){
    console.log(verduras[i]);
}

//Objetos

let bicicleta = {
    marca: 'Mountaain Bike',
    rodado: 26,
    color: 'Rojo',
    frenos: 'Disco',
    cambios: 21
}

for(let i in bicicleta){
    console.log(i); //---------> DEVUELVE CADA UNA DE LAS PROPIEDADES
    console.log(bicicleta[i]) //--------> DEVUELVE CADA VALOR DE LAS PROPIEDADES
}

// Imprime en una sola variable, el nombre, apellido y edad de la siguiente variable

let persona = {
    nombre: 'Eli',
    apellido:'Attale',
    edad: 20
}

let acumulador = '';
for(let propiedad in persona){
    acumulador += persona[propiedad] + ' ';
    console.log(acumulador);
}
/*
Primera iteracion: acumulador = Eli 
Segunda iteracion: acumulador = Eli Attale 
Tercera iteracion: acumulador = Eli Attale 20 
*/

//----------------- FOR OF
// DEVUELVE EL ELEMENTO DIRECTAMENTE, Y NO LA POSICION
// let verduras = ["Tomate","Lechuga","Zanahoria","Papa","Cebolla"];

for(let verdura of verduras){
    console.log(verdura);
}


//--------------------- CICLO WHILE

let contador = 0;

while(contador <= 10){
    console.log(contador);
    contador++; // contador = contador + 1;
}

//-------------------- CICLO DO WHILE
// SE EJECUTA SIEMPRE AL MENOS UNA VEZ

let contador2 = 0;
do{
    console.log(contador2)
    contador2++;
}while(contador2 <= 10);

//EJERCICIO
let compras = [["carne molida","carne mechada"],["papas","batatas","cebollas"],["jamon","queso","salame"]];
console.log(compras[0][1])

// IMPRIME CADA UNO DE LOS ELEMENTOS DENTRO DE LOS ARRAYS DEL ARRAY DE COMPRAS (con for)

for(let i in compras){
    for(let j in compras[i]){
        console.log(compras[i][j])
    }
} 

/*------ EJERCICIOS A REALIZAR EN GRUPO (EN CLASE)

1) Imagina que estas desarrollando un sistema de gestión de empleados para una empresa,
   debes crear una jerarquía de clases que incluye las siguientes:

    a) Una clase llamada "Empleado" que tenga propiedades comunes como (nombre,edad y salario).

    b) Una clase llamada "Gerente" que herede de "Empleado" y tenga las propiedades adicionales como     (departamento y empleados a cargo).

    c) Una clase llamada "Desarrollador" que herede de "Empleado" y tenga propiedades adicionales como (lenguaje y proyectos asignados).

    d) Implementa un constructor en cada clase para inicializar sus propiedades.

    e) Agrega métodos a las clases para obtener informacion detallada sobre cada tipo de empleado.
    
    f) Crea instancias (new) de varios empleados, incluyendo gerentes y desarrolladores, y muestra informacion sobre ellos.

2) Crea un programa que calcule e imprima la tabla de multiplicar del 1 al 10 para un
   numero especifico ingresado por el usuario. (Usar funcion y bucle for).

3) Crea un juego en el que el programa genera un numero aleatorio del 1 al 100, y luego
   le pide al usuario ese numero. El bucle "WHILE" debe continuar ejecutandose
   hasta que el usuario adivine correctamente el numero. (Investigar Math.random)

*/

//3.
