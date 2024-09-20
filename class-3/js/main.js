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



let cantidadNotas = Number(prompt("Ingresa la cantidad de notas"));
let acumulador = 0;

    for(let i = 1; i <= cantidadNotas; i++){

    let nota = Number(prompt("Ingrese la primera nota"));
    acumulador = acumulador + nota;


    console.log("Nota ingresada: " + nota) ;
    console.log("Suma de notas " + acumulador);
    
}

let promedio = acumulador / cantidadNotas;  
console.log("Promedio final " + promedio);


let numeroSecreto = 5;

for(let i = 0; i<= 5; i++){
    let numero = Number(prompt("Intenta adivina el numero secr"))
}



let numeroSecreto = 8;

for (let i = 0 ; i <= 5; i++){
    console.log("Intento N" + i);
    let numero = Number(prompt("Intenta adivinar el numero secreto"));

    if (numero = numeroSecreto){
        console.log("Felicidades acertaste el numero secreto");
        
    }

    break
}



for(let i = 0; i <= 5; i++){
    console.log("Antes del continue");

    if(confirm("Entrar al continue")){
        continue
    }
    


}



let condition = true

while (condition) {
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    console.log("Estas en un bucle infinito");
    

    if(confirm("Quieres salir del bucle")){
        condition = false;
    }
}




let num = 0;
while(num < 20){
    console.log("Iteracion N " + num);

    num ++;
    
}



let edad = Number(prompt("Ingresa tu edad"));
console.log(edad);

while(isNaN(edad) || edad <= 5 || edad >= 80){
    console.log("Ingresa un numero por favor");
    edad = Number(prompt("Ingresa tu edad un valor que sea numerico"))
    
}

console.log(edad);




let nombre 

do{
    nombre = prompt("Ingresa tu nombre").toLocaleLowerCase();

}while (nombre != "pepe") 




let key = 9;

switch (key) {
    case 8:
        console.log("sOY UN 8");
        
        break;
    case 9:
        console.log("sOY UN 9");
            
        break;
    default:
        console.log("Ninguna opcion es valida");
        
        break;
}

*/

