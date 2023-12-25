const { defineConfig } = require("cypress");
const {downfile} = require("cypress-downloadfile/lib/addPlugin")

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
      on('task',{downfile})
    },
  },
  // env: {
  //   baseUrl1: '',
  //   baseurl2:''
  // }
  retries: {
    // npx cypress run
    "runMode": 2,
    // npx cypress open
    "openMode": 2
  }
});
