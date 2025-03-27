/*
	Name exercise: 1 to 5 times tables
	Description: calculate and show 1 to 5 times tables, also counts even and odd numbers and show, when a number is 	pair it says "buzz" and in case the number its inpair, says bass
	autor: Diego Ramirez
	date: march 15th 2025
*/


let counterOne;
let counterTwo;
let multi;
let even = 0;
let odd = 0;

for (let counterOne = 1; counterOne <= 5; counterOne++) {
    for (let counterTwo = 1; counterTwo <= 5; counterTwo++) {
        let multi = counterOne * counterTwo;
        if (multi % 2 == 0) {
            console.log(counterOne + " X " + counterTwo + " = " + multi + ", buzz");
            even = even + 1;
        } else {
            console.log(counterOne + " X " + counterTwo + " = " + multi + ", bass");
            odd = odd + 1;
        }
    }
}

console.log("There are " + even + " even numbers and " + odd + " odd numbers.");
