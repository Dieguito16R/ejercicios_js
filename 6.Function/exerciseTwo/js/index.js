/*
	autor:DieguitoR
	descriptio:Function that receives a name and age and returns a greeting.
	date: 27 march 2025
*/
let namePeople = prompt("como es su nombre: ");
let agePeople = prompt("que edad tienes: ");
function nameAge(name,age){
	console.log(`hello ${name} your age is ${age}`);
}

nameAge(namePeople,agePeople);