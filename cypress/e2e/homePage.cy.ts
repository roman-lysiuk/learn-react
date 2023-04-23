/// <reference types="Cypress" />
/* eslint-disable cypress/no-unnecessary-waiting */
describe('Home page', () => {
  it('Visits the localhost', () => {
    cy.visit('');
  });

  it('finds the content "Search"', () => {
    cy.visit('');
    cy.contains('Search');
  });

  it('clicks the link "About us"', () => {
    cy.visit('');
    cy.contains('About us').click();
  });

  it('clicking "About us" navigates to a new url', () => {
    cy.visit('');

    cy.contains('About us').click();

    cy.url().should('include', '/about');
  });

  it('Search by name Frodo"', () => {
    cy.visit('');
    cy.get('.search').type('Frodo');
    cy.contains('Search').click();
    cy.get('.character-list').children().should('have.length', 2);
    cy.contains('Frodo Gardner');
    cy.contains('Frodo Baggins').click();
  });

  it('Click by name Frodo for view detail modal"', () => {
    cy.visit('');
    cy.get('.search').type('Frodo');
    cy.contains('Search').click();
    cy.contains('Frodo Baggins').click();
    cy.contains('Race: Hobbit');
    cy.contains('Gender: Male');
    cy.contains('Birth - 22 September ,TA 2968');
    cy.contains('Birth - 22 September ,TA 2968');
    cy.contains('Hair: Brown');
    cy.contains('wikiUrl: http://lotr.wikia.com//wiki/Frodo_Baggins');
    cy.contains('Death - Unknown (Last sighting ,September 29 ,3021,) (,SR 1421,)');
  });
  it('Open and close modal"', () => {
    cy.visit('');
    cy.get('.search').type('Frodo');
    cy.contains('Search').click();
    cy.contains('Frodo Baggins').click();
    cy.get('div').should('have.class', 'modal').and('have.class', 'active');
    cy.get('.close-icon img').click();
  });
  it('api latency check and Loader', () => {
    cy.visit('http://localhost:3000');
    cy.intercept('http://localhost:3000', { delay: 2000 }).as('getData');
    cy.get('.loader');
    cy.wait(1000);
    cy.get('body').not('.loader');
  });
  it('Error Api Message', () => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/character/?limit=1000', (req) => {
      req.reply({
        statusCode: 404,
      });
    }).as('getData');
    cy.visit('http://localhost:3000');
    cy.wait('@getData', { requestTimeout: 1000 });
    cy.contains('Error: loading character cards');
    cy.contains('Nothing found');
  });
  it('Error Api Message for search id', () => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/character/5cd99d4bde30eff6ebccfbbe', (req) => {
      req.reply({
        statusCode: 404,
      });
    }).as('getData');

    cy.visit('http://localhost:3000');
    cy.contains('Adanel').click();
    cy.wait('@getData', { requestTimeout: 1000 });
    cy.get('div').should('have.class', 'modal').and('have.class', 'active');
    cy.contains('Error: loading character card');
  });
  it('Error Api Message for search name', () => {
    cy.intercept('GET', 'https://the-one-api.dev/v2/character/?name=/Adanel/i', (req) => {
      req.reply({
        statusCode: 404,
      });
    }).as('getData');
    cy.visit('http://localhost:3000');
    cy.get('.search').type('Adanel');
    cy.contains('Search').click();
    cy.wait('@getData', { requestTimeout: 1000 });
    cy.contains('Error: loading character cards');
    cy.contains('Nothing found');
  });
});
