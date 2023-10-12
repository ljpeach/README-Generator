// Packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// Array of questions for user input
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
        choices: [
            "Apache 2.0 License",
            "Boost Software License 1.0",
            "BSD 3-Clause License",
            "BSD 2-Clause License",
            "Creative Commons Zero v1.0 Universal",
            "Eclipse Public License 1.0",
            "GNU General Public License v3.0",
            "GNU General Public License v2",
            "GNU Affero General Public License v3.0",
            "GNU Lesser General Public License v2.1",
            "The Hippocratic License 3.0",
            "IBM Public License Version 1.0",
            "ISC License",
            "The MIT License",
            "Mozilla Public License 2.0",
            "Attribution License (BY)",
            "Open Database License (ODbL)",
            "Public Domain Dedication and License (PDDL)",
            "The Perl License",
            "The Artistic License 2.0",
            "SIL Open Font License 1.1",
            "The Unlicense",
            "WTFPL",
            "The zlib/libpng License"]
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

// Send data to generateMarkdown, write output to file. Confirm success if no errors. 
function writeToFile(fileName, data) {
    // console.log(fileName, data);
    fs.writeFile(fileName, generateMarkdown(data), (err) => err ? console.error(err) : console.log("Successfully written README.md to outs folder."));
}

//initialize app
function init() {
    // Create an output folder if it does not exist. If no errors arise, send user through README creation prompts and send response to generateMarkdown.
    fs.mkdir("outs", { recursive: true }, (err) => {
        err ? console.error(err) : inquirer.prompt(questions).then(response => writeToFile(`./outs/README.md`, response));
    });
}

// Function call to initialize app
init();
