/*
	description: matriz
	autor: DiegoR
	date: 26 march 2025
*/

const aceleracion = [2, -1];
const velocidadInicial = [4, 0];
const posicionInicial = [0, 0];
const pasos = 5;
let matriz = [];
let type="o";
for (let iterationTwo = 0; iterationTwo < 2; iterationTwo++) {
    let positions = [];
    if (iterationTwo==0) {
      type="x";
    }else{
      type="y";
    }
    for (let time = 1; time <= pasos; time++) {
        let positionSeconds = posicionInicial[iterationTwo] + velocidadInicial[iterationTwo] * time + 0.5 * aceleracion[iterationTwo] * time*time;
        positions.push(positionSeconds);
        console.log("the position second "+ time +" "+ type + " is " + positionSeconds) 
    }
    matriz.push(positions);
}
console.log(matriz);
