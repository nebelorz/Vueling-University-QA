export class HomePage {
  // Elements
  closeNewsletter = () => cy.get('div [data-fl-track="close-screen-login"]');
  btnAcceptCookies = () => cy.get("#ensCloseBanner");

  searcher = {
    travelType: () => cy.get(".dropdown-title-js"),
    travelTypeOW: () => cy.getId("dropdown-trip"),
    origin: () => cy.get('[data-field="origin"]'),
    destination: () => cy.get('[data-field="destination"]'),
    departureDate: () => cy.get(".departure-date .input-value"),
  };

  datepicker = {};

  // Methods
  acceptCookies() {
    this.btnAcceptCookies().should("be.visible");
    this.btnAcceptCookies().click();
    cy.get("#nav-logo").scrollIntoView();
  }

  selectOW() {
    cy.get("#nav-logo").scrollIntoView();
    this.searcher.travelType().click();
    this.searcher.travelTypeOW().click();
  }

  fillOriginAndDestination() {
    cy.fixture("flightData").then((data) => {
      this.searcher.origin().type(data.origin);
    });
  }
}
