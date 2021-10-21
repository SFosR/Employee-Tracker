const inquirer = require("inquirer");
const mysql = require("mysql2");
require("dotenv").config();

// Connect to database
const db = mysql.createConnection({
  host: "localhost",
  port: 3001, //do we just pick a number?
  user: "root",
  password: process.env.PASSWORD,
  database: "employess_db",
});
// Function for starting options: viewing all depts, all postions, all employees and adding a dept, position, employee

//const startQuestions() {}

//Function for viewing all depts that presents table showing dept names and dept ids

//Function for viewing all postions that presents job title, role id, dept that role is in and salary

//Function for viewing all employees that presents a table showing employee ids, first names, last names, job titles, depts, salaries, and managers employee reports to

//Ability to add a dept by being prompted to enter dept name and is then added to db

//Ability to add a position by being prompted to enter the name, salary and dept for the postion and its added to the db

//Ability to add an employee
