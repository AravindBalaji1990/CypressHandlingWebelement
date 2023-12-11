//describe as a test scenario
describe('Google websote check', () => {
    // test case to test the functionality
    it('passes', () => {
        // to open url
      cy.visit('https://www.google.com')
      // cy.viewport(280, 653) // change the resolution of tje screem
      // title of the page
      cy.title().then((title)=>{
        cy.log('ttile of page -> '+title)
      })
  
      // url of the page
      cy.url().then((url)=>{
        cy.log('url of page -> '+url)
      })
  
      // sleeper command - it waits for the specified milli seconds
      cy.wait(5000)
      cy.visit('https://bstackdemo.com/')
      cy.wait(5000)
  
      // browser based actions
      cy.go('back')
      cy.wait(5000)
      cy.go('forward')
    })
  })