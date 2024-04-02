describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('GET request', () => {
    cy.request(
        {
         method: 'GET',
         url: 'https://reqres.in/api/users'
        }).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    
    expect(response.status).to.eq(200)
    cy.log('response body : ', response.body)
    cy.log('response body : ', response.status)
    })
    })    
})
