const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTable = require('console.table');
const path = require('path');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
const PORT = process.env.PORT || 3001;


// const ms = mysql.createConnection({ })

const prompt = inquirer.createPromptModule();

const init = () => {
    prompt({
        name: 'choice',
        type: 'list',
        message: 'Select one from the list',
        choices: [
            'View employees',
            'Update employee role',
            'Add employee',
            'View roles',
            'Add a new role',
            'View departments',
            'Add a department',
            'Exit'
        ]
    }).then((response) => {
        switch(response.init) {
            case 'View employees':
            viewEmployees();
        }
    })
}

const viewEmployees = () => {
    db.query('SELECT * FROM employee', (err, employee) => {
        if(err) throw err;
        console.table(employee);
        init();
    });
};

const viewDepartment = () => {
    db.query('SELECT * FROM department', (err, department) => {
        if(err) throw err;
        console.table(department);
        init();
    });
};

const viewRoles = () => {
    db.query('SELECT * FROM role', (err, role) => {
        if(err) throw err;
        console.table(role);
        init();
    });
};