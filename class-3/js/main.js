//Ciclos en JavaScript

/* 
for(let iterador =0; iterador <=10; iterador ++){
    console.log("Iteracion No: " + iterador);
    
}


for (let i = 0; i <= 10; i++) {
    console.log(i);
    
    
}

let num = Number(prompt("Ingrese un numero"));
for(let contador = 0; contador <= 10; contador ++){
    console.log(num + " x " + contador + " = " + (contador * num));
    
}

*/

let cantidadNotas = Number(prompt("Ingresa la cantidad de notas"));
let acumulador = 0;

for(let i = 1; i <= cantidadNotas; i++){

    let nota = Number(prompt("Ingrese la primera nota"));
    acumulador = acumulador + nota;


    console.log("Nota ingresada: " + nota) ;
    console.log("Suma de notas " + acumulador);
    
}

let promedio = acumulador / cantidadNotas;
console.log("Promedio final");

