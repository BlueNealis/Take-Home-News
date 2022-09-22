describe('empty spec', () => {
  beforeEach('Go to Dashboard', () => {
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      fixture: '/worldNYT.json'
    })
    cy.visit('http://localhost:3000/')
  })
})
