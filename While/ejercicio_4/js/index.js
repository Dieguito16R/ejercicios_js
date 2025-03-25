/*
    Name exercise: while 4
    Description: Motion Simulation with Newton’s First Law – If the applied force is zero, the object remains at rest. If the force is not zero, calculate acceleration using: a = F / m, and update velocity: v = v + a × t, where t = 1s. Additional conditions: count how many seconds the object has been in motion; accumulate the total distance traveled using: d = v × t; the program ends when the user enters a force of 0.
	autor: Diego Ramirez
	date: march 15th 2025
*/
let velocity = 0;
let distanceTotal = 0;
let seconds = 0;
const time = 15;

while (true) {
    let force = parseFloat(prompt("insert the force:"));
    if (force <= 0) {
        break; 
    }

    let mass = parseFloat(prompt("insert the mass (kg):"));
    let acceleration = force / mass;

    velocity = velocity + (acceleration * time);
    distanceTotal = distanceTotal + (velocity * time);
    seconds = seconds + 1;
}

console.log("Elapsed time: " + seconds);
console.log("Total distance traveled: " + distanceTotal);
console.log("Final velocity: " + velocity);


