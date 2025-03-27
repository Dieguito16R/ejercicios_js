/*
    Name exercise: while 2
    Description: Calculation of Weight on Different Planets – Calculate the weight (W) of an object on different planets using the equation: W = m × g, where g is the gravity of the selected planet: 1. Earth (9.81 m/s²), 2. Mars (3.71 m/s²), 3. Jupiter (24.79 m/s²). Additional conditions: accumulate the total sum of all calculated weights; count how many times a calculation has been performed; the program repeats until the user enters a negative mass.
	autor: Diego Ramirez
	date: march 15th 2025
*/

const gravityEarth = 9.81;
const gravityMars = 3.71;
const gravityJupiter = 24.79;

let totalWeight = 0;
let counter = 0;
let mass = 0;

while (mass >= 0) {
    mass = parseFloat(prompt("insert mass: "));

    if (mass >= 0) {
        let option = parseInt(prompt("select planet : 1 earth, 2 mars, 3 jupiter"));
        let gravity = 0;

        if (option === 1) {
            gravity = gravityEarth;
        }
        if (option === 2) {
            gravity = gravityMars;
        }
        if (option === 3) {
            gravity = gravityJupiter;
        }

        if (gravity > 0) {
            let weight = mass * gravity;
            totalWeight += weight;
            counter++;

            console.log("Peso calculado: " + weight);
        }
    }
}

console.log("Total weight acumulet: " + totalWeight);
console.log("counter: " + counter);
