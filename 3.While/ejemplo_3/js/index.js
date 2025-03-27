/*
	Name exercise: example 3
	Description: Calculate 9 times table and say wich number are pair or inpair
	autor: Diego Ramirez
	date: march 15th 2025
*/

let counter = 0;
let mult = 9;
let result;

while (counter < 5) {
    counter = counter + 1;
    result = mult * counter;

    if (result % 2 === 0) {
        console.log(result + " even");
    } else {
        console.log(result);
    }
}
