/*
    Name exercise: while 1
    Description: Calculation of Force with Newton’s Second Law – Create a flowchart that requests a mass (m) and acceleration (a), then calculates the force (F) using the formula: F = m × a. Additional conditions: accumulate the total sum of all calculated forces; count how many calculations have been performed; the program ends when the user enters a negative mass or acceleration.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let mass = 0;
let acceleration = 0;
let totalForce = 0;
let force = 0;
let counter = 0;

while (mass >= 0 && acceleration >= 0) {
    counter=counter+1;

    mass = parseFloat(prompt("insert mass : "));

    acceleration = parseFloat(prompt("insert acceleration: "));

    force = acceleration * mass;

    totalForce = totalForce + force;

    console.log("Force: " + force);
}

console.log("The acumulet forces: " + totalForce);
console.log("counter total: " + counter);
