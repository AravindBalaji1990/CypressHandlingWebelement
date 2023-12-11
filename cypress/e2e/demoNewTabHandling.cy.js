describe('Handling new Tab using Cypress', () => {
  it('Handling new tab', () => {
    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")

cy.get('#opentab[href*=qaclick]').invoke('removeAttr','target').click({timeout: 5000})

// cy.get('#opentab[href*=qaclick]').click();
    cy.origin('https://www.qaclickacademy.com', () => {
    cy.visit('https://www.qaclickacademy.com');
  cy.get(".preloader").should('not.be.visible')
  cy.get('a>img[alt=Logo]').should('be.visible')

})
//going back to the previosu page
cy.go('back')
  })
})