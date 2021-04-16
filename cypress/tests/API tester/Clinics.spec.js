const apiClinics = `${Cypress.env("apiUrl")}/Clinics`;

describe('API Clinics', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('api_server'));
   // cy.createClinic('Malmö');
  })

  it('Get Clinics', () => {
    cy.request('/Clinics').as('clinics')
    cy.get('@clinics').should((response) => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers');
    })

  })


  it('Post Clinics', () => {
    cy.request({
      method: 'POST',
      url: 'https://localhost:5006/Clinics',
      body: {
        hsa_id: '5',
        name:'Malmö',
        phone: '1122'
      }
    })
  })


})

