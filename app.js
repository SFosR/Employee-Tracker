const inquirer = require("inquirer");
const mysql = require("mysql2");
const { createQuery } = require("mysql2/typings/mysql/lib/Connection");
require("dotenv").config();

//Connect to database
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: process.env.PASSWORD,
  database: "employees_db",
});

connection.connect((err) => {
  if (err) throw err;
  mainMenu();
});

const mainMenu = () =>
  inquirer
    .prompt([{
      type: "list",
      name: "likeToDo",
      message: "What would you like to do?",
      choices: [
        "View all departments?",
        "View all positions?",
        "View all employees?",
        "Add a department?",
        "Add a position?",
        "Add an employee?",
        "Quit",
        ]

      }]).then((answer) => {
        switch (answer.choice){

        case "View all departments?":
          viewAllDepartments();
          break;
  
        case "View all positions?":
          viewAllPositions();
          break;

        case "View all employees?":
          viewAllEmployees();
          break;

        case "Add a department?":
          addDepartment();
          break;

        case "Add a position?":
          addPosition();
          break;

        case "Add an employee?":
          addEmployee();
          break;

        case "Quit":
          connection.end();
          break;
        }
     })
  };

//Function for viewing all departments
const viewAllDepartments = () => {
     console.log("Viewing all departments");
     connection.query("SELECT * FROM departments");
        if (err) throw err;
        console.table(res);
        init();
      })   
  });  
};

//Function to view all employee positions




//Table function for viewing all positions that presents job title, role id, dept that role is in and salary
// SELECT * FROM db
//Table function for viewing all employees that presents a table showing employee ids, first names, last names, job titles, depts, salaries, and managers employee reports to

//Ability to add a dept by being prompted to enter dept name and is then added to db

//Ability to add a position by being prompted to enter the name, salary and dept for the postion and its added to the db

//Ability to add an employee by being prompted to enter employee's first name, last name, postion, manager and that employee is added

//Ability to update an employee role and info is up to date
