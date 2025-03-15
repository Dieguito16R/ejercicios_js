/*
	Name exercise: counter for
	Description: counter
	Autor: AndresMC
	Date: march 15th 2025
*/


let counter;
let number=5;
let acu=0;

for(counter=0;counter<=number;counter++){
	
	acu=acu+counter;

	console.log(counter);
	if(counter%2==0){
		console.log("is even");
	}
	else{
		console.log("is odd");
	}	

}
console.log("Acumulador:" + acu);

