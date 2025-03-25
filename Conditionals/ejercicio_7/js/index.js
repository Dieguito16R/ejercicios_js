/*
	Name exercise: conditionals 7
	Description: Calculation of Friction Force of an Object on a Surface – Design a flowchart that calculates the friction force between an object and the surface it moves on. Request mass (kg), coefficient of friction (µ), and gravitational acceleration (g); calculate normal force and friction force using the formula: Friction Force = Normal Force × µ; if friction force > 50N, indicate 'High friction'; if friction force < 50N, indicate 'Low friction'.
	autor: Diego Ramirez
	date: march 15th 2025
*/


let frictionForce;
let bulk = 8;
let frictionCoefficient = 0.4;
let gravitationalAcceleration = 10;

frictionForce = frictionCoefficient * bulk * gravitationalAcceleration;

console.log("The friction force is: "+ frictionForce);

if (frictionForce < 50) {
	console.log("The friction is low");
}
else {
	console.log("The friction is high");
}