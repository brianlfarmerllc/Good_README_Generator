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

function writeToFile(fileName, data) {
}

function init() {

}

init();
