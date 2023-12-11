describe('Handling mouse hover using Cypress', () => {
    it('Handling mouse hover using Cypress', () => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      cy.get("#mousehover").scrollIntoView()
      cy.get("#mousehover").trigger('mouseover')
      cy.get("div.mouse-hover-content>a[href*=top]").should('be.visible')
      cy.get("div.mouse-hover-content>a[href*=top]").click({force: true})
  
    })
  })