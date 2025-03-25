/*
	Name exercise:paralel force
	Description:Calculate the paralel force of and object in diferent inclined planes  
	autor: Diego Ramirez
	date: march 15th 2025
*/

let radians;
let counter;
let paralelForce;
const gravity = 9.8;
let mass = parseInt(prompt("Enter the mass:"));
let startAngle = parseInt(prompt("Enter the start angle:"));
let endAngle = parseInt(prompt("Enter the end angle:"));

for(counter = startAngle; counter <= endAngle; counter++ ){
	radians = counter * (Math.PI/180);
	paralelForce = mass * gravity * Math.sin(radians);
	console.log("For the angle of "+ counter +" the paralel force is: "+ paralelForce +" N");
}