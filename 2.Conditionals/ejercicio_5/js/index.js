/*
	Name exercise: conditionals 5
	Description: Determining the Force of an Object and Comparing it to a Limit – Design a flowchart that calculates the force exerted by an object and determines if it is greater or less than a threshold value. Request mass (kg) and acceleration (m/s²); calculate force using Newton's Second Law. Formula: F = m × a; if Force ≥ 100N, print 'The force is high'; if Force < 100N, print 'The force is low'.
	autor: Diego Ramirez
	date: march 15th 2025
*/


let bulk = 40;
let acceleration = 25;
let force;

force = bulk * acceleration;

if (force >= 100) {
	console.log("The force is high");
} else {
	console.log("The force is low");
}