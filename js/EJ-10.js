// PUNTO 10 

let x1 = parseInt(prompt("Ingrese el numero para ver si es divisible en 2,3,5,7")); 


if (x1%2==0) {
   document.write("Es divisible en 2");
} else if (x1%3==0) {
    document.write("Es divisible en 3");
}
 else if (x1%5==0) {
    document.write("Es divisible en 5");
}
 else if (x1%7==0) {
    document.write("Es divisible en 7");
} else {
    document.write("No es divisible en 2,3,5,7");
}
