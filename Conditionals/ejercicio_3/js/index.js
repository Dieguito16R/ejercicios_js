/*
	Name exercise: conditionals 4
	Description: Net Salary Calculation with Deductions – Design a flowchart that calculates a person's total salary, applying the following rules: if the salary is less than two minimum wages, add a transportation subsidy of $114,000; apply the following deductions: Health = salary × 0.12, Pension = salary × 0.16, ARL = salary × 0.052; if the salary is greater than four minimum wages, deduct a 0.04 retention; calculate and print the total payable amount after deductions.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let salaryMin = 1400000;
let salary = salaryMin;
let subTransport;
let health;
let pension;
let arl;
let total;

if (salary * 2 < salaryMin) {
	subTransport = 114000;
} else {
	subTransport = 0;
}

salary = salary + subTransport;

health = salary * 0.12;
pension = salary*0.16;
arl = salary * 0.052;

total = salary - health - pension - arl;

if (total < salaryMin * 4) {
	total = total * 0.04;
}

console.log("The total to pay is:" + total);