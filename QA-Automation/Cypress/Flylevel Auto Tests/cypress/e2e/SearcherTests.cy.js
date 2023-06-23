import { HomePage } from "../webpages/HomePage";

describe("Searcher Tests", () => {
  const homePage = new HomePage();
  let data;

  before(() => {
    cy.fixture("flightData").then((jsonData) => {
      data = jsonData;
    });
  });

  beforeEach(() => {
    cy.visit("", {
      headers: {
        accept: "application/json, text/plain, */*",
        "user-agent": "axios/0.27.2",
      },
    });
  });

  it("OW BCN-EZE 2ADT 1INF", () => {
    homePage.acceptCookies();
    homePage.fillOriginAndDestination(data.origin, data.destination);
    // cy.screenshot("SS_AFTER_FLIGHT_SELECTION");
    homePage.searcher.searcherContainer().screenshot("SS_AFTER_FLIGHT_SELECTION");
    homePage.switchTripToOW();
    homePage.selectMonthInCalendar(data.month);
    // cy.screenshot("SS_AFTER_DATEPICKER_SELECTION");
    homePage.searcher.searcherContainer().screenshot("SS_AFTER_DATEPICKER_SELECTION");
    homePage.selectFirstDayAvailable();
    homePage.selectPax(data.adults, data.childs, data.infants);
    // cy.screenshot("SS_AFTER_PAX_SELECTION");
    homePage.searcher.searcherContainer().screenshot("SS_AFTER_PAX_SELECTION");
    homePage.submitSearch();
  });

  after(() => {
    cy.screenshot("SS_TEST_FINISHED")
  })
});
