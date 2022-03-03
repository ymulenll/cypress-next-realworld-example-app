describe("Article tests", () => {
  it("should create new article", () => {
    // intercepta la llamada a la api que trae los articles
    // y retorna los datos del archivo cypress/fixtures/articles.json
    cy.intercept("GET", "**/api/articles*", { fixture: "articles.json" }).as(
      "GetArticles"
    );

    cy.login("commit");

    // espera que se llame el interceptor
    cy.wait("@GetArticles");
  });
});
