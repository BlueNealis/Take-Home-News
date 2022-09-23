describe('Dashboard', () => {
  beforeEach('Go to Dashboard', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      fixture: '../fixtures/worldNYT.json'
    })
  })

  it('Should show cards in results ', () => {

  })

  it('Should allow user to select a different option of news and have it populate', {

  })

  it('Should change to a detail view when the user clicks on an article link' {

  })

  it('Should show an error message if no cards populate for a topic', {

  })

})
