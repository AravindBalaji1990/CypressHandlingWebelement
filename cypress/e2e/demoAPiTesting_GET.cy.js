describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('GET request', () => {
    //cy.request - keyword in cypress which can handle anything in the api methods
    cy.request(
        {
         method: 'GET',
         url: 'https://reqres.in/api/users'
        }).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    
    expect(response.status).to.eq(200)
    cy.log('response body : ', JSON.stringify(response.body))
    expect(response.body.total).to.eq(12)
    expect(response.body.data[0].email).to.eq('gorge.bluth@reqres.in')
    cy.log('response body : ', response.status)
    // to retrievt he second value in the api from data
    var datafromresponse = response.body.data[1].email;
    cy.log('response body 2 : ' + datafromresponse)
    // cy.log('response body 2: '+ JSON.stringify(response))
    })
    })    
})
