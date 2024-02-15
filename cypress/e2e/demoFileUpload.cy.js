/// <reference types="Cypress" />

describe('demo check boxes', () => {
  //   it('demo cehckbox in a form', () => {
  //     cy.visit('http://www.techlistic.com/p/selenium-practice-form.html')
  //     // it scrolls to the specific element in the page
  //     cy.get("#profession-0").scrollIntoView()
  //     // clicking the text box
  //     cy.get("#profession-0").check()
  //     // static wait itusually waits for the time given
  //     cy.wait(1000)
  //     // unclicking the checkbox
  //     cy.get("#profession-0").uncheck()
  
  // }),
  it('upload file form', () => {
    cy.visit('https://cgi-lib.berkeley.edu/ex/fup.html')
    // cypress function where we are scrollingin to the element inside a page
    cy.get("input[name='upfile']").scrollIntoView()
    // we upload the file
    cy.get("input[name='upfile']").selectFile('/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx')
    cy.wait(1000)
    cy.get("input[name='upfile']").invoke('val').should('contains', 'InteractingWithElementsCypress')
    // cy.wait(1000)
    // multiple file upload
    cy.get("input[name='upfile']").selectFile(['/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx','/Users/aravindbalaji/Documents/CypressDocuments/CypressSyllabus.docx'])
  
  })
  })