
const CANTIDAD_PREGUNTAS = 5
let acumuladorPositivo =0
let acumuladorNegativo =0
let rachaDeFaltas =0;

for(let i = 1 ; i <= CANTIDAD_PREGUNTAS; i ++){

    let random = Math.ceil(Math.random()*10)

    let respuesta = (prompt("Cuanto seria: " + i + " x " + random + " ? ")).toLocaleLowerCase()

    if(respuesta == "donpepe"){

        console.log("Crack pepe, ahi te sumo un punto")
        acumuladorPositivo++
        continue
    }else{
        respuesta = Number(respuesta)

        while (isNaN(respuesta) || respuesta == 0) {
            alert("Ingrese un numero")
            let respuesta = (prompt("Cuanto seria: " + i + " x " + random + " ? ")).toLocaleLowerCase()
        }
    }

    

    if(respuesta == (random * i)){

        console.log("Bien respondio")
        acumuladorPositivo ++
        rachaDeFaltas--


    }else{
        console.log("Mal respondido")

        acumuladorNegativo++
        rachaDeFaltas++

        if(rachaDeFaltas == 2){
            console.log("Estudia mas")
            break
        }
    }
}

console.log("Bien respondidas = " + acumuladorPositivo)
console.log("Mal respondidas = " + acumuladorNegativo)



