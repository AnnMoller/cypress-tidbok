describe('Skapa schema', () => {
    it("Skapa ett enkelt scema - lista", () => {
        cy.visit('https://schedule-frontendtest.azurewebsites.net');
        cy.contains('Nytt schema').click();
        cy.get('h1')               
        .should('contain', 'Schemaläggning')
    });
});
