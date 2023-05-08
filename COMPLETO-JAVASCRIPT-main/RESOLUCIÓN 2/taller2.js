/* PASO 1 */
let nota1 = parseFloat(prompt("Ingrese la primera nota:"));
let nota2 = parseFloat(prompt("Ingrese la segunda nota:"));
let nota3 = parseFloat(prompt("Ingrese la tercera nota:"));
let promedio = (nota1 + nota2 + nota3) / 3;
if (promedio <= 3.9) {
  alert("Estudie");
} else {
  alert("Becado");
}
/* PASO 2 */
const num = parseInt(prompt("Ingresa un número"));
const parImpar = num % 2 === 0 ? "par" : "impar";
const mayorQueDiez = num > 10 ? "mayor que 10" : "es menor que 10";
alert(`El número es ${parImpar} y ${mayorQueDiez}`);
/* PASO 3 */
let resistencia = prompt('Ingrese la resistencia')
let intensidad = prompt('Ingrese la intensidad')
let voltaje = resistencia * intensidad
alert(`El voltaje del circuito electrico es ${voltaje}volts`)
/* PASO 4 */
let nombres = [];
let edades = [];
for (let i = 1; i <= 3; i++) {
  let nombre = prompt(`Ingrese el nombre de la persona ${i}:`);
  let edad = parseInt(prompt(`Ingrese la edad de la persona ${i}:`));
  nombres.push(nombre);
  edades.push(edad);
}
let mayorEdad = 0;
for (let i = 1; i < 3; i++) {
  if (edades[i] > edades[mayorEdad]) {
    mayorEdad = i;
  }
}
alert(`La persona con mayor edad es: ${nombres[mayorEdad]}`);
/* PASO 5*/
let num1 = parseFloat(prompt("Ingrese el primer número:"));
let num2 = parseFloat(prompt("Ingrese el segundo número:"));
if (num1 > num2) {
  let suma = num1 + num2;
  let diferencia = num1 - num2;
  alert(`La suma es ${suma} y la diferencia es ${diferencia}`);
} else {
  let producto = num1 * num2;
  let division = num1 / num2;
  alert(`El producto es ${producto} y la división es ${division}`);
}
/* PASO 6*/
const cantidad = parseInt(prompt("Ingrese la cantidad de estudiantes:"));
const estudiantes = [];
for (let i = 0; i < cantidad; i++) {
  const nombre = prompt(`Ingrese el nombre del estudiante ${i + 1}:`);
  const sexo = prompt(`Ingrese el sexo del estudiante ${i + 1} (M o F):`);
  const nota = parseFloat(prompt(`Ingrese la nota del estudiante ${i + 1}:`));
  estudiantes.push([nombre, sexo, nota]);
}
let estudianteMayorNota = null;
let estudianteMenorNota = null;
let hombres = 0;
let mujeres = 0;
estudiantes.forEach(estudiante => {
  const nota = estudiante[2];
  if (estudianteMayorNota === null || nota > estudianteMayorNota[2]) {
    estudianteMayorNota = estudiante;
  }
  if (estudianteMenorNota === null || nota < estudianteMenorNota[2]) {
    estudianteMenorNota = estudiante;
  }
  if (estudiante[1] === "M") {
    hombres++;
  } else {
    mujeres++;
  }
});
console.log(`El estudiante con la mayor nota es ${estudianteMayorNota[0]} con una nota de ${estudianteMayorNota[2]}`);
console.log(`El estudiante con la menor nota es ${estudianteMenorNota[0]} con una nota de ${estudianteMenorNota[2]}`);
console.log(`Hay ${hombres} hombres y ${mujeres} mujeres.`);
/* PASO 7 */
var formateo = new Intl.NumberFormat("es-CO", 0)
let nombre = prompt('Ingrese el nombre del producto:')
let precio = parseFloat(prompt('Precio del articulo:'))
let cantidadProductos = parseInt(prompt('Ingrese la cantidad de productos'))
let total = precio * cantidadProductos
alert(`Su factura por la compra de ${cantidadProductos} ${nombre} es de $ ${formateo.format(total)}`)