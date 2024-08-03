// cypress/e2e/userTests.cy.js

// to beworked with json
describe('dropdwon vlaue from fix ture multiple but individual case iteration', () => {
    let usersData;
  
    before(() => {
      cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      // Load the fixture once before all tests
      cy.fixture('dropdown').then((dropdownvalue) => {
        usersData[0] = dropdownvalue;
        cy.log('before block : ' + usersData[0])
      });
    });
  
    it('should display user information for each user', () => {
      // Iterate through each user in the array
      usersData.forEach(user => {
        cy.log(`dropdwon value 1: ${user.dropdownvalue1}`);
        cy.log(`dropdwon value 1: ${user.dropdownvalue2}`);
        cy.get("#autocomplete").type(user.dropdownvalue1)
      });
    });
  });
  