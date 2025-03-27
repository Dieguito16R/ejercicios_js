/*
	Name exercise: net forces - first Newton's law
	Description: calculate certain amount of net forces and says if the object is accelerating or no.
	autor: Diego Ramirez
	date: march 15th 2025
*/


let counter;
let netForce;
let i = parseInt(prompt("How many forces?"));

for (counter = 1; counter <= i; counter++) {
    netForce = parseInt(prompt(counter + ". Force:"));
    if (netForce == 0) {
        console.log("No motion change");
    } else {
        console.log("Object accelerates");
    }
}