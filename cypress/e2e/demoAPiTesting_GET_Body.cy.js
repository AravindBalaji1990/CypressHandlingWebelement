describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('GET request', () => {
    cy.request(
        {method: 'GET',
         url: 'https://reqres.in/api/users',
         headers: {
            'Content-Type': 'application/json',
            'Custom-Header': 'Custom-Value',
            
        }}).its('body').then((response) =>{
    //Asserting the status code to be 200 for successful execution
    
    // expect(response.status).to.eq(200)
    expect(response.per_page).to.eq(6)

    cy.log('response body : ' + response.data[1].email)
    cy.log('response body : '+ response)
    })
    })    
})
