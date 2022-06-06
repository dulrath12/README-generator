// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
### ${data.title}

## Description

${data.descrtiption}

## Table of Contents
[Installation](#Installation)
[Usage](#Usage)
[Contributing](#Contributing)
[Collaborators](#Collaborators)
[Tests](#Tests)
[Questions](#Questions)
[License](#License)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Collaborators
${data.collaborators}

## Tests

## Questions
Github Repo: github.com/

For any additional questions, or comments, or to speak to me about the project, please reach out to me at the email listed below.

EMAIL:

## License

`;
}

module.exports = generateMarkdown;
