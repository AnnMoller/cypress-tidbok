const localApiClinics = `${Cypress.env("localApiUrl")}`;
const azureApiClinics = `${Cypress.env("azureApiUrl")}/Clinics`;
const apiUrl = `${Cypress.env("apiUrl")}`;
const randomClinicId = Cypress.clinicId()

describe('API Slot Types', () => {
    beforeEach(() => {
        cy.visit(`${apiUrl}`);
        // cy.createClinic('Malmö');
    })


    // Fetch Clinics
    it('Create a clinic and add a alot type', function() {
        cy.request('GET', `${apiUrl}`).as('clinic1');

        cy.get('@clinic1').should((response) => {
                expect(response.status).to.eq(200);
            })

        cy.request('POST', `${apiUrl}/Clinics`, {
                hsa_id: randomClinicId,
                name: 'Kliniken i Norr',
                address: ['Gatan 223'],
                phone: '099-898989'
            })
            .as('Clinic')
     
        cy .then(() => {
            cy.log(this.Clinic.body.id)
            cy.request('POST', `${apiUrl}/${this.Clinic.body.id}/SlotTypes`, {
                        name: 'Vuxen med hinder',
                        duration: 'PT10M',
                        is_visible_for_residents: true,
                        color: 'gul'
            })
            .as('slotType');
                    
        })

        cy.get('@slotTypes').should((response) => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                expect(response.body.results[0].name).to.eq("Vuxen med hinder");
               })
            
            
    })
})

//UPDATE
//http://localhost:5000/clinics/a4d02e35-cca0-4a72-a0f9-08d904dbdf0b/SlotTypes/261b7cf1-ab23-4cd5-0b84-08d904cda464

// DELETE
//http://localhost:5000/clinics/a4d02e35-cca0-4a72-a0f9-08d904dbdf0b/SlotTypes/261b7cf1-ab23-4cd5-0b84-08d904cda464

        /*
    it('Get Slot types', function() {
        cy.request(`${apiUrl}/Clinics/${this.Clinic.body.id}/SlotTypes`).as('slotTypes');
            cy.get('@slotTypes').then((response) => {
                expect(response.status).to.eq(200)
                expect(response).to.have.property('headers')
                expect(response.body.results[0].name).to.eq("Vuxen med hinder");
               })
           })
        })

        */
    
