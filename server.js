
const mysql = require('mysql2');
const inquirer = require('inquirer');
const conTable = require('console.table');

const ms = mysql.createConnection(
    {
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'employee_db'
    },
    console.log('Connected')
);

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
        switch (response.init) {
            case 'View employees':
                viewEmployees();
                break;

            case 'Update employee role':
                updateEmployee();
                break;

            case 'Add employee':
                addEmployee();
                break;

            case 'View roles':
                viewRoles();
                break;

            case 'Add a new role':
                addRole();
                break;

            case 'View departments':
                viewDepartment();
                break;

            case 'Add a department':
                addDepartment();
                break;

            case 'Exit':
                connection.end();
                break;
        }
    });
};

init();

const viewEmployees = () => {
    ms.query('SELECT * FROM employee', (err, employee) => {
        if (err) throw err;
        console.table(employee);
        init();
    });
};

const viewDepartment = () => {
    ms.query('SELECT * FROM department', (err, department) => {
        if (err) throw err;
        console.table(department);
        init();
    });
};

const viewRoles = () => {
    ms.query('SELECT * FROM role', (err, role) => {
        if (err) throw err;
        console.table(role);
        init();
    });
};

const addEmployee = () => {
    prompt([{
        name: 'first_name',
        type: 'input',
        message: "Enter a first name"
    },
    {
        name: 'last_name',
        type: 'input',
        message: "Enter a last name"
    },
    {
        name: 'role_id',
        type: 'input',
        message: "Enter a role id"
    },
    {
        name: 'manager_id',
        type: 'input',
        message: "Enter a manager id"
    },
    ]).then((input) => {
        ms.query('INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES', input, (err) => {
            if (err) throw err;
            console.log(`${input.first_name}, ${input.last_name}, ${input.role_id}, ${input.manager_id}`);
            init();
        });
    });
};

const addRole = () => {
    prompt([{
        name: 'title',
        type: 'input',
        message: "Enter a title"
    },
    {
        name: 'salary',
        type: 'input',
        message: "Enter a salary"
    },
    {
        name: 'department_id',
        type: 'input',
        message: "Enter a department id"
    },
    ]).then((input) => {
        ms.query('INSERT INTO role (title, salary, department_id) VALUES', input, (err) => {
            if (err) throw err;
            console.log(`${input.title}, ${input.salary}, ${input.department_id}`);
            init();
        });
    });
};

const updateEmployee = () => {
    prompt([{
        name: 'title',
        type: 'input',
        message: "Enter a title"
    },
    {
        name: 'salary',
        type: 'input',
        message: "Enter a salary"
    },
    {
        name: 'department_id',
        type: 'input',
        message: "Enter a department id"
    },
    ]).then((input) => {
        ms.query('INSERT INTO role (title, salary, department_id) VALUES', input, (err) => {
            if (err) throw err;
            console.log(`${input.title}, ${input.salary}, ${input.department_id}`);
            init();
        });
    });
};

const addDepartment = () => {
    prompt([{
        name: 'name',
        type: 'input',
        message: "Enter a department"
    },
    ]).then((input) => {
        ms.query('INSERT INTO department SET ?', input, (err) => {
            if (err) throw err;
            console.log(`${input.name}`);
            init();
        });
    });
};
