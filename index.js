const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generateREADME = ({ title, description, installation, usage, contribution, tests, license, github, email }) =>
  `# ${title}

![License](https://img.shields.io/badge/license-${license}-blue.svg)

## Description
${description}

## Table of Contents
- [Installation](#installation)  <!-- Changed: Added anchor link format -->
- [Usage](#usage)  <!-- Changed: Added anchor link format -->
- [License](#license)  <!-- Changed: Added anchor link format -->
- [Contributing](#contributing)  <!-- Changed: Added anchor link format -->
- [Tests](#tests)  <!-- Changed: Added anchor link format -->
- [Questions](#questions)  <!-- Changed: Added anchor link format -->

## Installation
${installation}

## Usage
${usage}

## License
This project is licensed under the ${license} license.

## Contributing
${contribution}

## Tests
${tests}

## Questions
If you have any questions, please contact me at [${email}](mailto:${email}).
You can also find more of my work on my [GitHub profile](https://github.com/${github}).
`;

inquirer
  .prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a short description of your project:',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Provide the installation instructions:',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide usage information:',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'Provide contribution guidelines:',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide test instructions:',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Choose a license for your project:',
      choices: ['MIT', 'GPLv3', 'Apache 2.0', 'BSD 3-Clause', 'None'],
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your GitHub username:',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email address:',
    },
  ])
  .then((answers) => {
    const readmeContent = generateREADME(answers);
    const filePath = path.join(process.cwd(), 'README.md');
    fs.writeFile(filePath, readmeContent, (err) =>
      err ? console.error(err) : console.log('Successfully created README.md!')
    );
  })
  .catch((error) => {
    console.error('An error occurred:', error);
  });
