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
            name: 'motivation',
            message: 'What was your motivation for this project?'
        },
        {
            type: 'input',
            name: 'why',
            message: 'Why did you build this project?'
        },
        {
            type: 'input',
            name: 'what',
            message: 'What problem does it solve / What does it do?'
        },
        {
            type: 'input',
            name: 'learn',
            message: 'What did you learn while making this project?'
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
            name: 'collaborators',
            message: 'List any collaborators you might have had or used for this project'
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Please choose the licenses you would like to include:',
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

