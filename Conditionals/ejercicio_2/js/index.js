/*
	Name exercise: condicionals 2
	Description: Determining Legal Age and Average Age – Create a flowchart that receives the ages of three people, then: determine if each person is of legal age (age ≥ 18); calculate the average of the three ages; if the average is 18 or higher, indicate that the group is of legal age. Formula: Average = (Age1 + Age2 + Age3) / 3.
	autor: Diego Ramirez
	date: march 15th 2025
*/


let ageOne = 19;
let ageTwo = 15;
let ageThree = 25;

let average;

if (ageOne >= 18) {
	console.log("The first person is of legal age");
} else {
	console.log("The first person is not legal of age");
}
if (ageTwo >= 18) {
	console.log("The second person is of legal age");
} else {
	console.log("The second person is not legal of age");
}
if (ageThree >= 18) {
	console.log("The third person is of legal age")
} else {
	console.log("The third person is not legal of age");
}

average = (ageOne + ageTwo + ageThree)/3;

if (average >=18 ) {
	console.log("The group is of legal age");
} else {
	console.log("The group is not of legal age");
}