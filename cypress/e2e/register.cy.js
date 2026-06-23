// register.spec.js
describe("User register", () => {
  it("should allow user to register with valid credentials", () => {
    cy.viewport(550, 750);

    cy.visit("http://localhost:5173/register");
    cy.url().should("include", "/register");

    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Restu Ardiansyah")
      .type("Restu Ardiansyah")
      .should("have.value", "Restu Ardiansyah");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "google@gmail.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "********")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Register").click();

    // cy.get("nav");
    // cy.get("header");

    cy.wait(5000);
  });

  it("should not allow user to register with invalid credentials", () => {
    cy.visit("http://localhost:5173/register");
    cy.url().should("include", "/register");

    cy.get("input#name")
      .should("be.visible")
      .should("have.attr", "placeholder", "Restu Ardiansyah")
      .type("Restu Ardiansyah")
      .should("have.value", "Restu Ardiansyah");

    cy.get("input#email")
      .should("be.visible")
      .should("have.attr", "placeholder", "google@gmail.com")
      .type("hello@example.com")
      .should("have.value", "hello@example.com");

    cy.get("input#password")
      .should("be.visible")
      .should("have.attr", "placeholder", "********")
      .type("123456")
      .should("have.value", "123456");

    cy.get("button").contains("Register").click();

    // cy.get("div").contains("Wrong Password");
  });
});
