/*
	Name exercise: conditionals 8
	Description: Calculation of Acceleration of an Object Subjected to a Force – Design a flowchart that calculates the acceleration of an object given its mass and applied force. Request mass (kg) and applied force (N); calculate acceleration using Newton's Second Law. Formula: a = F / m; determine if the acceleration is high or low based on a threshold of 5 m/s².
	autor: Diego Ramirez
	date: march 15th 2025
*/

let acceleration;
let bulk = 10;
let force = 15;

acceleration = force/bulk;

if (acceleration > 5) {
	console.log("The acceleration is high");
} else {
	console.log("The acceleration is low");
}