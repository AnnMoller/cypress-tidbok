describe('Hantera Invånare', () => {
    beforeEach(()=>{
        cy.visit('http://localhost/');
    
    })

    it("Lista invånare", () => {
        cy.contains('Lista invånare').click();
        cy.get('h1')               
        .should('contain', 'Invånare')
        cy.log(cy.get('tbody').find('tr'))
        cy.get('tbody').find('tr').should('have.length', 2)
        cy.get('tbody').as('residentlist');
        cy.get('tbody > :nth-child(1) > :nth-child(2) > a').click();
    });
});
