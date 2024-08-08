//comentarios
//alt + 39 = '
console.log('Hola consola');
alert('Hola desde un alert');

let nombre = "Yuli";//para dar una variable es: let o var


const pi = 3.14;// const es para el valor de una variable que no va a cambiar
//String nombre ="Juan";
// tipos de datos
//no definidos
let noDefinido;
//Número
let cantidad = 50;
//Cadena de texto o String
let bebida = "agua";
//booleanos
let activo = true;


// Objetos 
// Persona: nombre, apellido, edad, peso 
let persona = {nombre : 'Agustina', apellido : 'Min', edad : 29,};
console.log(persona);
//arrays es una conección
let personas = [
    {nombre : 'Henergina', apellido : 'Lopez', edad : 29,},
    {nombre: 'Cuquencia', apellido : 'Fernandez', edad : 27},
    {nombre : 'Joaquin', apellido : 'Gutierrez', edad : 30,},
    persona
]
console.log(personas);
console.log(personas[2]);

//Funciones JS
//Listado de instrucciones 
function suma(a, b) {
    return a+b;
}
let resultadoDeSuma = suma (9, 7);
console.log(resultadoDeSuma);

function multiplicacion(a, b) {
    return a * b;
}
let resultado = multiplicacion(5, 7);
console.log(resultado);