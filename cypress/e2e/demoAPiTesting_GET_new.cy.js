describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('GET request', () => {
    //cy.request - keyword in cypress which can handle anything in the api methods
    cy.request(
        {
         method: 'GET',
         url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=sold'
        }).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    
    expect(response.status).to.eq(200)
    cy.log('response body : ', JSON.stringify(response.body))
    
    })
    })    
})
