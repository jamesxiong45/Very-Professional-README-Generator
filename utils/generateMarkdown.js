// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
const licenseArr = ["MIT", "APACHE2.0", "Boost1.0", "GPL3.0", "BSD2" ,"BSD3", "None"]
function renderLicenseBadge(license) {
  if (license === licenseArr[0]) {
    return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)]"
} else if (license === licenseArr[1]) {
    return "[![License: APACHE2.0](https://img.shields.io/badge/License-Apache%202.0-blue.svg)]"
} else if (license === licenseArr[2]) {
    return "[![License: Boost1.0](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)]"
} else if (license === licenseArr[3]) {
    return "[![License: GPL3.0](https://img.shields.io/badge/License-AGPL%20v3-blue.svg)]"
} else if (license === licenseArr[4]) {
    return "[![License: BSD2](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)]"
} else if (license === licenseArr[5]) {
    return "[![License BSD3](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)]"
} else {
    return ""
}
}


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === licenseArr[0]) {
    return `[${licenseArr[0]}](https://opensource.org/licenses/MIT)`
} else if (license === licenseArr[1]) {
    return `[${licenseArr[1]}](https://opensource.org/licenses/Apache-2.0)`
} else if (license === licenseArr[2]) {
    return `[${licenseArr[2]}](https://www.boost.org/LICENSE_1_0.txt)`
} else if (license === licenseArr[3]) {
    return `[${licenseArr[3]}](https://www.gnu.org/licenses/agpl-3.0)`
} else if (license === licenseArr[4]) {
    return `[${licenseArr[4]}](https://opensource.org/licenses/BSD-2-Clause)`
} else if (license === licenseArr[5]) {
    return `[${licenseArr[5]}](https://opensource.org/licenses/BSD-3-Clause)`
} else {
    return ""
}
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license === licenseArr[0]) {
    return `Learn more about ${licenseArr[0]} here:`
} else if (license === licenseArr[1]) {
    return `Learn more about ${licenseArr[1]} here:`
} else if (license === licenseArr[2]) {
    return `Learn more about ${licenseArr[2]} here:`
} else if (license === licenseArr[3]) {
    return `Learn more about ${licenseArr[3]} here:`
} else if (license === licenseArr[4]) {
    return `Learn more about ${licenseArr[4]} here:`
} else if (license === licenseArr[5]) {
    return `Learn more about ${licenseArr[5]} here:`
} else {
    return ""
}
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${renderLicenseBadge(data.license)}
  ## Description
  ${data.description}
  ## Table of Contents
  * [License](#license)
  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  * [Contribute](#contribute)
  * [Tests](#tests)
  * [Questions](#questions)
  ## Installation
  ${data.installation}
  ## Usage
  ${data.usage}
    ## How to Contribute
  ${data.contribute}
    ## Tests
  ${data.test}
  ## License
  ${renderLicenseSection(data.license)}
  ${renderLicenseLink(data.license)}
  ## Questions
  ### Find me at:
  [${data.username}](https://github.com/${data.username})
  ${data.email}`

}

module.exports = generateMarkdown;
