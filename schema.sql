DROP database if exists employee_management;
CREATE database employee_management;
USE employee_management;

CREATE TABLE department (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    name VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    id INT PRIMARY KEY AUTO_INCREMENT, 
    title VARCHAR(30) NOT NULL, 
    salary DECIMAL(10, 2) NOT NULL, 
    department_id INT NOT NULL, 
    FOREIGN KEY (department_id) REFERENCES department(id)
);


-- Creates an employee table for the user
CREATE TABLE employee (
    id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(30) NOT NULL, 
    last_name VARCHAR(30) NOT NULL, 
    role_id INT NOT NULL, 
    manager_id INT, 
    FOREIGN KEY (role_id) REFERENCES role(id),
    FOREIGN KEY (manager_id) REFERENCES employee(id)
);