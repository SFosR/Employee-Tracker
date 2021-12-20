const inquirer = require("inquirer");
const logo = require("asciiart-logo");
const mysql = require("mysql2");
const { createQuery } = require("mysql2/typings/mysql/lib/Connection");
require("dotenv").config();

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

function init() {
  const logoText = logo({ name: "Employee Manager"}).render();
  console.log(logoText);

  loadmainMenu();
}

function mainMenu () {
  inquirer
    .prompt([{
      type: "list",
      name: "likeToDo",
      message: "What would you like to do?",
      choices: [
        "View all departments?",
        "View all roles?",
        "View all employees?",
        "Add a department?",
        "Add a role?",
        "Add an employee?",
        "Update an employee role?",
        "Quit",
        ]

      }]).then((answer) => {
        switch (answer.choice){

        case "View all departments?":
          viewAllDepartments();
          break;
  
        case "View all roles?":
          viewAllPositions();
          break;

        case "View all employees?":
          viewAllEmployees();
          break;

        case "Add a department?":
          addDepartment();
          break;

        case "Add a role?":
          addRole();
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


function viewAllDepartments () {
     console.log("Viewing all departments");
     connection.query("SELECT * FROM departments");
        if (err) throw err;
        console.table(res);
        init();
      };   
  


function viewAllEmployees () {
  console.log("Viewing all employees");
  connection.query("SELECT * FROM employee");  
     if (err) throw err;
     console.table(res);
     init();
   }; 

   function viewAllRoles () {
    console.log("Viewing all roles");
    connection.query("SELECT * FROM role");
       if (err) throw err;
       console.table(res);
       init();
     }; 




