/*
	Name exercise: conditionals 4
	Description: Final Grade Calculation – Design a flowchart that receives three grades and performs the following calculations: calculate the weight of each grade – Grade 1 → 20%, Grade 2 → 35%, Grade 3 → 45%; sum the weighted grades and classify the final grade: greater than 4.5 → Superior, between 3.5 and 4.5 → Good, between 3 and 3.5 → Average, less than 3 → Poor.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let gradeOne = 3.0;
let gradeTwo = 4.5;
let gradeThree = 2.5;
let gradeFinal;

gradeFinal = (gradeOne * 0.20) + (gradeTwo * 0.35) + (gradeThree * 0.45);

console.log("The final grade is: "+ gradeFinal);

if (gradeFinal >= 4.5){
	console.log("Top grade");}
else if (gradeFinal < 4.5 && gradeFinal >=3.5){
	console.log("Good grade");}
else if (gradeFinal < 3.5 && gradeFinal >=3.0){
	console.log("Regular grade")}
else{
	console.log("Bad grade")}