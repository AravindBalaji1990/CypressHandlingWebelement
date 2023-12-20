describe('Handling mouse hover using Cypress', () => {
    it('Handling mouse hover using Cypress', () => {
      cy.visit("https://selectorshub.com/xpath-practice-page/")
      cy.get("button.dropbtn").scrollIntoView()
      cy.get("button.dropbtn").trigger('mouseover')
      // cy.get("div.mouse-hover-content>a[href*=top]").should('be.visible')
      // cy.get("div.mouse-hover-content>a[href*=top]").click({force: true})
  
    })
  })