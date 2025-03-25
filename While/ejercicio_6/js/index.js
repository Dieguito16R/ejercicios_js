/*
	Name exercise: while 6
	Description: Calculation of Gravitational Potential Energy – Calculate the gravitational potential energy (Epg) of an object using the equation: Epg = m × g × h, where m is the object’s mass, g is gravitational acceleration (9.81 m/s² on Earth), and h is the height from which the object is positioned. Additional conditions: accumulate the total sum of all calculated potential energy; count how many times potential energy has been calculated; the program repeats until the user enters a negative height.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let counter = 0;
let energyTotal = 0;
const gravity = 9.81;

while (true) {
    let height = parseFloat(prompt("Enter the height :"));
    if (height <= 0) {
        break;
    }

    let mass = parseFloat(prompt("insert the mass :"));
    let energy = mass * gravity * height;

    energyTotal = energyTotal + energy;
    counter = counter + 1;
}

console.log("Total potential energy: " + energyTotal);
console.log("Number of calculations: " + counter);
