describe("Sapper template app", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("has the correct <h1>", () => {
    cy.contains("Less inflamation.");
  });

  it("navigates to /products", () => {
    cy.get("nav a").contains("Products").click();
    cy.url().should("include", "/products");
  });
});
