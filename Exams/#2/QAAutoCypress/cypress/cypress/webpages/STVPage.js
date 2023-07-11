export class STVPage {
  // Elements
  noFlightsFound = () => cy.get(".no-flights .no-flights-image");
  modalLoading = () => cy.getID("mat-dialog-3");
  modalShortTimeBetweenFlights = () => cy.getID("mat-dialog-8");
  buttonAcceptModalShortTimeBetweenFlights = () => cy.get('[data-testid="dialog-button-alt"]');

  scrollViewAirports = {
    flightDate: () => cy.get(".cdk-virtual-viewport .date-content").not(".no-flights"),
    selectedBox: () => cy.get(".date-box .active"),
  };

  STV = {
    flightCard: () => cy.get("body .flight-cards"),
  };

  fares = {
    fare: () => cy.get(".ng-star-inserted button"),
  };

  // Functions
  selectFlight() {
    this.scrollViewAirports.selectedBox().should("be.visible");

    cy.get("body").then(($body) => {
      if ($body.find(".no-flights .no-flights-image").length > 0) {
        this.scrollViewAirports.flightDate().first().click();
        return this.selectFlight();
      } else {
        this.STV.flightCard().should("be.visible");
        this.STV.flightCard().click();
      }
    });
  }

  selectFare(fare) {
    cy.url().should("contain", "PushTo");
    this.fares.fare().eq(fare).click();
  }
}
