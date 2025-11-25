import { selectors } from '../support/selectors';

const input = {
  email: 'student@example.com',
  password: 'password123',
};

describe('Sample smoke test', () => {

  it('Loads the login page', () => {
    cy.visit('/');
    cy.contains('Student Engagement Portal');
  });

      // --- TC01: Login / Logout ---
  it('Should log in with valid credentials and log out successfully', () => {
    // Login
    cy.login(input.email,input.password);

    // Logout
    cy.get(selectors.logoutButton).click();

    // Verify return to login page
    selectors.loginButton().should('be.visible');  
  });

  // --- TC03: Add Activity ---
  it('Should allow adding a valid activity', () => {
    // Log in first
    cy.login(input.email,input.password);

    // Add a new activity
    cy.get(selectors.activityNameInput).type('Volunteering');
    cy.get(selectors.activityPointsInput).click()
    cy.get(selectors.activityPointsInput).type('10');
    cy.get(selectors.activityStatusSelect).select('Planned');
    selectors.addActivityButton().click();

    // Verify activity appears in the list
    cy.get(selectors.activityList)
      .should('contain', 'Volunteering')
      .and('contain', '10')
      .and('contain', 'Planned');
  });

});
