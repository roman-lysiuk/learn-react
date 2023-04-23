/// <reference types="Cypress" />
describe('Form page', () => {
  it('clicks the link "Form" and navigates to a new url', () => {
    cy.visit('');
    cy.contains('Form').click();
    cy.url().should('include', '/form');
  });
  it('Fill out the form and send', () => {
    cy.visit('');
    cy.contains('Form').click();
    cy.get('#firstName').type('Frodo');
    cy.get('#birthday').type('2000-07-22');
    cy.get('select').select('England');
    cy.get('[type="radio"]').last().check();
    cy.get('#agreeData').check();
    cy.get('form').submit();
    cy.contains('Your data has been saved!');
    cy.get('.card-list').children().should('have.length', 1);
  });
  it('Generate five user cards', () => {
    cy.visit('');
    cy.contains('Form').click();

    const genArr = Array.from({ length: 5 }, (v, k) => k + 1);
    cy.wrap(genArr).each(() => {
      cy.get('#firstName').type('Frodo');
      cy.get('#birthday').type('2000-07-22');
      cy.get('select').select('England');
      cy.get('[type="radio"]').last().check();
      cy.get('#agreeData').check();
      cy.get('form').submit();
      cy.contains('Your data has been saved!');
    });

    cy.get('.card-list').children().should('have.length', 5);
  });
  it('Validate Error message', () => {
    cy.visit('');
    cy.contains('Form').click();
    cy.get('#birthday').type('2023-07-22');
    cy.get('form').submit();
    cy.contains('At least 5 years ago');
    cy.contains('This field is required');
    cy.get('#firstName').type('frodo');
    cy.get('form').submit();
    cy.contains('Lower case name');
    cy.get('#firstName').clear();
    cy.get('#firstName').type('fr');
    cy.get('form').submit();
    cy.contains('Minimum length characters 3');
  });
});
