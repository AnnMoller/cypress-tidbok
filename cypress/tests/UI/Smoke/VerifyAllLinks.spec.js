describe('Smoke', () => {
    it("Verify links and labels", () => {
       // cy.visit('https://schedule-frontendtest.azurewebsites.net');
        cy.visit(`${Cypress.env("localBaseUrl")}`);
       
        cy.contains('Nytt schema').click();
        cy.get('h1')               
        .should('contain', 'Schemaläggning');

        cy.contains('Lista möten').click();
        cy.get('h1')               
        .should('contain', 'Bokningslista');

        cy.contains('Lista invånare').click();
        cy.get('h1')               
        .should('contain', 'Invånare');

        cy.contains('Ny invånare').click();
        cy.get('h1')               
        .should('contain', 'Ny invånare');

    
    });
});
