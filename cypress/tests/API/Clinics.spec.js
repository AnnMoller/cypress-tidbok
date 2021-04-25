const localApiClinics = `${Cypress.env("localApiUrl")}`;
const azureApiClinics = `${Cypress.env("azureApiUrl")}/Clinics`;
const apiUrl = `${Cypress.env("apiUrl")}`;
const randomClinicId = Cypress.clinicId()

describe('API Clinics', () => {
  beforeEach(() => {
   cy.visit(`${localApiClinics}`);
   // cy.createClinic('Malmö');
  })


// hsa_id måste vara unikt i tabell
  it('Post Clinics', () => {
    cy.request({
      method: 'POST',
      url: `${localApiClinics}/Clinics`,
      body: {
        hsa_id: clinicId,
        "name": "Kliniken i Norr",
        "address": [
          "Lövstigen 3"
        ],
        "phone": "099-898989"
      }
    })
  })

  it('Get Clinics', () => {
    cy.request(`${localApiClinics}`).as('clinics')
    cy.get('@clinics').should((response) => {
      expect(response.status).to.eq(200)
      expect(response).to.have.property('headers');
    })

  })

  
  // hsa_id måste vara unikt i tabell
  it('Update a clinic', () => {
    cy.request({
      method: 'PUT',
      url: `${localApiClinics}/1d3e84a9-bd24-4efe-1b5a-08d903203482`,
      body: {
        hsa_id: '15',
        name:'Malmöö',
        phone: '1133',
        address: 'Skogen 3'
      }
    })
  })
  


})

