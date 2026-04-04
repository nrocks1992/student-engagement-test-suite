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

    // Verify login success
    cy.contains(`Welcome, ${input.email}`).should('be.visible');

    // Logout
    cy.get(selectors.logoutButton).click();

    // Verify return to login page
    selectors.loginButton().should('be.visible');  
  });

  // --- TC02: Invalid Login ---
  it('Should display error message for invalid login credentials', () => {
    // Attempt to login with invalid credentials
    cy.login('invalid@example.com', '1234');

    // Verify error message is displayed
    cy.get(selectors.errorMessage).should('be.visible')
    .should('contain', 'Password must be at least 6 characters');
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

  // --- TC04: Add Invalid Activity ---
  it('Should show validation error when adding an activity with missing fields', () => {
    // Log in first
    cy.login(input.email,input.password);
    
    // Attempt to add an activity with missing name
    cy.get(selectors.activityPointsInput).click()
    cy.get(selectors.activityPointsInput).type('5');
    cy.get(selectors.activityStatusSelect).select('Completed');
    selectors.addActivityButton().click();

    // Verify validation error is displayed
    cy.get(selectors.formError).should('be.visible')
      .should('contain', 'Please enter a valid name and non-negative points');
  });

  // --- TC05: Filter Activities ---
  it('Should filter activities based on status', () => {
    // Log in first
    cy.login(input.email,input.password);

    //Verify three activities are present before filtering
    cy.get(selectors.activityList).should('contain', 'Career Fair');
    cy.get(selectors.activityList).should('contain', 'Hack Night');
    cy.get(selectors.activityList).should('contain', 'Orientation');

    // Select "Planned" from the status filter
    cy.get(selectors.filterStatus).select('Planned');

    //Verify that only Hack Night is visible after filtering
    cy.get(selectors.activityList).should('contain', 'Hack Night');
    cy.get(selectors.activityList).should('not.contain', 'Career Fair');
    cy.get(selectors.activityList).should('not.contain', 'Orientation');
  });
    

  // --- TC06: Sort Activities ---

  // --- TC07: Toggle/Delete Activity ---

});
