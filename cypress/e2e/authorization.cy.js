it('Authorization page', () => {
  cy.visit('https://80.69.180.108:8441/login');
  cy.get('.mat-card button[data-cy=acceptCookieButton]').click()
      });