Qué es el asincronismo?
Conceptos del asincronismo:
Thread: permite realizar programacion multihilos

Bloqueante: llamada u operacion bloqueante, no devuelve el control a la aplicacion hasta que se ha completado, es decir que el thread queda bloqueado en estado de espera

No bloqueante: devuelve con independencia del resultado. Si se completo, devuelve los datos. Si no, un error

Sincrono: las tareas se ejecutan de forma secuencial. Espera a que una tarea se ejecute para seguir con la otra

Asincrono: las tareas pueden realizarse mas tarde, lo que hace posible que una respuesta sea procesada en diferido. 
La finalizacion de la operacion I/O se señaliza mas tarde, mediante un mecanismo especifico como por ejemplo un callback, una promesa o un evento, lo que hace posible que la respuesta sea procesada en diferido

Paralelismo: ejecucion simultanea de dos o mas tareas. Algunas tareas se pueden dividir en partes mas pequeñas que puede ser resueltas simultaneamente

Concurrencia: capacidad de un algoritmo para ejecutar mas de una tarea a la vez. A diferencia del paralelismo este puede hacer diferentes cosas a la vez en lugar de ejecutar el mismo trabajo

Eventloop (bucle de eventos): patron de diseño que espera y distribuye eventos o mensajes en un programa

Formas de manejar la asincronía en JavaScript:
Callbacks: Una función que se pasa como argumento de otra función y que será invocada.

Promesas: (implementado en ES6) Una promesa es una función no-bloqueante y asíncrona la cual puede retornar un valor ahora, en el futuro o nunca

Async/Await: (implementado en ES2017) Permite estructurar una función asincrónica sin bloqueo de una manera similar a una función sincrónica ordinaria

En JavaScript casi todas las operaciones de I/O (Entrada y Salida) no se bloquean. A esto se le conoce como asíncronismo. 
Lo único que no es procesado antes de que termine la operación son los callbacks, ya que éstos están amarrados a una operación y esperan a que sea finalizada para poder ejecutarse.
El asincronismo es una manera de aprovechar el tiempo y los recursos de la aplicación, ejecutando tareas y procesos mientras otros son resueltos en background (como la llegada de la información de una API), para posteriormente continuar con las tareas que requerían esa información que no tenías de manera instantánea.

Un ejemplo fácil de asincronismo vs sincronismo es:
Invitar a unos amigos a una fiesta y ofrecer una parrillada. 
Primero decides colocar la carne y verduras a la parrilla y luego repartir bebidas y algo para picar (snacks). 
Si fuera una persona síncrona (Blocking) tendrías que esperar a que la comida de la parrilla esté cocinada y luego atender a los invitados. 
Pero si fuera una persona asíncrona (Non Blocking) luego de poner la carne al carbón, sacas las bebidas frías de la nevera y compartes con los invitados mientras se cocina la carne. 
La acción de que la comida en la parrillada esté lista sería un callback que está esperando que finalice el proceso para ejecutarse. 
Pero otros procesos (como compartir la velada con bebidas y algo de picar) ya podrían irse realizando.


Event Loop:
Event Loop: El bucle de eventos de un patron de diseño que espera y distribuye eventos o mensajes de un programa.

Memory Heap: Los objetos son asignados a un montículo (espacio grande en la memoria no organizado).

Call Stack (pila): Apila de forma organizada las instrucciones de nuestro programa.

Task Queue: Cola de tareas, se maneja la concurrencia, se agregan las tareas que estan listas para pasar al Stack (Pila). El stack debe de estar vacio.

MicroTask Queue: Las promesas tienen otra forma de ejecutarse y una prioridad superior.

Web APIs: JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, Dom. Node: fs, https.

Event Loop: Tarea asignada para mover el Task Queue al Stack, solo si el Stack está vacío.

ejemplo para entender lo de event loop:
http://latentflip.com/loupe/?code=JC5vbignYnV0dG9uJywgJ2NsaWNrJywgZnVuY3Rpb24gb25DbGljaygpIHsKICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gdGltZXIoKSB7CiAgICAgICAgY29uc29sZS5sb2coJ1lvdSBjbGlja2VkIHRoZSBidXR0b24hJyk7ICAgIAogICAgfSwgMjAwMCk7Cn0pOwoKY29uc29sZS5sb2coIkhpISIpOwoKc2V0VGltZW91dChmdW5jdGlvbiB0aW1lb3V0KCkgewogICAgY29uc29sZS5sb2coIkNsaWNrIHRoZSBidXR0b24hIik7Cn0sIDUwMDApOwoKY29uc29sZS5sb2coIldlbGNvbWUgdG8gbG91cGUuIik7!!!PGJ1dHRvbj5DbGljayBtZSE8L2J1dHRvbj4%3D

ejemplo:
🌮 - call stack : el taquero (órdenes rápidas)
👨‍🍳 - web APIs : la cocina
🌯 - callback queue : las órdenes preparadas
💁‍♂️ - event loop : el mesero

//en codigo:
console.log('Taco 1')
console.log('Taco 2')
console.log('Taco 3')
setTimeout(()=>{
    console.log('Torta ')
},500);
console.log('Taco 4')
//Taco 1
//Taco 2
//Taco 3
//Taco 4
//undefined
//Torta 

Ahora con 0 de tiempo

console.log('Taco 1')
console.log('Taco 2')
console.log('Taco 3')
setTimeout(()=>{
    console.log('Torta ')
},0); //aqui 0 de tiempo
console.log('Taco 4')
//Taco 1
//Taco 2
//Taco 3
//Taco 4
//undefined
//Torta 

Conceptos fundamentales antes de crear el proyecto:
Web APIs JavaScript del lado del cliente: setTimeout, XMLHttpRequest, File Reader, DOM. Node: fs, https.
API: El término API es una abreviatura de “Application Programming Interface” (Interfaz de programación de aplicaciones en español). Es un conjunto de rutinas que provee acceso a funciones de un determinado software.

Hoisting: Sugiere que las declaraciones de variables y funciones son físicamente movidas al comienzo del código en tiempo de compilación.

XML: Lenguaje de marcado creado para la transferencia de información, legible tanto para seres humanos como para aplicaciones informáticas, y basado en una sencillez extrema y una rígida sintaxis. Así como el HTML estaba basado y era un subconjunto de SGML, la reformulación del primero bajo la sintaxis de XML dio lugar al XHTML; XHTML es, por tanto, un subconjunto de XML.

DOM: El DOM permite acceder y manipular las páginas XHTML como si fueran documentos XML. De hecho, DOM se diseñó originalmente para manipular de forma sencilla los documentos XML.

Events: Comportamientos del usuario que interactúa con una página que pueden detectarse para lanzar una acción, como por ejemplo que el usuario haga click en un elemento (onclick), que elija una opción de un desplegable (onselect), que pase el ratón sobre un objeto (onmouseover), etc.

Compilar: Compilar es generar código ejecutable por una máquina, que puede ser física o abstracta como la máquina virtual de Java.

Transpilar: Transpilar es generar a partir de código en un lenguaje código en otro lenguaje. Es decir, un programa produce otro programa en otro lenguaje cuyo comportamiento es el mismo que el original.

Configuración

//comandos terminal linux
pwd: Saber donde estoy ubicado.
mkdir: Creación de carpeta
cd: Moverse a carpetas
git init: Inicias Git
npm init: Le da nombre, versión, entre otras cosas al proyecto
code . : Inicia el editor de códigos

//fake api de Platzi:
https://fakeapi.platzi.com/

Ir a la terminal linux ejecutar los comandos
mkdir carpeta //crear una carpeta y puede ser donde sea
cd carpeta //entra a la carpeta creada
git init //inicializa repositorio
npm init //inicializa proyecto con npm y completar los datos 
code . //para abrir VSC
//listo ahora a seguir

Qué son los Callbacks? === Funcion como parametro
Al principio es difícil entender un callback de esta forma. Piensas, “si ya tengo la función sum, para que hacer un callback, puedo llamarla tal cual y omitir ese paso”.
Pero piensa que tienes funciones para sumar, restar, multiplicar …como hacer una calculadora. Las declaras todas en lista, y abajo solo tienes que usar un callback que va tirando de todas a la vez.
//de esta forma:
function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, callback) { //en el callback se pone las funciones anteriores
    return callback(num1, num2);
};

calc(1, 2, sum) //3,  en este caso en calc(1, 2, sum), la sum no se pone asi: suma(1,2) debido a que se esta usando callback
calc(1, 2, div) //0.5
calc(1, 2, rest) //-1

//otro ejemplo: en este caso espera 2 seg (2000) para ejecutar  setTimeout(gretting, 2000, 'Maria'), se usa callback y el orden es importante
setTimeout(function (){
    console.log('Hola JavaScript');
 }, 5000) 
 
 function gretting(name){
     console.log(`Hola ${name}`);
 }
 
 setTimeout(gretting, 2000, 'Maria'); 
//Hola Maria
//Hola JavaScript

Ejercicio:
Tienes la función execCallback que recibirá un callback es decir una función como parámetro, tu reto es ejecutar esa función con un tiempo de demora de 2 segundos.

Para hacer que la función se demore 2 segundos debes usar la función setTimeout, pero para ejecutarla debes llamarla mediante el namescpace window para poder monitorear su uso en la ejecución de pruebas, ejemplo:

window.setTimeout(() => {
  // code
})

Dentro del cuerpo de la función execCallback debes escribir tu solución.

Ejemplo:

Input:
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);

Output:
// Execute myFunc 2s after

Solucion:
function execCallback(callback) {
    window.setTimeout(callback, 2000)
}
const myFunc = () => console.log('Log after 2s')
execCallback(myFunc);
// Log 2s after

XMLHTTPRequest























Proyecto del curso

Pagina donde puedes buscar varias apis:
https://rapidapi.com/

Ingresar a la pagina anterior y buscar YouTube para buscar esa api, ir a YouTube V3
Ir a GET ChannelVideos
Luego ir a la seccion del medio e ir a Requerid Parameters
Modificar la parte de channelld, cambiar el ID por la extension del canal de YouTube
Ir al canal que se quiere arriba tendra un link asi:
https://www.youtube.com/channel/ID 
Copiar todo el contenido de ID y poner en channelld
Ir a Opcional Parameters y en maxResults cambiar a opcion por la cantidad que quieres mostrar
Luego ir a la seccion derecha y cambiar la opcion al lado de copy code por JavaScript/fetch
De este forma se obtiene el codigo el cual se copia y se pega en el proyecto de la API
Solo se tendra en cuenta la parte de const options y la URL el resto se puede eliminar
A continuacion el codigo completo:


Consumiendo API

const API = 'https://youtube-v31.p.rapidapi.com/search?channelId=UCw05fUBPwmpu-ehXFMqfdMw&part=snippet%2Cid&order=date&maxResults=9';

const content = null || document.getElementById('content');

const options = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
    'X-RapidAPI-Key': 'c68edbdba9mshc3cb6eb8038f3b2p1f444ajsna5de19fe1256'
  }
};

async function fetchData(urlApi) {
  const response = await fetch(urlApi, options);
  const data = await response.json();
  return data;
}

(async () => {
  try {
    const videos = await fetchData(API);
    let view = `
    ${videos.items.map(video => `
      <div class="group relative">
        <div
          class="w-full bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 lg:aspect-none">
          <img src="${video.snippet.thumbnail.high.url}" alt="${video.snippet.description}" class="w-full">
        </div>
        <div class="mt-4 flex justify-between">
          <h3 class="text-sm text-gray-700">
            <span aria-hidden="true" class="absolute inset-0"></span>
            ${video.snippet.title}
          </h3>
        </div>
      </div>
    `).slice(0,4).join('')}

    `;
  } catch {

  }
})();







