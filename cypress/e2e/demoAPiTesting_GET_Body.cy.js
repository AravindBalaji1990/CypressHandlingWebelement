describe('template spec', () => {
    var datafromresponse = null;
//This block inserts the data which is mentioned in the body of the request
it('GET request', () => {
    // const validdata_email ='janet.weaver@reqres.in'
    // const validdata_page = 6
    cy.request(
        {method: 'GET',
         url: 'https://reqres.in/api/users',
         headers: {
            'Content-Type': 'application/json',
            'Custom-Header': 'Custom-Value',
            
        }}).its('body').then((response) =>{
    //Asserting the status code to be 200 for successful execution
    
    // expect(response.status).to.eq(200)
    //
    cy.fixture('apiexpecetvalue').then(function(testdata){
        expect(response.per_page).to.eq(testdata.expected_page)
        expect(response.data[1].email).to.eq(testdata.expeceted_email)
    })
   
    datafromresponse = response.data[1].email;
    cy.log('response body : ' + datafromresponse)
    cy.log('response body : '+ JSON.stringify(response))
    })
    }),
    
    it('PUT request', () => {
        cy.request({method: 'PUT', url: 'https://reqres.in/api/users/2', body: {
        "name": datafromresponse,
        "job": "zion resident"
        }}).then((response) =>{
        //Asserting the status code to be 200 for successful execution
        expect(response.status).to.eq(200)
        //Asserting the name which we have inserted into
        expect(response.body.name).to.eq("janet.weaver@reqres.in")
        })
        })    
})
