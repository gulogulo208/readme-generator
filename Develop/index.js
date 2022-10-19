const inquirer = require('inquirer');
const fs = require('fs');

const fileName = 'README.md'

inquirer.prompt([
      {
        type: 'input',
        name: 'Name',
        message: 'Name of Project:',
      },
      {
        type: 'input',
        name: 'About',
        message: 'About this app:',
      },
      {
        type: 'input',
        name: 'Installation',
        message: 'Describe how you install this app:',
      },
      {
        type: 'input',
        name: 'Usage',
        message: 'Describe how you use this app:',
      }

]).then((answers) => {
    const readMeInputs = readMeWriter(answers);
    fs.writeFile(fileName, readMeInputs, (error) => {
        error ? console.log(error) : console.log('Success!');
    });
});


const readMeWriter  = (answers) => {
    return `
# Name:  
${answers.Name}
## About:  
${answers.About}
## Installation:  
${answers.Installation}
## Usage:  
${answers.Usage}
        `
};
