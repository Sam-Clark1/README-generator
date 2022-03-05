// Generates badge at top of file showing license being used. If no license, returns blank.
renderLicenseBadge = license => {
  if (!license) {
    return '';
  };
  
  return `
  <img src="https://img.shields.io/badge/license-${license}-blue" alt="badge"></img>
  `;
};

// Generates link to website of license if a license is confirmed being used in project. 
renderLicenseLink = license => {
if (license == 'MIT'){
  return `
  <a href=https://github.com/microsoft/vscode/blob/main/LICENSE.txt>${license}</a>
  `;
} else if (license == 'Apache'){
  return `
  <a href=https://www.apache.org/licenses/LICENSE-2.0>${license}</a>
  `;
} else {
  return `
  <a href=https://choosealicense.com/licenses/gpl-3.0/>${license}</a>
  `;
};
};

// Generates text section stating which license is being used and calls a function to create a link to that license's website. If no license, returns blank.
renderLicenseSection = license => {
  if (!license) {
    return '';
  };

  return `
  ## License
  Licensed under the ${renderLicenseLink(license)} license.
  `;
};

renderContributeSection = contribute => {
  if (!contribute) {
    return 'Not looking for contributions at this time.';
  };

  return contribute;
};

renderTestSection = test => {
  if (!test) {
    return 'Currently no developed ways to test this project.';
  };

  return test;
};

// function that takes inputed data from quesitons in index.js and returns this text to be inputed in a README.md file.
generateMarkdown = data => {
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
${renderContributeSection(data.contribute)}

## Tests
${renderTestSection(data.tests)}

## Questions
If you have questions, you can email me at ${data.email} or you can checkout my repos
on my <a href=https://github.com/${data.github}>GitHub</a>.

${renderLicenseSection(data.license)}

`;
};

// exports the generateMarkdown function to be used by other files
module.exports = {generateMarkdown};