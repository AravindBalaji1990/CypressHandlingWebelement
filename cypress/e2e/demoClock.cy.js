function delayedAction(callback) {
    setTimeout(callback, 1000); // Perform the action after 1000ms (1 second)
  }
  
  
describe('Delayed Action', () => {
    it('performs delayed action', () => {
      cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
  
      // Stub the setTimeout function with a clock
      cy.clock();
  
      // Call the function with a delay
      delayedAction(() => {
        cy.get('#autocomplete').should('be.visible');
      });
  
      // Advance the clock by 1000ms (1 second)
      cy.tick(5000);
  
      // Ensure that the action has been performed
      cy.get('#autocomplete').should('be.visible');
    });
  });
  