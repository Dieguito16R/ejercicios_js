/*
	Name exercise: Gravity
	Description: Calculate the weight of an object in different planets
	autor: Diego Ramirez
	date: march 15th 2025
*/


let counter;
let planet;
let gravity;
let weight;
let mass =parseInt(prompt("Enter the mass:"));

for(counter = 1; counter <= 4; counter++){
	if(counter == 1){
		planet = "Earth";
		gravity = 9.8;}
	else if(counter == 2){
		planet = "Mars";
		gravity = 3.7;}
	else if(counter == 3){
		planet = "Jupiter";
		gravity = 24.8;}
	else{
		planet = "Moon";
		gravity = "1.6";}

	weight = mass * gravity;
	console.log("The weight in "+ planet+ " is: "+weight+ "Kg");
}
	