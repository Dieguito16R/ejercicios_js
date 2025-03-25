/*
	Name exercise: Forces for
	Description: Calculates a certein amount of forces with different masses and accelerations.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let mass;
let acceleration;
let force;
let i = parseInt(prompt("number: "));
let counter;

for(counter = 1; counter <= i; counter++){
	mass = parseInt(prompt(counter + ". insert the mass:"));
	acceleration = parseInt(prompt(counter +  ". insert the acceleration:"));
	force = mass * acceleration;
	console.log(counter + ". The force is: "+ force);
}
