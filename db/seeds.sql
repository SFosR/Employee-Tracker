USE employees_db;

INSERT INTO departments (name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Marketing"),
       ("Legal");
      

INSERT INTO role (title, salary, departments_id)
VALUES 
       ("Senior Software Engineer", 200000, 1),
       ("Accountant", 100000, 2),
       ("Account Manager", 80000, 2),
       ("Sales Manager", 70000, 3),
       ("Salesperson", 60000, 3),
       ("Marketing Manager", 90000, 4),
       ("Brand Manager", 70000, 4),
       ("Attorney", 150000, 5),
       ("Legal Secretary", 85000, 5); 
        

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES 
        ("Sheri", "Foster", 1, NULL),
        ("Carol", "Evanston" , 4, 1),
        ("Bill", "Smith", 2, NULL),
        ("Laura", "Henderson", 3, 3),
        ("Rose", "McDonald", 6, 1),
        ("Thomas", "Forrest", 5, 3);