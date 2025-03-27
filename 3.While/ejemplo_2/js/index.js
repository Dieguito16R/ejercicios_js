/*
	Name exercise: example 2
	Description: Calculate 5 times table 
	autor: Diego Ramirez
	date: march 15th 2025
*/

let counter = 1;
let number = 5;
let multi = 1;

while (counter <= number) {
    multi = number * counter;
    console.log(number + " X " + counter + " = " + multi);
    counter=counter + 1;
}
