/// <reference types="cypress" />
describe('', () => {
  const username = 'userName' + Math.floor(Math.random() * 1000);
  const useremail = 'userEmail' + Math.floor(Math.random() * 1000) + '@gmail.com';


  before('', () => {
    cy.visit ('http://localhost:1667/#/');
  });
  it('', () => {
    cy.get(':nth-child(3) > .nav-link').click();
    cy.get(':nth-child(1) > .form-control').type(username);
    cy.get(':nth-child(2) > .form-control').type(useremail);
    cy.get(':nth-child(3) > .form-control').type('Password1!');
    cy.get('.btn').click();
    cy.get('.navbar').contains(username).should('exist');
  });

  // it('', () => {
  //   cy.get(':nth-child(2) > .nav-link').click();
  //   cy.get(':nth-child(1) > .form-control').type('student123@gmail.com');
  //   cy.get(':nth-child(2) > .form-control').type('Students1!');
  //   cy.get('.btn').click();
  //   cy.get('.navbar').contains('student').should('exist');

  // });
});

