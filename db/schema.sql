DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db

CREATE TABLE departments (
    id INT PRIMARY KEY,
    name VARCHAR(30) NOT NULL
);
--Below when I call the table "role" it makes it blue. Any other word comes out white. --
CREATE TABLE position (
    id INT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL NOT NULL,
    departments_id INT NOT NULL
);
CREATE TABLE employee (
    id INT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30) NOT NULL,
    position_id INT NOT NULL,
    manager_id INT NOT NULL
);

