// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  return `![${license}](https://img.shields.io/badge/license-${license}-blue)`;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  return `[${license}](./LICENSE.md)`;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `Liscenced under ${renderLicenseLink(license)}`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  - [Description](#description)
  - [Installation](#installation)
  - [Usage](#usage)
  - [License](#license)
  - [Contributing](#contributing)
  - [Testing](#testing)
  - [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
  ## License
  ${renderLicenseSection(data.license)}
  ## Contributing
  ${data.contribution}
  ## Testing
  ${data.testing}
  ## Questions
  The developer can be found at [their GitHub Profile](https://www.github.com/${data.github})
  Direct any additional questions to ${data.email}.
`;
}

module.exports = generateMarkdown;
