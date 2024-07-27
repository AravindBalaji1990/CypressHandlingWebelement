/// <reference types="Cypress" />

describe('demo downlaod file', () => {
    it('demo download file', () => {
     cy.downloadFile('http://www.sample-website.com/path/to/sample.doc','downloads','test.doc')
     cy.readFile("./downloads/test.doc").should('contain','Text')
  
  }),
  it('demo download file from selenium hq ', () => {
    cy.visit("https://www.selenium.dev/downloads/")
    // cy.downloadFile('https://github.com/SeleniumHQ/selenium/releases/download/selenium-4.22.0/selenium-java-4.22.0.zip','downloads','test.doc')
    // cy.readFile("./downloads/test.doc").should('contain','Text')
    cy.get("a[href*='selenium-java']").first().click()
 
 })
  })