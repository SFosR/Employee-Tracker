INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance"),
       ("Sales"),
       ("Marketing"),
       ("Legal");
      

INSERT INTO position (title, salary, department_id)
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
        

INSERT INTO employee (department_id, first_name, last_name, postion_id)
VALUES 
        (1, "Sheri", "Foster", 1),
        (2, "Carol", "Evanston" , 4),
        (5, "Bill", "Smith", 2),
        (3, "Laura", "Henderson", 3),
        (5, "Rose", "McDonald", 6),
        (4, "Thomas", "Forrest", 5);