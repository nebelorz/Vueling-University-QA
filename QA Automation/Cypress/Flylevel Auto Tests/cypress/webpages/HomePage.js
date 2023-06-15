import { paxEnum } from "../support/enums";

export class HomePage {
  // Elements
  closeNewsletter = () => cy.get('div [data-fl-track="close-screen-login"]');
  btnAcceptCookies = () => cy.get("#ensCloseBanner");

  searcher = {
    searcherContainer: () => cy.getId("searcher-block"),
    travelType: () => cy.get('[data-target="dropdown-trip"]'),
    travelTypeOW: () => cy.getId("dropdown-trip"),
    origin: () => cy.get('[data-field="origin"]'),
    originList: () => cy.get(".origin .group-info:not(.hidden)"),
    destination: () => cy.get('[data-field="destination"]'),
    destinationList: () => cy.get(".destination .group-info:not(.hidden)"),
    departureDate: () => cy.get(".departure-date .input-value"),
    paxDropdown: () => cy.get(".searcher-passengers"),
    btnSubmit: () => cy.get("#searcher_submit_buttons"),
  };

  datepicker = {
    switchTripToOW: () => cy.get('.switch-position [value="RT"]'),
    switchTripToRT: () => cy.get('.switch-position [value="OW"]'),
    months: () => cy.get("span.month"),
    arrowNextMonth: () => cy.get("button.datepicker__next-action"),
    availableDays: () => cy.get(".is-available:not(.is-previous-month"),
  };

  paxMenu = {
    paxCount: (pax) => cy.get(`[data-field="${pax}"] .js-pax-count`),
    paxPlusIcon: (pax) => cy.get(`[data-field="${pax}"] .js-plus`),
    btnSubmit: () => cy.get("button.btn-pax"),
  };

  // Methods
  acceptCookies() {
    this.btnAcceptCookies().should("be.visible");
    this.btnAcceptCookies().click();
  }

  fillOriginAndDestination(origin, destination) {
    this.searcher.origin().type(origin);
    this.searcher.originList().first().should("be.visible");
    this.searcher.originList().first().click();

    this.searcher.destination().type(destination);
    this.searcher.destinationList().first().should("be.visible");
    this.searcher.destinationList().first().click();
  }

  switchTripToOW() {
    this.datepicker.switchTripToOW().click();
    Cypress.on("uncaught:exception", (err, runnable) => {
      return false;
    });
  }

  selectMonthInCalendar(month) {
    this.datepicker.months().should("be.visible");

    this.datepicker
      .months()
      .invoke("text")
      .then((monthName) => {
        Cypress.on("uncaught:exception", (err, runnable) => {
          return false;
        });

        if (monthName !== month) {
          this.datepicker.arrowNextMonth().click();
          return this.selectMonthInCalendar(month);
        }

        cy.scrollTo("top");
      });
  }

  selectFirstDayAvailable() {
    this.datepicker.availableDays().first().click();
  }

  addPax(pax, number) {
    this.paxMenu.paxCount(pax).then((paxElement) => {
      const paxNumber = paxElement.text();

      if (paxNumber !== number) {
        this.paxMenu.paxPlusIcon(pax).first().click();
        this.addPax(pax, number);
      }
    });
  }

  selectPax(numAdults, numChilds, numInfants) {
    this.searcher.paxDropdown().click();
    this.addPax(paxEnum.Adult, numAdults);
    this.paxMenu.paxCount(paxEnum.Adult).should("have.text", numAdults);
    this.addPax(paxEnum.Child, numChilds);
    this.paxMenu.paxCount(paxEnum.Child).should("have.text", numChilds);
    this.addPax(paxEnum.Infant, numInfants);
    this.paxMenu.paxCount(paxEnum.Infant).should("have.text", numInfants);
    this.paxMenu.btnSubmit().click();
  }

  submitSearch() {
    this.searcher.btnSubmit().click();
  }
}
