// Programa para validar si el alumno aprueba o reprueba 

/*
let estudio = true;

if(estudio){
    console.log("Aprobo el exame");
}

console.log("Fin del program");





if (NUMERO_GANADOR == numeroUsuario){
    console.log("Has ganado la loteria");
    
}

console.log("Termino el programa");


const NUMERO_GANADOR = 123;
let numeroUsuario =Number(prompt("Ingrese su numero de loteria"));

if (NUMERO_GANADOR == numeroUsuario) {
    console.log("Ganaste la loteria");

    let nombre = prompt("Ingresa tu nombre")

    if (nombre == "pepe") {
        console.log("Ademas te ganaste un jamon");
        
    }
    
}else{
    console.log("Numero de loteria incorrecto");
    
}

if (NUMERO_GANADOR != numeroUsuario) {
    console.log("No ganaste la loteria");
}

console.log("Fin del programa");



let precio = 100.5;

if (precio < 20) {
    alert("El precio es menor que 20");
}
else if (precio < 50) {
    alert("El precio es menor que 50");
}
else if (precio < 100) {
    alert("El precio es menor que 100");
}
else {
    alert("El precio es mayor que 100");
}


Operador &&--> true en ambos lados and || true only in one place 



true && true => true
true && false => false
false && true => false
false && false => false


true || true => true
true || false => true
false || true => true
false || false => false

Si no ingresa nada, nombre = ''



let nombre  = prompt("Ingresar nombre");

if ((nombre != "") && ((nombre == "Pepe") || (nombre == "pepe"))) {
    alert("Hola Pepeeeeeeee"); 
} else{
    alert("Error: Ingresar nombre válido");
}



let mayor = confirm("Es usted mayor de edad");
console.log(mayor);
if (mayor) {
    console.log("Bienvenido al sitio");
    
} else {
    console.log("NO puedes ver el contenido");
    
}

*/


// .toLowerCase
// .toUpperCase


let nombre = prompt("Ingrese su nombre porfavor").toLowerCase;


if (nombre == "pepe") {
    console.log("Te ganaste un jamon");
} else {
    console.log("No te llamas pepe");
    
}