import '@4tw/cypress-drag-drop'

describe('Skapa schema', () => {
    it("Skapa ett enkelt scema - lista", () => {
        cy.visit('/');
        cy.contains('Nytt schema').click();
        cy.get('h1')               
        .should('contain', 'Schemaläggning')
        cy.get(':nth-child(1) > .slot-type-card_root__318d3 > .base-event-content_base-event-content__3IKTR > .base-event-content_base-event-content-inner__2OE5L').drag(':nth-child(19) > .fc-timegrid-slot-lane')
    });
});
