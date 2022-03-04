// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }
  
  return `
  <img src="https://img.shields.io/badge/license-${license}-blue" alt="badge"></img>
  `
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
if (license == 'MIT'){
  return `
  <a href=https://github.com/microsoft/vscode/blob/main/LICENSE.txt>${license}</a>
  `
} else if (license == 'Apache'){
  return `
  <a href=https://www.apache.org/licenses/LICENSE-2.0>${license}</a>
  `
} else {
  return `
  <a href=https://choosealicense.com/licenses/gpl-3.0/>${license}</a>
  `
}

  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  return `
  ## License
  Licensed under the ${renderLicenseLink(license)} license.
  `
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
${renderLicenseBadge(data.license)}
# ${data.title}

## Description
${data.description}
## Table of Contents
1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Questions](#questions)

## Installation
${data.install}

## Usage
${data.usage}

## Contributing
${data.contribute}

## Tests
${data.tests}

## Questions
${data.github}
${data.email}

${renderLicenseSection(data.license)}

`;
}

module.exports = {generateMarkdown};