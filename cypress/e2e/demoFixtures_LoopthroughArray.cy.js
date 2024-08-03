describe('Dropdown value from fixture multiple', () => {
    it('should display user information for each user', () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
      // Load the fixture
      cy.fixture('dropdown').then((dropdownvaluesfromjson) => {
        // Iterate through each user in the array
        dropdownvaluesfromjson.forEach(dropdownvalues => {
          cy.log(`dropdwon value 1: ${dropdownvalues.dropdownvalue1}`);
          cy.log(`dropdwon value 1: ${dropdownvalues.dropdownvalue2}`);
          cy.get("#autocomplete").type(dropdownvalues.dropdownvalue1)
          cy.get("#autocomplete").clear();
        });
      });
    });
  });
  