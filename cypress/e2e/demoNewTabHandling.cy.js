describe('Handling new Tab using Cypress', () => {
  it.only('Handling new tab', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    // weneed to remove the target attribute
cy.get('#opentab[href*=qaclick]').invoke('removeAttr','target').click()

// cy.get('#opentab[href*=qaclick]').click();
// link of the new tab
    cy.origin('https://www.qaclickacademy.com/', () => {
      // visit the new tab link
    cy.visit('https://www.qaclickacademy.com');
    // perform the actions ont he new tab which is opened onthe smae browser
  cy.get(".preloader").should('not.be.visible')
  cy.get('a>img[alt=Logo]').should('be.visible')

})
//going back to the previosu page
// cy.go(-1)
// cy.go('back')
cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

  }),
  it('Handling new window- workaround', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

    cy.get('#openwindow').should('be.visible')

    cy.visit('https://www.qaclickacademy.com/')
  })
})