describe('Handling mouse hover using Cypress', () => {
    // it('Handling mouse hover using Cypress', () => {
    //   cy.visit("https://selectorshub.com/xpath-practice-page/")
    //   cy.get("button.dropbtn").scrollIntoView()
    //   cy.get("button.dropbtn").trigger('mouseover')
    //   // cy.get("div.mouse-hover-content>a[href*=top]").should('be.visible')
    //   // cy.get("div.mouse-hover-content>a[href*=top]").click({force: true})
  
    // }),
    it('mousehover check in amazon',()=>{
      cy.visit("https://www.amazon.com/ae")
      cy.get("#nav-tools a[data-nav-role='signin']").trigger("mouseover")
      cy.wait(3000)
      cy.get("#nav-flyout-accountList").invoke('attr','style').should('contain','block')
      cy.wait(3000)
      cy.get("a#nav_prefetch_yourorders").click({force: true})
    })
  })