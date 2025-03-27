/*
	Name exercise: tension of a rope
	Description: Calculate certain amount of tensions of different masses in a rope
	autor: Diego Ramirez
	date: march 15th 2025
*/

let tension;
let counter;
let mass;
const gravity = 9.8;
let limit = parseInt(prompt("Enter how many tensions calculate:"));

for(counter = 1; counter <= limit; counter++){
	mass = parseInt(prompt(counter + ". Enter the mass:"));
	tension = mass * gravity;
	console.log(counter + ". The tension of the rope is: "+ tension + " when the mass is: "+ mass);
}