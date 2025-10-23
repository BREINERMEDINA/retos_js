//Realiza estos ejercicios directamente en la consola
//Variables y operaciones
let f = 10;
let e = 3;
console.log("Suma:", f + e);
console.log("Resta:", f - e);
console.log("Multiplicación:", f * e);
console.log("División:", f / e);
console.log("Módulo:", f % e);
//Tipos de datos
const nombre = "Laura"
const edad = 25
const activo = true
console.log(typeof nombre)
console.log(typeof edad)
console.log(typeof activo)
//Arreglos
const frutas = ["Manzana", "Banano", "Pera"];
frutas.push("Fresa");
console.log(frutas);
console.log("Cantidad:", frutas.length);
//Función básica
function multiplicar(x, y) {
return x * y;
}
console.log(multiplicar(4, 5));
//Revisar los códigos propuestos y ejecutarlos.

//Ejercicio 3
/*Retos*/
//Reto 1: calculadora
let num1 = prompt("Ingrese el primer numero:");
let num2 = prompt("Ingrese el segundo numero:");
let operacion = prompt("Ingrese la operacion (+, -, *, /):");
let resultado = eval(num1 + operacion + num2);
console.log("El resultado de la operacion es:" + resultado);

// Reto 2: promedio de notas
let n1 = Number(prompt("Ingrese la nota 1:"));
let n2 = Number(prompt("Ingrese la nota 2:"));
let n3 = Number(prompt("Ingrese la nota 3:"));
let n4 = Number(prompt("Ingrese la nota 4:"));
let n5 = Number(prompt("Ingrese la nota 5:"));

let notas = [n1, n2, n3, n4, n5];
function prome(notas, suma = 0) {
  for (let i = 0; i < notas.length; i++) {
    suma = suma + notas[i];
  }
  return suma / notas.length;
}
const promedio = prome(notas);
console.log("El promedio de notas es: " + promedio);

//Reto 3: gestor de estudiantes
const estudiante={
  nombre: prompt("Ingrese el nombre del estudiante:"),
  edad: prompt("Ingrese la edad del estudiante:"),
  materias: [
    prompt("Ingrese la primera materia:"),
    prompt("Ingrese la segunda materia:"),
    prompt("Ingrese la tercera materia:")
  ],
  mostrarInfo: function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Materias: " + this.materias);
  }
};
estudiante.mostrarInfo();

//Reto 4: mayor y menor:
let nu1 = prompt("Ingrese 1 numero:");
let nu2 = prompt("Ingrese 2 numero:");
let nu3 = prompt("Ingrese 3 numero:");
let nu4 = prompt("Ingrese 4 numero:");
function mayorYMenor(num) {
  let mayor = num[0];
  let menor = num[0];
  for (let i = 1; i < 4; i++) {
    if (num[i] > mayor) {
      mayor = num[i];
    }
    if (num[i] < menor) {
      menor = num[i];
    }
  }
  return { mayor: mayor, menor: menor };
}
const resul = mayorYMenor([nu1, nu2, nu3, nu4]);
console.log("El número mayor es: " + resul.mayor);
console.log("El número menor es: " + resul.menor);

//Reto 5: ingreso de datos
const usuario = {
  nombre: prompt("Ingrese su nombre:"),
  edad: prompt("Ingrese su edad:"),
  telefono: prompt("Ingrese su teléfono:"),
  peso: prompt("Ingrese su peso (kg):"),
  mostrarInfo: function() {
    console.log("Nombre: " + this.nombre);
    console.log("Edad: " + this.edad);
    console.log("Teléfono: " + this.telefono);
    console.log("Peso: " + this.peso + " kg");
  }
};
usuario.mostrarInfo();
//Fin retos

/*Conversión Implícita
Ejercicio 1: Concatenación automática
Copia y ejecuta este código, luego explica por qué sucede lo que ves:*/
let a = "10" + 5;
console.log(a);
console.log(typeof a);
/*Preguntas:
¿Cuál fue el resultado? r="105"
¿Qué tipo de dato tiene la variable a? r=string
¿Por qué crees que ocurrió esta conversión? r=Porque el operador + cuando uno de los operandos es una cadena, convierte el otro operando a cadena y realiza esa union

Ejercicio 2: Operaciones aritméticas mixtas*/
let b = "20" - 5;
let c = "10" * "2";
let d = "50" / "5";
/*Preguntas:
¿Qué tipo de dato son b, c y d? r=number
¿Por qué no se comporta igual que el operador +? r=Porque los operadores -, * y / convierten los operandos a numeros antes de realizar la operacion

Ejercicio 3: Comparaciones*/
console.log(5 == "5");   // ?
console.log(5 === "5");  // ?
console.log(false == 0); // ?
console.log(false === 0);// ?
/*Preguntas:
¿Qué diferencia hay entre == y ===? r= == compara solo valor, === compara valor y tipo.
¿Cuál consideras más seguro usar en tus programas? r= el === porque evita errores inesperados al comparar diferentes tipos de datos

Conversión Explícita
Ejercicio 4: De cadena a número
Convierte manualmente los siguientes valores a número:*/
let x = "123";
let y = "45.6";
let z = "Hola";
console.log(Number(x));
console.log(parseInt(y));
console.log(parseFloat(y));
console.log(Number(z));
/*Preguntas:
¿Qué ocurre con "Hola"? r= no se puede convertir a numero, da NaN
¿Qué diferencias notas entre Number() y parseInt()? r= Number() convierte todo el string a número y parseInt() solo toma la parte entera

Ejercicio 5: De número a cadena*/
let num = 250;
console.log(String(num));
console.log(num.toString());

/*Pregunta:
¿Ambos métodos producen el mismo resultado? r= Sí
*/