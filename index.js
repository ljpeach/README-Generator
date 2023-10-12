// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");
const { Console } = require("console");

// TODO: Create an array of questions for user input
//Title, description, installation instructions, usage information, contribution guidelines, and test instructions
// Choose license
// GitHub Username
// Email address
const questions = [
    {
        type: "input",
        name: "title",
        message: "Please enter your project title."
    },
    {
        type: "input",
        name: "description",
        message: "Please enter a description of your project."
    },
    {
        type: "input",
        name: "installation",
        message: "Please enter installation instructions for your project."
    },
    {
        type: "input",
        name: "usage",
        message: "Please enter usage information for your project."
    },
    {
        type: "input",
        name: "contribution",
        message: "Please describe how others can contribute to your project."
    },
    {
        type: "input",
        name: "testing",
        message: "Please enter testing instructions for your project."
    },
    {
        type: "list",
        name: "license",
        message: "Please select a license for your project.",
        choices: ["MIT", "none"]
    },
    {
        type: "input",
        name: "github",
        message: "Please enter your github username."
    },
    {
        type: "input",
        name: "email",
        message: "Please enter your email address."
    },
];

// TODO: Create a function to write README file
// Table of Contents has functional links (hyperlink to proper section of README)
function writeToFile(fileName, data) {
    // console.log(fileName, data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log("Successfully written README.md to outs folder."));
}

// TODO: Create a function to initialize app
function init() {
    fs.mkdir("outs", { recursive: true }, (err) => err ? console.error(err) : console.log("Verified output folder."));
    inquirer.prompt(questions).then(response => writeToFile(`outs/README.md`, response));
}

// Function call to initialize app
init();
