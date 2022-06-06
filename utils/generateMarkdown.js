// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {
  if (data.license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (data.license === 'GNU-GPLv3') {
    return '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (data.license === 'ISC') {
    return '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
  } else if (data.license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(data) {
  if (data.license === 'Apache'){
    return 'https://choosealicense.com/licenses/apache-2.0/'
  } else if (data.license === 'GNU-GPLv3') {
    return 'https://choosealicense.com/licenses/gpl-3.0/'
  } else if (data.license === 'ISC') {
    return 'https://choosealicense.com/licenses/isc/'
  } else if (data.license === 'MIT') {
    return 'https://choosealicense.com/licenses/mit/'
  } else {
    return ''
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseBadge(data)}

# ${data.title}

## Description
${data.description}

## Table of Contents

-[Installation](#Installation)

-[Usage](#Usage)

-[Contributing](#Contributing)

-[Collaborators](#Collaborators)

-[Tests](#Tests)

-[Questions](#Questions)

-[License](#License)

## Installation
${data.installation}

## Usage
${data.usage}

## Contributing
${data.contributing}

## Collaborators
${data.collaborators}

## Tests
${data.tests}

## Questions
Github Repo: github.com/${data.username}

For any additional questions, or comments, or to speak to me about the project, please reach out to me at the email listed below.

EMAIL: ${data.email}

## License
Distributed under the ${data.license} License. Visit ${renderLicenseLink(data)} for license information.

`;
}

module.exports = generateMarkdown;
