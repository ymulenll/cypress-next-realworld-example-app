/// <reference types="cypress" />

describe("My first test", () => {
  it("test case", () => {
    cy.visit("https://example.cypress.io");

    // cy.pause();

    cy.contains("type").click();

    cy.url().should("include", "/commands/actions");

    cy.get(".action-email")
      .type("fake@email.com")
      .should("have.value", "fake@email.com")
      .and("be.visible");
  });
});
