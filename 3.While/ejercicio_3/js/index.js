/*
    Name exercise: while 3
    Description: Calculation of Newton’s Third Law (Action and Reaction) – Since: F_action = -F_reaction, the program will request an applied force (F) and display its reaction force. Additional conditions: accumulate the total sum of all applied forces; count how many times a force has been entered; the program ends when the user enters a force of 0.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let counter = 0;
let forceTotal = 0;
let forceA = 0;

while (true) {
    forceA = parseFloat(prompt("insert force (N):"));

    if (forceA <= 0) {
        break; 
    }

    counter=counter+1;
    let forceR = forceA;
    forceTotal += forceA;
}

console.log("Cantidad de fuerzas ingresadas: " + counter);
console.log("Última fuerza ingresada: " + forceA);
console.log("Fuerza total acumulada: " + forceTotal);

