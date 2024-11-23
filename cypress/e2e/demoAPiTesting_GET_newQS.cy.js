describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('GET request', () => {
    // cypress command predefined cy.request
    //cy.request - keyword in cypress which can handle anything in the api methods
    cy.request(
        {
         method: 'GET',
         url: 'https://petstore.swagger.io/v2/pet/findByStatus',
         qs:{
            status: 'available'
         }
        }).then((response) =>{
    //Asserting the status code to be 200 for successful execution
    
    expect(response.status).to.eq(200)
    // cy.log('response body : ', JSON.stringify(response.body))
    cy.log('response body : ', JSON.stringify(response.body))

    let id_pet = response.body[0].id
    cy.log(id_pet);
    cy.log(response.body[0].status)
    cy.log(response.body[0].tags[0].name)
    // return id_pet;
    })
    // .then((id_pet) =>{

    //     cy.request('GET' , `https://petstore.swagger.io/v2/pet/${id_pet}`).then((response) =>{
    //         cy.log(JSON.stringify(response.body))
    //     })
    // })

    })    
})
