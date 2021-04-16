describe('Skapa schema', () => {
    it("Skapa ett enkelt scema", () => {
        cy.visit('https://schedule-frontendtest.azurewebsites.net');
        cy.contains('Nytt schema').click();
        cy.get('h1')               
        .should('contain', 'Skapa schemaintervall')
        cy.get('[placeholder="Från"]').type('2021-04-15')
        cy.get('[placeholder="Till"]').type('2021-04-21')
        cy.get('[placeholder="Längd (minuter)"]').clear().type('11')
        cy.contains('Spara').click();
        cy.log(cy.get('.datatable').find('tr'))
        cy.get('.datatable').find('tr').should('have.length', 4)
    });
});
