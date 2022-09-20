DROP DATABASE IF EXISTS employee_db;
CREATE DATABASE employee_db;

USE employee_db;

CREATE TABLE department (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    NAME VARCHAR(30) NOT NULL
);

CREATE TABLE role (
    ID NOT NULL AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(30) NOT NULL,
    salary DECIMAL UNSIGNED NOT NULL,
    department_id INT UNSIGNED NOT NULL,
    FOREIGN KEY (department_id)
    REFRENCES department(id) 
);

CREATE TABLE employee (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(30) NOT NULL,
    last_name VARCHAR(30), NOT NULL,
    role_id INT,
    FOREIGN KEY (role_id)
    REFRENCES role(id),
    manager_id INT,
    FOREIGN KEY (manager_id)
    REFRENCES employee(id)
    ON DELETE SET NULL
);