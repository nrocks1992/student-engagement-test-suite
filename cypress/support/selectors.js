export const selectors = {
  // Login page
  emailInput: '#email',
  passwordInput: '#password',
  loginButton: () => cy.contains('button', 'Sign In'),
  logoutButton: '#logout',
  errorMessage: '#loginError',

  // Dashboard 
  activityNameInput: '#actName',
  activityPointsInput: '#actPoints',
  activityStatusSelect: '#actStatus',
  addActivityButton: () => cy.contains('button', 'Add'),
  activityList: '#list',
  formError: '#formError',

  //Activities
  filterStatus: '#filterStatus',
  sortPointsButton: '#sortPoints',
  toggleStatusButton: '#toggleStatus',
  deleteActivityButton: '#deleteActivity'
};