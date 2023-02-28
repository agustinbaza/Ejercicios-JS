// PUNTO 7 

let x1 = prompt("ingrese el primer numero");
let x2 = prompt("ingrese el segundo numero");
let x3 = prompt("ingrese el tercer numero");

if (x1>x2 && x1>x3) {
    document.write(x1 + " " + "es el mayor");
} else if  (x2>x1 && x2>x3)  {
    document.write(x2 + " " + "es el mayor");
} else if (x3>x1 && x3>x2) {
    document.write(x3 + " " + "es el mayor");
} else {
    document.write("Alguno de los numeros son iguales entre si");
}



