/*
	Name exercise: while 5
	Description: Calculation of Mechanical Work – Calculate the mechanical work (W) done on an object using the equation: W = F × d, where F is the applied force and d is the distance traveled. Additional conditions: accumulate the total sum of all calculated work; count how many times mechanical work has been calculated; the program repeats until the user enters a negative distance.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let counter = 0;
let workTotal = 0;

while (true) {
    let distance = parseFloat(prompt("insert the distance (m):"));
    if (distance <= 0) {
        break;
    }

    let forceA = parseFloat(prompt("insert the force (N):"));
    let work = forceA * distance;

    counter = counter + 1;
    workTotal = workTotal + work;
}

console.log("Total work done: " + workTotal );
console.log("Number of calculations: " + counter);
