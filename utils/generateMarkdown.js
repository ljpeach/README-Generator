// Function that returns a license badge based on which license is passed in
// If there is no license, returns an empty string
function renderLicenseBadge(license) {
  if (!license) {
    return "";
  }
  // Matches license with proper badge
  switch (license) {
    case "Apache 2.0 License":
      return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case "Boost Software License 1.0":
      return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    case "BSD 3-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    case "BSD 2-Clause License":
      return "[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)";
    case "Creative Commons Zero v1.0 Universal":
      return "[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)";
    case "Eclipse Public License 1.0":
      return "[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";
    case "GNU General Public License v3.0":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case "GNU General Public License v2":
      return "[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)";
    case "GNU Affero General Public License v3.0":
      return "[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)";
    case "GNU Lesser General Public License v3":
      return "[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)";
    case "The Hippocratic License 3.0":
      return "[![License: Hippocratic 3.0](https://img.shields.io/badge/License-Hippocratic_3.0-lightgrey.svg)](https://firstdonoharm.dev)";
    case "IBM Public License Version 1.0":
      return "[![License: IPL 1.0](https://img.shields.io/badge/License-IPL_1.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)";
    case "ISC License":
      return "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
    case "The MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case "Mozilla Public License 2.0":
      return "[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)";
    case "Attribution License (BY)":
      return "[![License: Open Data Commons Attribution](https://img.shields.io/badge/License-ODC_BY-brightgreen.svg)](https://opendatacommons.org/licenses/by/)";
    case "Open Database License (ODbL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-ODbL-brightgreen.svg)](https://opendatacommons.org/licenses/odbl/)";
    case "Public Domain Dedication and License (PDDL)":
      return "[![License: ODbL](https://img.shields.io/badge/License-PDDL-brightgreen.svg)](https://opendatacommons.org/licenses/pddl/)";
    case "The Perl License":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    case "The Artistic License 2.0":
      return "[![License: Artistic-2.0](https://img.shields.io/badge/License-Artistic_2.0-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)";
    case "SIL Open Font License 1.1":
      return "[![License: Open Font-1.1](https://img.shields.io/badge/License-OFL_1.1-lightgreen.svg)](https://opensource.org/licenses/OFL-1.1)";
    case "The Unlicense":
      return "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";
    case "WTFPL":
      return "[![License: WTFPL](https://img.shields.io/badge/License-WTFPL-brightgreen.svg)](http://www.wtfpl.net/about/)";
    case "The zlib/libpng License":
      return "[![License: Zlib](https://img.shields.io/badge/License-Zlib-lightgrey.svg)](https://opensource.org/licenses/Zlib)";
    default:
      return "";
  }
}

// Function that returns the license link.
// If there is no license, returns an empty string
function renderLicenseLink(license) {
  if (!license) {
    return "";
  }
  // Matches license with proper license link.
  switch (license) {
    case "Apache 2.0 License":
      return `[${license}](https://opensource.org/licenses/Apache-2.0)`;
    case "Boost Software License 1.0":
      return `[${license}](https://www.boost.org/LICENSE_1_0.txt)`;
    case "BSD 3-Clause License":
      return `[${license}](https://opensource.org/licenses/BSD-3-Clause)`;
    case "BSD 2-Clause License":
      return `[${license}](https://opensource.org/licenses/BSD-2-Clause)`;
    case "Creative Commons Zero v1.0 Universal":
      return `[${license}](http://creativecommons.org/publicdomain/zero/1.0/)`;
    case "Eclipse Public License 1.0":
      return `[${license}](https://opensource.org/licenses/EPL-1.0)`;
    case "GNU General Public License v3.0":
      return `[${license}](https://www.gnu.org/licenses/gpl-3.0)`;
    case "GNU General Public License v2":
      return `[${license}](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
    case "GNU Affero General Public License v3.0":
      return `[${license}](https://www.gnu.org/licenses/agpl-3.0)`;
    case "GNU Lesser General Public License v3":
      return `[${license}](https://www.gnu.org/licenses/lgpl-3.0)`;
    case "The Hippocratic License 3.0":
      return `[${license}](https://firstdonoharm.dev)`;
    case "IBM Public License Version 1.0":
      return `[${license}](https://opensource.org/licenses/IPL-1.0)`;
    case "ISC License":
      return `[${license}](https://opensource.org/licenses/ISC)`;
    case "The MIT License":
      return `[${license}](https://opensource.org/licenses/MIT)`;
    case "Mozilla Public License 2.0":
      return `[${license}](https://opensource.org/licenses/MPL-2.0)`;
    case "Attribution License (BY)":
      return `[${license}](https://opendatacommons.org/licenses/by/)`;
    case "Open Database License (ODbL)":
      return `[${license}](https://opendatacommons.org/licenses/odbl/)`;
    case "Public Domain Dedication and License (PDDL)":
      return `[${license}](https://opendatacommons.org/licenses/pddl/)`;
    case "The Perl License":
      return `[${license}](https://opensource.org/licenses/Artistic-2.0)`;
    case "The Artistic License 2.0":
      return `[${license}](https://opensource.org/licenses/Artistic-2.0)`;
    case "SIL Open Font License 1.1":
      return `[${license}](https://opensource.org/licenses/OFL-1.1)`;
    case "The Unlicense":
      return `[${license}](http://unlicense.org/)`;
    case "WTFPL":
      return `[${license}](http://www.wtfpl.net/about/)`;
    case "The zlib/libpng License":
      return `[${license}](https://opensource.org/licenses/Zlib)`;
    default:
      return "";
  }
}

// Function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (!license) {
    return "";
  }
  return `Liscenced under ${renderLicenseLink(license)}`;
}

// Function to generate markdown for README
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
