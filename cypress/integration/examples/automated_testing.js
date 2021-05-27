describe('Automated testing', function(){
  it('Visit the page', function() {
    cy.visit('http://127.0.0.1:3000/')
  })
  
  it('Search total movies in the given country', function() {
    // country input test
    cy.get('#searchbar-country')
    .type('Mexico')
    cy.get('#country-bttn').click()
    cy.get('#total-country').should('have.text', '65')
  })

  it('Search total tv shows in the given year', function() {  
    // cyear input test
    cy.get('#searchbar-year')
    .type('2005')
    cy.get('#year-bttn').click()
    cy.get('#total-year').should('have.text', '12')
  })

  it('Search tv show details', function() {
    cy.get('#searchbar')
    .type('3%')
    cy.get('#searchType').select('tv show')
    cy.get('#search-bttn').click()
    cy.get('.title').should('have.text','3%')
  })
})