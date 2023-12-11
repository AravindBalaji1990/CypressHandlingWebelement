import Add from "./Demopath/Add";

describe('Stub Example', () => {
    it('stubs the add function', () => {
      // Stub the add function
      // stub function with th window object followed by the mehtod and what it should do on the method
      cy.stub(window, 'add').returns(10);
  
      // Call the stubbed add function
      const result = Add.add(5, 3);
  
      // Check if the result matches the stubbed value
      expect(result).to.equal(10);
    });
    
  });


  