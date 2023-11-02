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

class Empleado {
    constructor(nombre,edad,salario){
        this._nombre = nombre;
        this._edad = edad;
        this._salario = salario;
    }
    get informacionEmpleado(){
        return `nombre: ${this._nombre}, edad: ${this._edad}, salario: ${this._salario}`;
    }
}

class Gerente extends Empleado{
    constructor(nombre,edad,salario,departamento,empleadosACargo){
        super(nombre,edad,salario);
        this._departamento = departamento;
        this._empleadosACargo = empleadosACargo;
    }
    get informacionGerente(){
        return `departamento: ${this._departamento}, empleadosACargo: ${this._empleadosACargo}`;
    }

}
class Desarrollador extends Empleado{
    constructor(nombre,edad,salario,lenguaje,proyectosAsignados){
        super(nombre,edad,salario);
        this._lenguaje = lenguaje;
        this._proyectosAsignados = proyectosAsignados;          
    }
    get informacionDesarrollador(){
        return `nombre: ${this._nombre}, edad: ${this._edad}, salario: ${this._salario}, lenguaje: ${this._lenguaje}, proyectosAsignados: ${this._proyectosAsignados}`;
    }
}
let Empleado1 = new Empleado('Edgar',30,'$800');
let Gerente1 = new Gerente('Edgar',30,'$800','A20',200);
let Desarrollador1 = new Desarrollador('Edgar',30,'$800','JavaScript','P_Amazon');
console.log(Empleado1)
console.log(Desarrollador1);
console.log(Gerente1);

//----------------------------------------------------------------------------------

// 2 )
numUsuario = prompt('Ingresa un numero')
for(let i = 0; i <= 10; i++){
    function multiplicar(){
        console.log(numUsuario * i);
    }
    multiplicar();
}

//-----------------------------------------------------------------------------------

// 3 )
let contador = true;
let numAleatorio = 0;
function getRandomInt(max) {
    return numAleatorio = Math.floor(Math.random() * max);
} 
console.log(getRandomInt(100));

while(contador==true){
    let numUsuario = prompt('Ingrese un numero del 1 al 100')
    if(numUsuario == numAleatorio){
        console.log('Felicidades!, haz Ganado');       
        contador=false;
    }else{
        console.log(':c ..sigue intentado');
    }
}