/*
	Name exercise: Friction force
	Description: Calculate el friction force applied in different masses and the same friction coeficient.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let counter;
let mass;
const gravity = 9.8;
let normalForce;
let frictionForce;
let limit = parseInt(prompt("Enter how many masses to enter:"));
let frictionCoefficient = parseInt(prompt("Enter the friction coefficient:"));

for(counter = 1; counter <= limit; counter++){
	mass = parseInt(prompt(counter + ". Enter the mass:"));
	normalForce = mass * gravity;
	frictionForce = normalForce * frictionCoefficient;
	console.log(counter + ". The friction force is: " + frictionForce + " when the mass is "+ mass);
}	