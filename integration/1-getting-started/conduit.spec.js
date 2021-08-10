/// <reference types="cypress" />
describe('', () => {
  before('', () => {
    cy.visit ('http://localhost:1667/#/');
  });

  it('', () => {
    cy.get(':nth-child(2) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type('student123@gmail.com');
    cy.get(':nth-child(2) > .form-control').type('Students1!');
    cy.get('.btn').click();
    cy.get('.navbar').contains('student').should('exist');

  });
});

