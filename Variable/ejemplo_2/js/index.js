/*
	name exercise: example 2
	description: Statement: Create a flowchart that calculates the weighted average of three grades entered by the user.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let gradeOne=3.5;	
let gradeTwo=3.5;
let gradeThree=5.0;

let fullGradeOne;
let fullGradeTwo;
let fullGradeThree;

let weighted;

fullGradeOne= gradeOne * 0.3;
fullGradeTwo= gradeTwo * 0.3;
fullGradeThree= gradeThree * 0.4;

weighted = fullGradeOne + fullGradeTwo + fullGradeThree;


console.log("The weighted of that three grades is: " + weighted);