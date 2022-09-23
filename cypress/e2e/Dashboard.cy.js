describe('Dashboard', () => {
  beforeEach('Go to Dashboard', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      fixture: '../fixtures/worldNYT.json'
    })
  })

  it('Should show cards in results ', () => {
    cy.get('card').should('have.length', 4)
    cy.get('card').eq(0).within(() => {
      cy.contains('Ukraine War Comes Home to Russians as Putin Imposes Draft')
      cy.get('img')
    }
    cy.get('card').eq(1).within(()=>{
      cy.contains('What’s Driving the Protests in Iran?')
      cy.get('img')
    })
    cy.get('card').eq(2).within(() => {
      cy.contains('2 Michael Jackson Impersonators Look Identical. The Resemblance Ends There.')
      cy.get('img')
    })
    cy.get('card').eq(3).within(() => {
      cy.contains('Catholics Outnumber Protestants in Northern Ireland for the First Time')
      cy.get('img')
    })

  })

  it('Should allow user to select a different option of news and have it populate', {
    cy.get('option').within(() -> {
      cy.select('us')
      cy.intercept(`https://api.nytimes.com/svc/topstories/v2/us.json?api-key=${process.env.REACT_APP_API_KEY}`, {
        fixture: '../fixtures/us.json'
      })
      cy.get('card').should('have.length', 3)
      cy.get('card').eq(0).within(() => {
        cy.contains()
        cy.get('img')
      }
      cy.get('card').eq(1).within(()=>{
        cy.contains()
        cy.get('img')
      })
      cy.get('card').eq(2).within(() => {
        cy.contains()
        cy.get('img')
      })
    })

  it('Should change to a detail view when the user clicks on an article link' {
    cy.get('card').eq(1).within(() => {
      cy.get('h1').click()
    })
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      fixture: '../fixtures/detail.json'
    })
    cy.url().should('eq', '')
  })

  it('Should show an error message if no cards populate for a topic', {
    cy.get('card').eq(0).within(() => {
      cy.get('h1').click()
    })
    cy.intercept(`https://api.nytimes.com/svc/topstories/v2/world.json?api-key=${process.env.REACT_APP_API_KEY}`, {
      statusCode: 500
    })
  })

})
