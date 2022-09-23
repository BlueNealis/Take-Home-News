describe('Detail View', () => {
  beforeEach('Go to Dashboard', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      fixture: '../fixtures/worldNYT.json'
    })
    cy.get('card').eq(1).within(() => {
      cy.get('h1').click()
    })
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      fixture: '../fixtures/detail'
    })
  })

  it('Should details of the detail view the user pressed', () => {

  })

  it('Should redirect to the NY times article when the user presses the button', {

  })

  it('Should go back to home page when the user presses Back To Main' {

  })

})
