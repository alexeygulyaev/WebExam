it('Authorization page', () => {
  cy.visit('https://80.69.180.108:8441/login');
  cy.get('app-cookie-notification .mat-card .clickable-text').click()
  cy.get('.mat-card button[data-cy=acceptCookieButton]').click()
      });