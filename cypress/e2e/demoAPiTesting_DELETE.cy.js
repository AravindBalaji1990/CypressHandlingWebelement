describe('Delete api request', () => {
//This block inserts the data which is mentioned in the body of the request
//delete reuqets performs with a path parameter
// here in this api '2' inthe url is considered as path paramter and delete will delete this entry
it('DELETE request', () => {
    cy.request(
        {
        method: 'DELETE', 
        url: 'https://reqres.in/api/users/2',
        headers: {
            'Content-Type': 'application/json',
            // sometimes our development team might provide some custom exception to validate 
            'Custom-Header': 'Custom-Value',
            
        }
    }).then((response) =>{
    //Asserting the status code to be 204 for successful execution
    expect(response.status).to.eq(204)
    })
    })    
})
