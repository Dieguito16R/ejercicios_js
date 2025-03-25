/*
	Name exercise: examplle 4
	Description: Calculate 1 to 5 times tables and if the number is pair says buzz, but if its inpair says bass
	autor: Diego Ramirez
	date: march 15th 2025
*/

let even = 0;
let odd = 0;
let num = 5;
let mult = 0;
let result;

while (mult < num) {
    mult = mult + 1;
    let counter = 0;

    while (counter < num) {
        counter = counter + 1;
        result = mult * counter;

        if (result % 2 === 0) {
            even = even + 1;
            console.log("buzz");
        } else {
            odd = odd + 1;
            console.log("bass");
        }
    }
}
