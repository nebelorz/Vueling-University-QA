export class STVPage {
  // Elements
  buttonSubmit = () => cy.getID("stvContinueButton");

  flights = {
    vuelingFlightsOutbound: () => cy.get('#outboundFlightCardsContainer [codeshare="VY"]'),
  };

  fares = {
    fare: (fareName) => cy.getID(`${fareName}FareBox`),
  };

  // Functions
  selectFirstVuelingFlight() {
    this.flights.vuelingFlightsOutbound().should("exist");
    this.flights.vuelingFlightsOutbound().first().parent().click();
  }

  selectFare(fareName) {
    this.fares.fare(fareName).should("be.visible");
    this.fares.fare(fareName).click();
  }

  submitSTV() {
    this.buttonSubmit().should("be.enabled");
    this.buttonSubmit().click();
  }
}
