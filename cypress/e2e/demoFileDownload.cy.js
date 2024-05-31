/// <reference types="Cypress" />

describe('demo downlaod file', () => {
    it('demo download file', () => {
     cy.downloadFile('http://www.sample-website.com/path/to/sample.doc','Download','test.doc')
     cy.readFile("./downloads/test.doc").should('contain','Text')
  
  })
  })