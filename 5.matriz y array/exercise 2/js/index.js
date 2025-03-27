/*
	description: matriz
	autor: DiegoR
	date: 26 march 2025
*/

const mass = 2;
const force = [
  [5,0],
  [-2,3],
  [1,-1]
];
let forceNeta;
let valueAcceleration;
let counter=0;
let acceleration=[];
let forceTotal=0;
for(iterationOne=0;iterationOne<3;iterationOne++){
	forceNeta=0;
      	valueAcceleration=0;
      	for(iterationTwo=0;iterationTwo<2;iterationTwo++){
        	forceNeta=force[iterationOne][iterationTwo]+forceNeta;
      	}
        forceTotal+=forceNeta;
      	counter += 1;
      	valueAcceleration=forceNeta/mass;
      	acceleration.push(valueAcceleration);
      	console.log("the force neta " + counter + " is " + forceNeta);
      	console.log("the aceleration vectorial is " + valueAcceleration);
}
console.log("the adition of force total is " + forceTotal);
