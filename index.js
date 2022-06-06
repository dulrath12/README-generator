// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
const generateMarkdown = require('./utils/generateMarkdown')
// TODO: Create an array of questions for user input
const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your Project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true
                } else {
                    console.log('You must enter a Project Title!')
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'username',
            message: 'Please enter your Github username'
        },
        {
            type: 'input',
            name: 'email',
            message: 'Please enter your email address.'
        },
        {
            type: 'input',
            name: 'description',
            message: 'Please enter a Description for your project.'
        },
        {
            type: 'input',
            name: 'installation',
            message: 'What are the steps required to install your project?'
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide instructions and examples for use.'
        },
        {
            type: 'input',
            name: 'contributing',
            message: 'Please enter the guidelines you would like to set for others to contribute to this project.'
        },
        {
            type: 'input',
            name: 'collaborators',
            message: 'List any collaborators you might have had or used for this project'
        },
        {
            type: 'input',
            name: 'tests',
            message: 'Please provide any intructions that pertain to testing.'
        },
        {
            type: 'list',
            name: 'license',
            message: 'Please choose the license you would like to include:',
            choices: ['Community License', 'MIT License', 'GNU GPLv3']
        }
    ])
};




// TODO: Create a function to write README file


 //TODO: Create a function to initialize app
function init() {
    questions()
    .then(data => {
        const pageREADME = generateMarkdown(data)

        fs.writeFile('./README.md', pageREADME, err => {
            if (err) throw err

            console.log('tis be done')
        })
    
})}


 //Function call to initialize app
init()

