
describe('API Clinics', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('api_server'))
  })
  /*
  beforeEach(() => {
    cy.fixture('/')
  })
    const user = this.users[0]
    cy.get('header').should('contain', user.name)*/


    it('Get Clinics', () => {
      cy.request('/Clinics').as('clinics')
      cy.get('@clinics').should((response) => {
        expect(response.status).to.eq(200)
        expect(response).to.have.property('headers')
      })
      
     })
   
})

