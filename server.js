const inquirer = requirez('inquirer');
const mysql = require('mysql2');
require('dotenv').config()

// Middleware



// Connect to database

const db = mysql.createConnection(
  {
      host: 'localhost',
      port: 3001, //do we just pick a number?
      user: 'root',
      password: process.env.PASSWORD,
      database: 'employess_db',

  }  
);


