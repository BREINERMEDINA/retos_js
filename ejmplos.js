//zona="Popayán"
/*sena=ADSO*/
console.log("sena");
console.log("Comercio");
console.log("   #");
console.log("  ###");
console.log(" ######");
console.log("########");
console.log("   ##");

// Variables
var nombre = "Juan David";
let casa = "ropa";
const PI = 3.1416; 

let cajaDeBreiner = "carro";
console.log(cajaDeBreiner);

//errores de sintaxis
/*let 1nombre = "Ana";
let c="2562";
let c-sena="adso";
let caja de ana = "moto";
let cda = "Mani2";*/

//Lo que si se puede
let caja_de_Breiner = "casa";
let caja_de_Breiner01 = "moto";
let IdUsuario = 12345;
let Id_usuario = 12345;

// operadores
/* + , - , * , / , % , ++ , -- , = , == , === , != , !== , > , < , >= , <= , && , || , ! */
let suma = 8 + 2;
console.log(suma);
let resta = 10 - 5;
console.log(resta);
let multiplicacion = 5 * 3;
console.log(multiplicacion);
let division = 10 / 2;
console.log(division);
let exponente = 2 ** 3;
console.log(exponente);
let exponencial = Math.pow(2, 3);
console.log(exponencial);

// Tipos de datos
let nombre_persona = "Ana"; // String
let fecha_Reporte = new Date("2025-10-16"); // date
let pregunta = true; // boolean
let variable; // undefined
let variable_nula = null; // valor nulo

// prueba presentación
console.log(typeof 42); // Muestra: "number" 
console.log(typeof "web"); // Muestra: "string" 
console.log(typeof {}); // Muestra: "object"
// object
const aprendiz = {
    nombre: "Carlos",
    edad: 18,
    tipo_sede: "Centro",
    saludar: function() {
        console.log("Hola, mi nombre es " + this.nombre);
    }
};
console.log(aprendiz.nombre);
aprendiz.saludar();

const equipo = {
    nombre: "Fuma",
    numero_jugadores: 17,
    sexo: "masculino",
    estadio: "Camp Nou",
    equipo: function() {
        console.log("El nombre del equipo es " + this.nombre);
    }
};
equipo.equipo();

//arreglos
let frutas = ["manzana", "banana", "cereza", "naranja"];
console.log(frutas);
console.log(frutas[3]);

let numeros = [10, 20, 30, 40, 50];
console.log(numeros[4]);

let prendics = ["Andres", "Juan", "Ana", "Luisa", "Carlos"];
console.log(prendics[3]);
