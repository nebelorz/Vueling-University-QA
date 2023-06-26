export class HomePage {
  // Elements

  buttonCookiesAccept = () => cy.getID("onetrust-accept-btn-handler");
  buttonSubmit = () => cy.getID("AvailabilitySearchInputSearchView_btnClickToSearchNormal");

  searcher = {
    buttonOW: () => cy.get('[for="AvailabilitySearchInputSearchView_OneWay"]'),

    originInput: () => cy.getID("AvailabilitySearchInputSearchView_TextBoxMarketOrigin1"),
    originDropdown: () => cy.getID("stationsList li"),

    destinationInput: () => cy.getID("AvailabilitySearchInputSearchView_TextBoxMarketDestination1"),
    destinationDropdown: () => cy.get(".destinationList li"),
  };

  datepicker = {
    leftMonth: () => cy.get(".ui-datepicker-group-first"),
    buttonNextMonth: () => cy.get(".ui-datepicker-next"),
    availableDays: () => cy.get('[data-handler="selectDay"]'),
  };

  paxMenu = {
    adultsSelect: () => cy.getID("adtSelectorDropdown"),
    childsSelect: () => cy.getID("AvailabilitySearchInputSearchView_DropDownListPassengerType_CHD"),
    infantsSelect: () =>
      cy.getID("AvailabilitySearchInputSearchView_DropDownListPassengerType_INFANT"),
  };

  // Functions
  acceptCookies() {
    this.buttonCookiesAccept().should("be.visible").click();
  }

  switchTripToOW() {
    this.searcher.buttonOW().should("be.visible").click();
  }

  fillOriginAndDestination(origin, destination) {
    this.searcher.originInput().should("be.visible");
    this.searcher.originInput().clear().type(origin);
    this.searcher.originDropdown().first().click();

    this.searcher.destinationInput().should("be.visible");
    this.searcher.destinationInput().clear().type(destination);
    this.searcher.destinationDropdown().first().click();
  }

  pickAvailableDate() {
    this.datepicker.leftMonth().should("be.visible");
    this.datepicker.availableDays().eq(1).click();
  }

  selectPax(adults, childs, infants) {
    this.paxMenu.adultsSelect().select(adults, { force: true });
    this.paxMenu.childsSelect().select(childs);
    this.paxMenu.infantsSelect().select(infants);
  }

  submitSearch() {
    this.buttonSubmit().click();
  }
}
