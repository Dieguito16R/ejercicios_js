/*
	Name exercise: conditionals 6
	Description: Comparison of Two Falling Bodies – Design a flowchart that receives the mass of two falling bodies, calculates their gravitational force, and determines: which body exerts greater gravitational force; if both forces are equal. Formula (Newton's Second Law considering gravity): F = m × g, where g = 9.81 m/s² (Earth's gravity).
	autor: Diego Ramirez
	date: march 15th 2025
*/

let massOne = 15;
let massTwo = 20;
let forceOne;
let forceTwo;

forceOne = massOne * 9.81;
forceTwo = massTwo * 9.81;

if (forceOne > forceTwo) {
	console.log("bodyOne exerts more force");
} else if (forceTwo > forceOne) {
	console.log("bodyTwo exerts more force");
} else {
	console.log("both forces are equals");
}