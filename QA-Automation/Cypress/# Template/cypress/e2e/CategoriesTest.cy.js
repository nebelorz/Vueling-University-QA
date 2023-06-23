import { HomePage } from "../webpages/HomePage";

describe("Category buttons work as intended", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - Category phones, laptops and monitors exist", () => {
    // You could use should or expect to create assertions in Cypress.
    // Using should() in Cypress include a readable and chained syntax, autocompletion and suggestions,
    // handling of failed assertions, integration with Cypress commands, and the ability to cover multiple conditions in a single line.
    homePage.categories.phones().should("be.visible");
    homePage.categories.laptops().should("be.visible");
    homePage.categories.monitors().should("be.visible");

    // Using expect() in Cypress include a familiar syntax for users of popular assertion libraries,
    // a wide range of assertion methods, enhanced error messages, support for negation, and the ability to create custom assertion methods.
    expect(homePage.categories.monitors()).to.exist;
  });
});
