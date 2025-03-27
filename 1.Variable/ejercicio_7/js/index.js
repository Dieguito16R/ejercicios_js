/*
	name exercise: gunRecoil
	description: Recoil after shoot a gun
	autor: Diego Ramirez
	date: march 15th 2025
*/

let gunMass= 40;
let bulletMass=20;
let bulletVelocity=200;
let recoilVelocity;

recoilVelocity= (bulletMass*bulletVelocity)/gunMass;

console.log("The recoil after shoot the gun is: "+recoilVelocity);
