// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown')

// prompts user inputs for the README
function init() {
    inquirer.prompt([
    {
        type: "input",
        name: "title",
        message: "What is the title of your project?"
    },
    {
        type: "input",
        name: "description",
        message: "Write a description for your project?" 
    },
    {
        type: "input",
        name: "installation",
        message: "How would you install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "What is your project used for?"
    },
    {
        type: "list",
        name: "license",
        message: "What license does your project have?",
        choices: ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
    },
    {
        type: "input",
        name: "contribute",
        message: "How could someone contribute to your project?",
    },
    {
        type: "input",
        name: "test",
        message: "How could someone test the application?"
    },
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email address?"
    },
    {
        type: "input",
        name: "fileName",
        message: "What do you want to name this README.md file?"
    }
    ])
    // creates the README file using the answers to the prompt
    .then((answers) => {
        const a = generateMarkdown(answers);
        fs.writeFile('README.md', a, (err) =>
        err ? console.log(err) : console.log('A README.md file was created.')
        );
    })
    
};

// Function call to initialize app
init();
