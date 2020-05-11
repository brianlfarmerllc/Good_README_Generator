function generateMarkdown(data) {
  return `
  # ${data.title}
  
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

  ${data.license}

  ## ${"Contributions"}
  
  ${data.contribute}
  `;
}

module.exports = generateMarkdown;
