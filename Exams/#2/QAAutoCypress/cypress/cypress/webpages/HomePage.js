export class HomePage {
  // Elements
  cookies = {
    buttonAccept: () => cy.getID("onetrust-accept-btn-handler"),
    buttonClosePromo: () => cy.get(".promo-splash_close"),
  };

  topMenu = {
    buttonMenu: () => cy.get(".hamburger"),
    language: () => cy.getID("menuLanguage"),
    currency: () => cy.getID("menuCurrencies"),
    selectLanguage: (language) => cy.contains(".item-name", language),
  };

  searcher = {
    originAndDestination: {
      buttonOrigin: () => cy.get('[data-testid="stationDeparture"]'),
      searcherInput: () => cy.get("input[formcontrolname]"),
      firstInputSuggestion: () => cy.get('[data-testid="station-arrival-departure-btn-0"]'),
    },
    buttonSubmit: () => cy.get('[data-testid="btn-searcher"]'),
  };

  datepicker = {
    departureDate: () => cy.get('[data-testid="departureDate"]'),
    monthName: () => cy.get("div.mbsc-cal-month"),
    buttonNextMonth: () => cy.get('[aria-label="Next Month"]'),
    availableDays: () => cy.get(".mbsc-cal-slide-a [data-full]").not(".vy-date-disabled"), // Gets all the available dates
    buttonSubmit: () => cy.get("#vy-submit-calendar-button button"),
  };

  pax = {
    paxMenu: () => cy.get('[data-testid="paxSelectorDisplay"]'),
    addAdult: () => cy.get('[data-testid="btn-add-adult"]'),
    adultsNumber: () => cy.get('[data-testid="btn-add-adult"]').parent(),

    addChild: () => cy.get('[data-testid="btn-add-child"]'),
    childsNumber: () => cy.get('[data-testid="btn-add-child"]').parent(),

    addInfant: () => cy.get('[data-testid="btn-add-infant"]'),
    infantsNumber: () => cy.get('[data-testid="btn-add-infant"]').parent(),

    buttonSubmit: () => cy.get('[data-testid="btn-confirm-passengers"] button')
  };

  // Functions
  acceptCookies() {
    this.cookies.buttonAccept().click();
    this.cookies.buttonClosePromo().click();
  }

  selectLanguage(language) {
    this.topMenu.buttonMenu().click();
    this.topMenu.language().click();
    this.topMenu.selectLanguage(language).click();
  }

  selectOriginAndDestination(origin, destination) {
    this.searcher.originAndDestination.buttonOrigin().click();
    cy.url().should("contain", "Departure");
    this.searcher.originAndDestination.searcherInput().first().type(origin);
    this.searcher.originAndDestination.firstInputSuggestion().click();

    cy.url().should("contain", "Arrival");
    this.searcher.originAndDestination.searcherInput().last().type(destination);
    this.searcher.originAndDestination.firstInputSuggestion().click();
  }

  selectDeparture() {
    this.datepicker.departureDate().click();
    cy.url().should("contain", "Calendar");
  }

  pickAvailableDate(month) {
    this.datepicker.monthName().then((getMonthName) => {
      let monthName = getMonthName.text();

      if (monthName !== month) {
        this.datepicker.buttonNextMonth().click();
        cy.wait(1000); // Without the wait, it moves forward one extra month
        return this.pickAvailableDate(month);
      }

      this.datepicker.monthName().invoke("text").should("be.equal", month);
      this.datepicker.availableDays().last().click();
    });
  }

  selectArrival() {
    this.datepicker.buttonNextMonth().click();
    this.datepicker.availableDays().first().click();
    this.datepicker.buttonSubmit().click();
  }

  selectPax() {
    this.pax.paxMenu().click();
    this.pax.addAdult().click();
    this.pax.addAdult().click();
    this.pax.addInfant().click();
    this.pax.buttonSubmit().click();
  }

  clickOnSubmit() {
    this.searcher.buttonSubmit().should("be.visible");
    this.searcher.buttonSubmit().click();
  }
}
