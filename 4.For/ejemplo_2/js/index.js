/*
	Name exercise: 5 times table
	Description: calculate and show the 5 times table
	autor: Diego Ramirez
	date: march 15th 2025
*/


let counter = 1;
let number = 9;
let multi = 1;

while (counter <= 5) {
    multi = number * counter;

    if (multi % 2 == 0) {
        console.log(number + " X " + counter + " = " + multi + " even");
    } else {
        console.log(number + " X " + counter + " = " + multi + " odd");
    }

    counter=counter+1;
}
