function generateMarkdown(data) {
  return `
  # ${data.title}

  ${"[![GitHub license](https://img.shields.io/badge/license-" + data.license + "-blue.svg)](" + data.repo + ")"}

  ${"[![GitHub Image](https://contributors-img.web.app/image?repo=brianlfarmerllc/Good_README_Generator)](" + data.repo + ")"}
  
  ## ${"Description"}

  ${data.description}

  ## ${"Table of Contents"}
  
  * ${"[Installation](#Installation)"}
  * ${"[Test](#Test)"}
  * ${"[Usage](#Usage)"}
  * ${"[Technologies](#Technologies)"}
  * ${"[License](#License)"}
  * ${"[Contributions](#Contributions)"}
  
  ## ${"Installation"}

  ${data.install}

  ## ${"Test"}

  ${data.test}

  ## ${"Usage"}

  ${"The following image demonstrates the application functionality:"}

  ${"![Good Read Me Generator Demo](" + data.usage + ")"}

  ## ${"Technologies"}

  ${"The following technologies were used in the developement of the application"}

  ${data.tech}

  ## ${"License"}

  ${"This application is licensed under the " + data.license + " license"}

  ## ${"Contributions"}

  ${data.contribute}

  ## ${"Questions"}

  ${"If you have any questions about the application you can open a ticket or contact " + data.name + " directly @ " + data.email}
  `;
}

module.exports = generateMarkdown;
