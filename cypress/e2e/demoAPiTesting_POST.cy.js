describe('template spec', () => {
//This block inserts the data which is mentioned in the body of the request
it('POST request', () => {
cy.request(
    {method: 'POST', 
    url: 'https://reqres.in/api/users', 
    headers: {
        'Content-Type': 'application/json',
        'Custom-Header': 'Custom-Value',
        'Authorization': 'Bearer' + '3454dsfdvdfvdfgfdgfhf'
    },
body: {
"name": "Sample2",
"job": "Team lead2"
}}).then((response) =>{
//Asserting the status code to be 201 for successful execution
expect(response.status).to.eq(201)
//Asserting the name which we have inserted into
// var sample = response.body.name;
expect(response.body.name).to.eq("Sample2")
expect(response.body.job).to.eq("Team lead2")
//Asserting the status text to confirm whether it is created
expect(response.statusText).to.eq("Created")
})
})
})
