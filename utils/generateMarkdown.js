function generateMarkdown(data) {
  return `
  # ${data.title}

  ${"[![GitHub license](https://img.shields.io/badge/license-"+data.license+"-blue.svg)]("+data.repo+")"}
  
  ## ${"Description"}

  ${data.description}

  ## ${"Table of Contents"}
  
  * ${"[Installation](#Installation)"}
  * ${"[Usage](#usage)"}
  * ${"[License](#license)"}
  * ${"[Contributions](#contributions)"}
  
  ## ${"Installation"}

  ${data.install}

  ## ${"Usage"}

  ${data.usage}

  ## ${"License"}

  ${"this application is licensed under the " + data.license + " license"}

  ## ${"Contributions"}

  ${data.contribute}

  ## ${"Questions"}

  ${"If you have any questions about the application you can open a ticket or contact " + data.name + " directly @ " + data.email}
  `;
}

module.exports = generateMarkdown;
