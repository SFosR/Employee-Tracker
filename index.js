const inquirer = require("inquirer");
// const logo = require("asciiart-logo");
const mysql = require("mysql2");
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

// function init() {
//   const logoText = logo({ name: "Employee Manager"}).render();
//   console.log(logoText);

//   loadmainMenu();
// }

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
        switch (answer.likeToDo){

        case "View all departments?":
          viewAllDepartments();
          break;
  
        case "View all roles?":
          viewAllRoles();
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

        case "Update an employee role?":
            updateEmployee();
            break;  

        case "Quit":
          connection.end();
          break; 
        }
     })
  };


function viewAllDepartments () {
     console.log("Viewing all departments");
     connection.query("SELECT * FROM departments", (err, res)=>{
      if (err) throw err;
      console.table(res);
      mainMenu();
     });
};   
  
function viewAllEmployees () {
  console.log("Viewing all employees");
  connection.query("SELECT * FROM employee", (err, res)=>{
    if (err) throw err;
     console.table(res);
     mainMenu();
  });  
     
   }; 

   function viewAllRoles () {
    console.log("Viewing all roles");
    connection.query("SELECT * FROM role", (err, res)=>{
      if (err) throw err;
       console.table(res);
       mainMenu();
    });
       
     }; 

const addDepartment = () => {
  inquirer.prompt([{
    type: 'input',
    name: 'name',
    message: 'What department would you like to add?',
    confirm: newDepartment => {
      if (newDepartment) {
            return true;
      } else {
        console.log('Please enter a department')
        return false;
      }
    }
  }]).then((answer) => {
        connection.query('INSERT INTO departments SET ?', answer, (err, result) => {
          if (err) throw err;
          console.log(answer.newDepartment + ' has been successful.');
          mainMenu();
        })
  })
};

const addRole = () => {
  inquirer.prompt([
    {
    type: 'input',
    name: 'newRole',
    message: 'What role would you like to add?',
    confirm: newRole => {
      if (newRole) {
            return true;
      } else {
        console.log('Please enter a role')
        return false;
      }
    }
},
{
  type: 'number',
  name: 'newSalary',
  message: 'What is the salary for this role?',
  confirm: newSalary => {
      if (newSalary) {
          return true;
      } else {
          console.log('Please enter salary')
          return false;
      }
  }
},
{ 
  type: 'number',
  name: 'newDepartmentId',
  message: 'What is the new department Id?',
  confirm: newDepartmentId => {
    if (newDepartmentId) {
        return true;
    } else {
      console.log('Please enter a department ID')
      return false;
    }   
  }
},
  ]).then((answer) => {
    connection.query('INSERT INTO role (title, salary, departments_id) VALUES (?,?,?)', [answer.newRole, answer.newSalary, answer.newDepartmentId], (err, result) => {
        if (err) throw err;
        console.log(answer.newRole + ' has been added successfully.');
        mainMenu();
    })
  })
};

const addEmployee = () => {
  inquirer.prompt([
    {
      type: 'input',
      name: 'newFirstName',
      message: 'What is the first name of the employee?',
      confirm: newFirstName => {
        if (newFirstName) {
          return true;
        } else {
            console.log('Please enter a first name')
            return false;
        }
      }
    },
    {
      type: 'input',
      name: 'newLastName',
      message: 'What is the last name of the employee?',
      confirm: newLastName => {
        if (newLastName) {
          return true;
        } else {
          console.log('Please enter a last name')
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'newRoleId',
      message: 'What is the new employees role Id?',
      confirm: newRoleId => {
        if (newRoleId) {
          return true;
        } else {
          console.log('Please enter a role Id')
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'newManagerId',
      message: `What is the new employee's manager's Id?`,
      confirm: newManagerId => {
        if (newManagerId) {
          return true;
        } else {
          console.log('Please enter a manager Id')
          return false;
        }
      }
    }
   
  ]).then((answer) => {
    connection.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?,?,?,?)', [answer.newFirstName, answer.newLastName, answer.newRoleId, answer.newManagerId], (err, result) => {
      if (err) throw err
        console.log(answer.newFirstName +''+ answer.newLastName +' has been successfully added.');
        mainMenu();
    })
  })
};

const updateEmployee = ()=> {
    console.log('update')
  inquirer.prompt([
    {
      type: 'number',
      name: 'newUpdateId',
      message: `What is the employee's Id?`,
      confirm: newUpdateId => {
        if (newUpdateId) {
          return true;
        } else {
          console.log('Please enter an employee Id')
          return false;
        }
      }
    },
    {
      type: 'number',
      name: 'newRoleId',
      message: 'What is the new role Id?',
      confirm: newRoleId => {
        if (newRoleId) {
          return true;
        } else {
          console.log('Please enter a role Id')
          return false;
        }
      }
    }
]).then((answer) => {
  connection.query('UPDATE employee SET role_id = ? WHERE id = ?', [answer.newRoleId, answer.newUpdateId], (err, result) => {
    if (err) throw err
      console.log(answer.newFirstName +''+ answer.newLastName +' has been successfully added.');
      mainMenu();
  })
})
};


  


    







