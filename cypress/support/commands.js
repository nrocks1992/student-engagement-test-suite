import { selectors } from './selectors';

Cypress.Commands.add('login', (email, password) => {
  // Visit login page 
  cy.visit('/');

  // Enter credentials
  cy.get(selectors.emailInput).type(email);
  cy.get(selectors.passwordInput).type(password);

  // Click submit button
  selectors.loginButton().click();

  // Verify login success
  cy.contains(`Welcome, ${email}`).should('be.visible');

});
