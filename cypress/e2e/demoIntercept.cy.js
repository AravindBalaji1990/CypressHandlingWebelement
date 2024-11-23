import * as math from 'mathjs'

describe('Customer Feedback',function (){
  
  it('Juice Shop opening the website with comment - 5 letters with space - Happy path', function() {

    // as - aliase name for the network or any data 
    // as common keyword given for anything that we need to store
    cy.intercept('POST', 'https://juice-shop.herokuapp.com/api/Feedbacks/').as('postfeedback')

    // to launch the website and navigate to feedback section
    cy.visit('https://juice-shop.herokuapp.com/')
    cy.get('img.logo+span').invoke('text').should('eq', ' OWASP Juice Shop ')
    cy.get('button[class=\'mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted\']').click();
    cy.get('a[aria-label=\'dismiss cookie message\']').click()
    cy.get('button[mattooltipposition=\'below\'][class=\'mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base\']').click();
    cy.get('mat-nav-list[role=\'navigation\']>a[routerlink=\'/contact\']>span>span[class=\'menu-text truncate\']').click();
 
      // Enter the detail in the customer feedback section
      // enter the comment
        cy.get('#comment').clear() 
        cy.get('#comment').type("test comment")
        // slider 
        cy.get('#rating').type("{rightarrow}")
        
        // capcha validation
        //math.js library file
        cy.get('#captcha').invoke('text').then((extracttext)=>{
          // regex to validate the numbers are avialable
        var pattern = /[0-9]+/;
        var number = extracttext.match(pattern);

        // regex to validate the arithmetic symbols are avialable
        var pattern1 = /[+/,-/,/*,//]+/;
        var aoperation = extracttext.match(pattern1)
        
        // mathjs library file works
        var result = math.evaluate(extracttext);
        cy.log('catcha result data ', result)
        // enter the calculated value inside the text box
        cy.get('#captchaControl').type(result,{wait: 5000})
    })
        //click the submit button
        cy.get('#submitButton').click({force: true})

        cy.get('.mat-simple-snack-bar-content').should('be.visible')

        // intercept 
        // @post means we call the name POST to validate the api availability in
        // the page
      cy.wait('@postfeedback').then((interception) => {
        //chai assertion
        assert.isNotNull(interception.response.body, 'API call has data')
        //mocha validation
        cy.log('request header',interception.request.headers)

        expect(interception.request.headers).to.have.property('host').eq('juice-shop.herokuapp.com')

        expect(interception.response.statusCode).to.eq(201)
        expect(interception.response.body.status).to.eq('success')

        // what i have inputted
        expect(interception.request.body).to.have.all.keys('captchaId', 'captcha', 'comment', 'rating');
        expect(interception.request.body).to.have.property('captchaId').match(new RegExp('[0-9]+'));
        expect(interception.request.body).to.have.property('captcha').match(new RegExp('[0-9]+'));
        expect(interception.request.body).to.have.property('comment').match(new RegExp('[a-zA-Z]+'));
        expect(interception.request.body).to.have.property('rating').match(new RegExp('[0-9]+'));
        // printhe request body
        cy.log("request body:  ",interception.request.body )
        // printhe response body
        cy.log("response : ",interception.response.body)
      })
  })
  it.only('Juice Shop opening the website with comment -Check for the catcha api', function() {

    // as - aliase name for the network or any data 
    // as common keyword given for anything that we need to store
    cy.intercept('GET', 'https://juice-shop.herokuapp.com/rest/captcha/').as('getcaptcha')

    // to launch the website and navigate to feedback section
    cy.visit('https://juice-shop.herokuapp.com/')
    cy.get('img.logo+span').invoke('text').should('eq', ' OWASP Juice Shop ')
    cy.get('button[class=\'mat-focus-indicator close-dialog mat-raised-button mat-button-base mat-primary ng-star-inserted\']').click();
    cy.get('a[aria-label=\'dismiss cookie message\']').click()
    cy.get('button[mattooltipposition=\'below\'][class=\'mat-focus-indicator mat-tooltip-trigger mat-button mat-button-base\']').click();
    cy.get('mat-nav-list[role=\'navigation\']>a[routerlink=\'/contact\']>span>span[class=\'menu-text truncate\']').click();
 
      // Enter the detail in the customer feedback section
      // enter the comment
        cy.get('#comment').clear() 
        cy.get('#comment').type("test comment")
        // slider 
        cy.get('#rating').type("{rightarrow}")
        
        // capcha validation
        //math.js library file
        cy.get('#captcha').invoke('text').then((extracttext)=>{
          // regex to validate the numbers are avialable
        var pattern = /[0-9]+/;
        var number = extracttext.match(pattern);

        // regex to validate the arithmetic symbols are avialable
        var pattern1 = /[+/,-/,/*,//]+/;
        var aoperation = extracttext.match(pattern1)
        
        // mathjs library file works
        var result = math.evaluate(extracttext);
        cy.log('catcha result data ', result)
        // enter the calculated value inside the text box
        cy.get('#captchaControl').type(result,{wait: 5000})
    })
        //click the submit button
        cy.get('#submitButton').click({force: true})

        cy.get('.mat-simple-snack-bar-content').should('be.visible')

        // intercept 
        // @post means we call the name POST to validate the api availability in
        // the page
      cy.wait('@getcaptcha').then((interception) => {
        //chai assertion
        assert.isNotNull(interception.response.body, 'API call has data')
    
        expect(interception.response.statusCode).to.eq(200)
        // expect(interception.response.body.status).to.contains('success')

        expect(interception.response.body).to.have.property('captchaId').match(new RegExp('[0-9]+'));

        cy.log("response body:  ",interception.response.body)
      })
  })
})
