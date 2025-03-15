/*
	Name exercise: counter
	Description: counter
	Autor: AndresMC
	Date: march 15th 2025
*/

let dough = parseInt(prompt("Ingresa el valor de masa:"));
let acceleration = parseInt(prompt("Ingresa el valor de 'aceleracion':"));
let force;
let totalForce = 0;
let counter = 0;

while(dough > 0 && acceleration > 0) {
  force = dough * acceleration;
  counter = counter + 1;
  totalForce = totalForce + force;
  dough = parseInt(prompt("Ingresa el valor de 'masa':"));
  acceleration = parseInt(prompt("Ingresa el valor de 'acceleracion':"));
  console.log("la fuerza es:"+force)
}

console.log("el total de fuerzas que se acumularon es: " + totalForce);
console.log("el total de fuerzas que pasaron: " + counter);