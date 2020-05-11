const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
    "What is your Github user name?",
    "What is the project Repo URL?",
    "What is your project title?", 
    "What is your project description?", 
    "What are the project installation instructions?", 
    "What is your projects intended usage?",
    "What type of license would you like to assign?",
    "How can others contribute?"
];


function init() {
    
    inquirer.prompt([
        {
          type: "input",
          name: "name",
          message: questions[0]
        },
        {
          type: "input",
          name: "repo",
          message: questions[1]
        },
        {
          type: "input",
          name: "title",
          message: questions[2]
        },
        {
          type: "input",
          name: "description",
          message: questions[3]
        },
        {
          type: "input",
          name: "install",
          message: questions[4]
        },
        {
          type: "input",
          name: "usage",
          message: questions[5]
        },
        {
          type: "input",
          name: "license",
          message: questions[6]
        },
        {
          type: "input",
          name: "contribute",
          message: questions[7]
        },
      ]).then(function (data) {
        var fileName = "README.md"

        fs.writeFile(fileName, generateMarkdown(data), function(err) {
      
          if (err) {
            return console.log(err);
          }
      
        });
      })

      
    
}

init();

