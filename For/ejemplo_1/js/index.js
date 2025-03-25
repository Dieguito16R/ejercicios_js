/*
	Name exercise: 5 times table
	Description: calculate and show the 5 times table
	autor: Diego Ramirez
	date: march 15th 2025
*/


let counter;
let number = 5;
let multi = 1;

for(counter=1; counter<=number; counter++){	
	multi = number*counter;
	console.log(number + " X " + counter + " = " + multi);
}