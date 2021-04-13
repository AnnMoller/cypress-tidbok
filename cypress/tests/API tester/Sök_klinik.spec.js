
describe('API Clinics', () => {
   
    //const user = this.users[0]
    /*cy.get('header').should('contain', user.name)*/

  /*
    it('GET Clinics', () => {
      // cy.visit(cy.env(api_server))
        cy.request('/Clinics').as('clinics')
        cy.get('@clinics').should((response => {
          expect(response.status).to.eq(200),
          expect(response).to.have.property('headers')
        })
    })

    */

    it('cy.request() - make an XHR request', () => {
      // https://on.cypress.io/request
      cy.request('/Clinics')
       .should((response) => {
        expect(response.status).to.eq(200)

       })
     })
   
})

