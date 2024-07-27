/// <reference types="Cypress" />

describe('demo check boxes', () => {
  it('upload file form', () => {
    // const url = Cypress.env('url2');
    // cy.visit(url)
    cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
    // cypress function where we are scrollingin to the element inside a page
    cy.get("input[name='upfile']").scrollIntoView()
    // selectFile (path of the file ) - we upload the file
    cy.get("input[name='upfile']").selectFile('/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx')
    cy.wait(1000)
    cy.get("input[name='upfile']").invoke('val').should('contains', 'InteractingWithElementsCypress')
    // cy.wait(1000)
    // multiple file upload
    // cy.get("input[name='upfile']").selectFile(['/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx','/Users/aravindbalaji/Documents/CypressDocuments/CypressSyllabus.docx'])
    // cy.get("input[name='upfile']").invoke('val').should('include', 'files')
  }),
  it.only('upload file form', () => {
    // const url = Cypress.env('url2');
    // cy.visit(url)
    cy.visit("https://cgi-lib.berkeley.edu/ex/fup.html")
    // cypress function where we are scrollingin to the element inside a page
    cy.get("input[name='upfile']").scrollIntoView()
    // cy.wait(1000)
    // selectFile (path of the file ) - we upload the file
    // multiple file upload
    cy.get("input[name='upfile']").selectFile(['/Users/aravindbalaji/Documents/CypressDocuments/InteractingWithElementsCypress.docx','/Users/aravindbalaji/Documents/CypressDocuments/CypressSyllabus.docx'])
    // this will fail the 
    cy.get("input[name='upfile']").invoke('val').should('include', 'files')
  })
  })