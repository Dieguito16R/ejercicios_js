/*
	description: matriz
	autor: DiegoR
	date: 26 march 2025
*/

let iterationOne;
let iteratioTwo;
let number;
let Matriz=[];
let iteratioThree;
let iteratioForth;
let suma = 0;
let acu;
for(iterationOne=0;iterationOne<5;iterationOne++){
	let object=[];
	for(iteratioTwo=0;iteratioTwo<5;iteratioTwo++){
		number=Math.floor(Math.random()*100);
		object.push(number);
	}
	Matriz.push(object);
}

for(iteratioThree=0;iteratioThree<5;iteratioThree++){
	suma= 0;
	for(iteratioForth=0;iteratioForth<5;iteratioForth++){
		acu = Matriz[iteratioThree][iteratioForth];
		suma += acu;
	}
	console.log(suma);
}
console.log(Matriz);