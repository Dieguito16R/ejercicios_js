/*
	name exercise: example 3
	description: Calculate and print a person's total payment: Request the number of days worked and the daily wage; compute salary as salary = daysWorked × dailyWage; apply deductions: health = salary × 0.12, pension = salary × 0.16, ARL = salary × 0.052; calculate net salary as netSalary = salary - totalDeductions; print salary, health, pension, ARL, total deductions, and net salary.
	autor: Diego Ramirez
	date: march 15th 2025
*/

let daysWorked = 22;
let dayValue = 20000;
let salary;
let discount;
let health;
let arl;
let netSalary;
let pension;

salary = daysWorked * dayValue;
health = salary * 0.12;
pension = salary * 0.16;
arl = salary * 0.052;
discount = health + pension + arl;
netSalary = salary - discount;

console.log("Salary= " + salary + "Health= " + health + "Pension= " + pension + "ARL= " + arl + "Discount= " +discount + "Net Salary= " + netSalary);