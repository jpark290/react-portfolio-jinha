// client/cypress/e2e/portfolio.cy.js

describe('Portfolio E2E', () => {
  it('navigates from Home to Projects page', () => {

    cy.visit('http://localhost:5173/');

    cy.contains('Projects').click();

    cy.url().should('include', '/projects');

    cy.contains(/projects/i).should('be.visible');
  });
});
