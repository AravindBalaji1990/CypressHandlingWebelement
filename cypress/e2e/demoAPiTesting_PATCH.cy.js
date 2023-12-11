describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('PATCH request', () => {
    cy.request({method: 'PATCH', url: 'https://reqres.in/api/users/2', body: {
    "name": "Angel",
    "job": "zion resident"
    }}).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    expect(response.status).to.eq(200)
    //Asserting the name which we have inserted into
    expect(response.body.name).to.eq("Angel")
    })
    })    
})
