const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

const questions = [
  "What is your Github user name?",
  "What is your email",
  "What is the project Repo URL?",
  "What is your project title?",
  "What is your project description?",
  "What are the project installation instructions?",
  "How do you test the application",
  "What is the path to your video showing your projects intended usage?",
  "What types of technologies were used",
  "What type of license would you like to assign?"
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
      name: "email",
      message: questions[1]
    },
    {
      type: "input",
      name: "repo",
      message: questions[2]
    },
    {
      type: "input",
      name: "title",
      message: questions[3]
    },
    {
      type: "input",
      name: "description",
      message: questions[4]
    },
    {
      type: "input",
      name: "install",
      message: questions[5]
    },
    {
      type: "input",
      name: "test",
      message: questions[6]
    },
    {
      type: "input",
      name: "usage",
      message: questions[7]
    },
    {
      type: "checkbox",
      name: "tech",
      message: questions[8],
      choices: [
        "Heroku",
        "Git Pages",
        "React",
        "HTML5",
        "CSS",
        "Javascript and jQuery",
        "Node.js",
        "Express",
        "MYSQL and Sequelize",
        "Mongo and Mongoose",
        "Bootstrap",
        "Handlebars",
        "Inquirer",
        "Moment",
        "Chart.js"
      ]
    },
    {
      type: "list",
      name: "license",
      message: questions[9],
      choices: [
        "MIT",
        "GPLv2",
        "GPLv3",
        "Apache",
        "BSD 2-clause",
        "BSD 3-clause",
        "LGPLv3",
        "AGPLv3",
        "Unlicensed"
      ]
    },
  ]).then(function (data) {
    var fileName = "NEWREADME.md"

    fs.writeFile(fileName, generateMarkdown(data), function (err) {

      if (err) {
        return console.log(err);
      }

    });
  })
}

init();

