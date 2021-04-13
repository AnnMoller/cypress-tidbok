describe('My First Test', () => {
    it('Search weather!', () => {
      cy.visit('/')
      cy.get('#page-header__search-button').click(focus)
      cy.get('#page-header__search-input').type('Helsingborg')
      cy.get(':nth-child(5) > .search__suggested-link ')
      .click()
      cy.get('h1')               
      .should('contain', 'Helsingborg')
 
    })

  })