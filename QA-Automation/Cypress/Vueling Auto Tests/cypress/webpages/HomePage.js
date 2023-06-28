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
    leftMonth: () => cy.get(".ui-datepicker-group-first .ui-datepicker-month"),
    buttonNextMonth: () => cy.get(".ui-datepicker-next"),
    availableDays: () => cy.get('[data-handler="selectDay"]'),
  };

  paxMenu = {
    adultsClickSelect: () => cy.getID("DropDownListPassengerType_ADT_PLUS"),
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

  pickAvailableDate(month) {
    this.datepicker.leftMonth().should("be.visible");
    this.datepicker.leftMonth().then((getMonthName) => {
      const monthName = getMonthName.text();

      if (monthName !== month) {
        this.datepicker.buttonNextMonth().click();
        return this.pickAvailableDate(month);
      }

      this.datepicker.leftMonth().invoke("text").should("be.equal", month);
      this.datepicker.availableDays().eq(1).click();
    });
  }

  selectPax(adults, childs, infants) {
    this.paxMenu.adultsClickSelect().click();
    this.paxMenu.adultsSelect().select(adults);
    this.paxMenu.childsSelect().select(childs);
    this.paxMenu.infantsSelect().select(infants);
  }

  submitSearch() {
    this.buttonSubmit().click();
  }
}
