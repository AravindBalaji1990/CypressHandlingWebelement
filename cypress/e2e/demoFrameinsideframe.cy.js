cy.get('firstfrmae').then($firstframe =>{
    const $frame  = $firstframe.content().find('second frame')
//as - keyword in cypress which denotes alias name 
//call it any wehere by representing with @
cy.wrap($frame).as('second')
cy.get('@second').then($secondframe =>{
    const a = $secondf.contents().find()
    cy.wrap($a).type('content inside secinds frame')
})
})