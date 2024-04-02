describe('git hub check', function() 
{

it('git hub check',function() {

    cy.visit("https://github.com/")

    cy.get("form[action='/signup'] #user_email").first().type("aravindbalaji")
})
})