const fs = require('fs');
const inquirer = require('inquirer');
const { rejects } = require('assert');
const { resolve } = require('path');
const { generateMarkdown } = require('./utils/generateMarkdown')

const questions = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project? (Required)',
            validate: titleInput => {
                if (titleInput) {
                    return true;
                } else {
                    console.log('Please enter project title.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description of your project. (Required)',
            validate: descriptionInput => {
                if (descriptionInput) {
                    return true;
                } else {
                    console.log('Please enter project description.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'install',
            message: 'Give a description of how to install this project to be used. (Required)',
            validate: installInput => {
                if (installInput) {
                    return true;
                } else {
                    console.log('Please enter description of installing project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Give a description of how to use your project. (Required)',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please enter description of how to use project.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmContribute',
            message: 'Are you open to contributions? If no, will display "Not looking for contributions at this time".',
            default: true
          },
          {
            type: 'input',
            name: 'contribute',
            message: 'Give a description of how others can contribute to your project. (Required)',
            when: ({ confirmContribute }) => confirmContribute, 
            validate: contributeInput => {
                if (contributeInput) {
                    return true;
                } else {
                    console.log('Please enter description of how you want others to contribute to your project.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmTests',
            message: 'Do you have ways to test your project? If no, will display "Currently no developed ways to test this project".',
            default: true
          },
          {
            type: 'input',
            name: 'tests',
            message: 'Give a description of how others can test your project. (Required)',
            when: ({ confirmTests }) => confirmTests, 
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please enter description of how to test your project.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username for contact info. (Required)',
            validate: githubInput => {
                if (githubInput) {
                    return true;
                } else {
                    console.log('Please enter GitHub username.')
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email for contact info. (Required)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter email.')
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmLicense',
            message: 'Does your project utilize a license?',
            default: true
          },
        {
            type: "list",
            name: "license",
            message: "Choose desired license.",
            choices: ["MIT", "Apache", "GNU GPLv3"],
            when: ({ confirmLicense }) => confirmLicense
          },
    ])
    .then(data => {
        console.log(data)
        return data
    })
};

writeToFile = fileContent => {
    return new Promise((resolve, rejects) => {
        fs.writeFile('./dist/README.md', fileContent, err => {
            if (err) {
                rejects(err);
                return;
            }

            resolve({
                ok: true, 
                message: "file created"
            });
        });
    }); 
};

questions() 
    .then(data => {
        return generateMarkdown(data);
    })
    .then(pageMd => {
        return writeToFile(pageMd)
    })
    .catch(err => {
        console.log(err)
    });
