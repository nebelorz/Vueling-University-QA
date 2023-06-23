export class HomePage {
  // Elements
  navbar = {
    home: () => cy.contains("a", "Home "), // Gets an element by its text
    contact: () => cy.get('[data-target="#exampleModal"]'), // Gets an element by CSS locators
    aboutUs: () => cy.get('[data-target="#videoModal"]'),
    cart: () => cy.getId("cartur"), // Gets an element by ID using a custom command
    login: () => cy.get("#login2"), // Gets an element by ID
    signUp: () => cy.get("#signin2"),
  };

  categories = {
    container: () => cy.get("#contcont .list-group"),
    phones: () => this.categories.container().get(`[onclick="byCat('phone')"]`), // You can chain .get/.contains with more .get/.contains
    laptops: () => this.categories.container().get(`[onclick="byCat('notebook')"]`),
    monitors: () => this.categories.container().get(`[onclick="byCat('monitor')"]`),
  };
  // Functions
  clickOnNavbar(button) {
    button.should("exist").and("be.visible"); // Before clicking on the element, assert if it exists and it's visible
    button.click();
  }

  clickOnCategory(category) {
    category.should("exist").and("be.visible");
    category.click();
  }
}
