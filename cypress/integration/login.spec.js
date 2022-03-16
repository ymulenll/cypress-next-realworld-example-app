/// <reference types="cypress" />

describe("Login test cases", () => {
  it("should display error when credentials are incorrect", () => {
    cy.login({ password: "invalid password" });

    cy.get(".error-messages").contains("email or password is invalid");
  });

  it("should log in successfully when credentials are ok", () => {
    cy.login();

    cy.get('[data-cy="profile-nav"]')
      .should("be.visible")
      .and("contain.text", "commit");
  });
});

describe("Logout test cases", () => {
  it("should log out", () => {
    cy.login();

    cy.get('[data-cy="settings-nav"]').click();
    cy.contains("button", /logout/i).click();

    cy.get('[data-cy="sign-up-nav"]').should("be.visible");
  });
});
