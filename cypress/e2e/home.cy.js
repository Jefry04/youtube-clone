/* eslint-disable no-undef */

describe('e2e home page test', () => {
  beforeEach(() => {
    cy.visit('https://youtubetopv22.netlify.app/');
    cy.viewport(1280, 720);
  });
  it('should display Header', () => {
    cy.get('.header').should('have.length', 1);
  });

  it('allow to search video', () => {
    cy.get(`[data-cy="search-video"]`)
      .type('Tecnologia', { force: true })
      .should('have.value', 'Tecnologia');
    // tiene que existir un video con esta palabra
    cy.contains('Iphone');
  });

  it('display dropdown from icon profile', () => {
    cy.get(`[data-cy="profile-icon"]`).click({ force: true });
    cy.contains('Iniciar Sesión');
  });

  it('show login form', () => {
    cy.get(`[data-cy="profile-icon"]`)
      .click({ force: true })
      .get("div[role='menu']")
      .find("button[role='menuitem']")
      .eq(1)
      .click({ force: true });
    cy.contains('Login');
  });
});
