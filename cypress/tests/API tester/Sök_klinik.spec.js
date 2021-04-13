
describe('API Clinics', () => {
    beforeEach(() => {
  // alias the users fixtures
  cy.fixture('users.json').as('users')
})
    const user = this.users[0]
    /*cy.get('header').should('contain', user.name)*/

    it('GET Clinics', () => {
      cy.visit(cy.env(api_server))
      cy.request('/Clinics').as('clinics')
      cy.get('@clinics').should(response.code('200'))

    })

  })

