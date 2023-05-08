const cantidad = new Intl.NumberFormat({minimumFractionDigits: 0});

/* PASO 1 */
/* a */
let continente = []
continente.push("América");continente.push(cantidad.format(1003000000));
let país = []
país.push("Colombia");país.push(cantidad.format(50900000));
let departamento = []
departamento.push("Santander"); departamento.push(cantidad.format(2200000))
let ciudad = []
ciudad.push("Bucaramanga"); ciudad.push(cantidad.format(536000))
let barrio = []
barrio.push("El prado"); barrio.push(cantidad.format(3000))
let dirección = []
dirección.push("Calle 32 # 23-45"); dirección.push(cantidad.format(1))

/* b */
console.log(continente[1]); // "1.003.000.000"
console.log(país[1]); // "50.900.000"
console.log(departamento[1]); // "2.200.000"
console.log(ciudad[1]); // "202000"
console.log(barrio[1]); // "10000"
console.log(dirección[1]); // "4"

/* PASO 2 */ 
/* a */
let esTercerMundista = true;
let idioma;
/* b */
console.log(esTercerMundista); // true
console.log(continente[0]); // "América"
console.log(país[0]); // "Colombia"
console.log(idioma); // undefined


/* PASO 3 */
/* a */
idioma = "Español";
/* b */

// let continente = [];
// continente.push("América");continente.push(cantidad.format(1003000000));
// let país = [];
// país.push("Colombia");país.push(cantidad.format(50900000));
// let departamento = [];
// departamento.push("Santander"); departamento.push(cantidad.format(2200000))
// let ciudad = []; 
// ciudad.push("Giron"); ciudad.push(cantidad.format(202000))
// let barrio = [];
// barrio.push("Arenales"); barrio.push(cantidad.format(10000))
// const dirección = [];
// dirección.push("Calle 32 # 23-45"); dirección.push(cantidad.format(4))
// let esTercerMundista = true;
// let idioma = "Español";

/* c */
/* Al cambiar las variables a const, no podemos asignar nuevos valores 
a ellas. Si intentamos hacerlo, obtendremos un error en la consola */

/* PASO 4 */
/* a */
/* Si el país se divide en dos partes iguales, 
cada parte tendrá la mitad de la población del país original.
Por lo tanto, cada mitad tendría 
población original / 2 = 50 millones de habitantes / 2 = 25 millones de habitantes*/
/* b */
let población = 50900000; // 50 millones de habitantes
población += 1000000; // aumenta en 1 millón
console.log(cantidad.format(población)); // 51 millones de habitantes
/* c */
/* La población de Finlandia es de 6 millones.
Para saber si Colombia tiene más habitantes que Finlandia, 
podemos comparar la población de ambos países.*/
const poblaciónFinlandia = 6000000;
console.log(población > poblaciónFinlandia); // true
/* d */
/*La población promedio de un país es de 33 millones de personas.
Podemos comparar la población de Colombia con la población promedio de un país.*/
const poblaciónPromedio = 33000000;
console.log(población < poblaciónPromedio); // true
/**/ 
const descripción = `${país[0]} está en ${continente[0]}, y ${ciudad[0]} que está en el departamento de ${departamento[0]} tiene un barrio llamado ${barrio[0]} y sus ${barrio[1]} personas hablan inglés.`;
console.log(descripción); // "Colombia está en América, y Bucaramanga que está en el departamento de Santander tiene un barrio llamado El Prado y sus 3000 personas hablan Español."

/* PASO 5 */
// Declare las variables
// 1. length
const name1 = 'Alice';
console.log(`The length of the name "${name1}" is ${name1.length}.`);

// 2. includes()
const sentence = 'The quick brown fox jumps over the lazy dog';
const word = 'fox';
console.log(`The sentence "${sentence}" ${sentence.includes(word) ? 'contains' : 'does not contain'} the word "${word}".`);

// 3. back ticks or template strings
const firstName = 'Alice';
const lastName = 'Smith';
console.log(`My name is ${firstName} ${lastName}.`);

// 4. trimStart()
const text1 = '   Hello, world!';
console.log(`"${text1.trimStart()}"`);

// 5. trimEnd()
const text2 = 'Hello, world!    ';
console.log(`"${text2.trimEnd()}"`);

// 6. replace()
const sentence2 = 'The quick brown fox jumps over the lazy dog';
const oldWord = 'fox';
const newWord = 'cat';
console.log(`"${sentence2.replace(oldWord, newWord)}"`);

// 7. slice()
const str = 'The quick brown fox';
console.log(`"${str.slice(10)}"`);

// 8. split()
const sentence3 = 'The quick brown fox jumps over the lazy dog';
const words = sentence3.split(' ');
console.log(`The sentence "${sentence3}" contains ${words.length} words.`);

// 9. ToUpperCase()
const text3 = 'hello, world!';
console.log(`"${text3.toUpperCase()}"`);

// 10. ToLowerCase()
const text4 = 'HELLO, WORLD!';
console.log(`"${text4.toLowerCase()}"`);