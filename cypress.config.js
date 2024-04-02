const { defineConfig } = require("cypress");
const {downfile} = require("cypress-downloadfile/lib/addPlugin")

module.exports = defineConfig({
  
  screenshotOnRunFailure: true,
  video: true,
  e2e: {
    // maintain the url here
    // baseUrl:'https://cgi-lib.berkeley.edu/ex/fup.html' ,
    // multiple env like below
    env:{
      url1: 'https://cgi-lib.berkeley.edu/ex/fup.html',
      url2: 'https://google.com'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{downfile})
    },
  },

  // retries: {
  //   // npx cypress run
  //   "runMode": 2,
  //   // npx cypress open
  //   "openMode": 2
  // }
});
