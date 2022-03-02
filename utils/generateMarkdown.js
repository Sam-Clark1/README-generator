// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {

}
// link below used to create badge
{/* <img src="https://img.shields.io/badge/<label>-<message>-<color>" alt="badge"></img> */}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {

}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

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

## License

`;
}

module.exports = {generateMarkdown};