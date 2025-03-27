

/*
	autor:DieguitoR
	descriptio: Function that receives a number and returns whether it is even or odd.
	date: 27 march 2025
*/

let example = prompt("digite el numero: ");
function type(number){
	if(number%2==0){
		console.log(`the number ${number} is even`)
	}else{
		console.log(`the number ${number} is odd`)
	     }
}

type(example);