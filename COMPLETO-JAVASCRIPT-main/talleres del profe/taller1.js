// function divir(arg) {
//     let num1, nume, res="Porfavor hagalo bien";
//     ({num1,num2} = arg);
//     if(typeof num1 != "number") return res;
//     if(typeof num2 != "number") return res;
//     return num1/num2;
// }

// console.log(divir({num1: 5, num2: 1}));
function dividir(arg) {
    let num1, num2, res="Porfavor hagalo bien";
    ({num1, num2} = arg);
    typeof num1 === "number" && typeof num2 === "number" ? num1 : (() => { return res; })();
    return num2 !== 0 ? num1 / num2 : (() => { return "No se puede dividir entre cero."; })();
}
console.log(dividir({num1: 10, num2: 2}));