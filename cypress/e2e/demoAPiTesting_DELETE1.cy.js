describe('template spec',() => {
    //This block inserts the data which is mentioned in the body of the request
    it('DELETE request', () => {
        cy.request(
            {
            method: 'DELETE', 
            url: 'https://reqres.in/api/users/2'}).then((response) =>{
        //Asserting the status code to be 204 for successful execution
        expect(response.status).to.eq(204)
        })
        }) 
    
    })
    