// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add(
  "login",
  ({ email = "commit@studio.com", password = "commit" } = {}) => {
    cy.visit("/");

    cy.contains("Sign in").click();

    cy.get('[data-cy="email-input"]').type(email);
    cy.get('[data-cy="password-input"]').type(password + "{enter}");
    // alternativa cy.get('[data-cy="login-form"]').submit();
  }
);

Cypress.Commands.add("loginApi", () => {
  const user = { email: "commit@studio.com", password: "commit" };

  cy.session(user, () => {
    cy.request("POST", "https://conduit.productionready.io/api/users/login", {
      user,
    }).then((response) => {
      localStorage.setItem("user", JSON.stringify(response.body.user));
    });
  });
});

Cypress.Commands.add("getBySel", (selector, ...args) => {
  return cy.get(`[data-cy=${selector}]`, ...args);
});
