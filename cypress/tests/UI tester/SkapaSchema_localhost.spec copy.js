describe('Skapa schema', () => {
    it("Skapa ett enkelt scema - lista", () => {
        cy.visit('http://localhost:3000');
        cy.contains('Nytt schema').click();
        cy.get('h1')               
        .should('contain', 'Skapa schemaintervall')
        cy.get('[placeholder="Från"]').type('2021-05-15')
        cy.get('[placeholder="Till"]').type('2021-05-15')
        cy.get('[placeholder="Längd (minuter)"]').clear().type('20')
        cy.contains('Spara').click();
        cy.log(cy.get('.table').find('tr'))
        cy.get('.table').find('tr').should('have.length', 25)
    });
});
