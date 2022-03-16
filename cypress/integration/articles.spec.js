/// <reference types="cypress" />

describe("Create article", () => {
  it("should create article", () => {
    cy.intercept("GET", "**/articles*", {
      body: { articles: [], articlesCount: 0 },
    }).as("GetInitialArticles");

    cy.loginApi();
    cy.visit("/");

    cy.wait("@GetInitialArticles");

    cy.contains(".article-preview", /no articles/i);

    cy.get('[data-cy="nav-new-post"]').click();

    // cy.get('[data-cy="title-input"]').type("New article");
    cy.getBySel("title-input").type("New article");
    cy.get('[data-cy="about-input"]').type("Testing cypress");
    cy.get('[data-cy="body-input"]').type("*Título*");
    cy.get('[data-cy="tags-input"]').type("cypress{enter}testing{enter}");

    cy.intercept("POST", "**/articles", { fixture: "newArticle.json" }).as(
      "CreateArticle"
    );
    cy.intercept("GET", "**/articles*", {
      fixture: "articles.json",
    }).as("GetNewArticles");

    cy.get('[data-cy="submit-article-button"]').click();
    cy.wait(["@CreateArticle"]);

    cy.get('[data-cy="profile-nav"]').click();
    cy.wait(["@GetNewArticles"]);

    cy.get(".article-preview").should("contain.text", "New article");
  });
});
