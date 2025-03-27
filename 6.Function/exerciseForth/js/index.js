/*
	autor:DieguitoR
	descriptio:Function that receives force and mass and returns acceleration.
	date: 27 march 2025
*/
let forceExample = prompt("digite la fuerza: ");
let massExample = prompt("digite la masa: ");
function acelerationFunction(force,mass){
	let aceleration = force/mass;
	console.log(`the aceleration is ${aceleration}`);
	return aceleration;
}

acelerationFunction(forceExample,massExample);