const { defineConfig } = require("cypress");
const {downfile} = require("cypress-downloadfile/lib/addPlugin")

module.exports = defineConfig({
  reporter: 'cypress-mochawesome-reporter',
  reporterOptions: {
    charts: true,
    reportPageTitle: 'Sample run',
    embeddedScreenshots: false,
    video: true,
    inlineAssets: true,
    saveAllAttempts: false,
  },
  defaultCommandTimeout: 10000,
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    // maintain the url here
    // baseUrl:'https://rahulshettyacademy.com/AutomationPractice/' ,
    // multiple env like below
    env:{
      url1: 'https://rahulshettyacademy.com/AutomationPractice/',
      url2: 'https://google.com'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{downfile})
      require('cypress-mochawesome-reporter/plugin')(on);
    },
  },

  // retries: {
  //   // npx cypress run
  //   "runMode": 1,
  //   // npx cypress open
  //   "openMode": 2
  // }
});
