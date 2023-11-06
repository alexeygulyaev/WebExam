it('Authorization page and license', () => {
  cy.visit('/');
  cy.location('pathname').should('eq', '/login')
  cy.wait(2000)
  cy.get('app-cookie-notification .mat-card .clickable-text').click()
  cy.wait(3000)
  cy.get('.mat-card button[data-cy=acceptCookieButton]').click()
});



      