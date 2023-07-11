import { HomePage } from "../webpages/HomePage";
import { STVPage } from "../webpages/STVPage";
import { fares } from "../support/enum";
import { PassengersPage } from "../webpages/PassengersPage";

describe("Search flights tests", () => {
  const homePage = new HomePage();
  const stvPage = new STVPage();
  const passengersPage = new PassengersPage();
  let flightData;

  before(() => {
    cy.fixture("flightData").then((data) => {
      flightData = data;
    });
  });
  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - RT BCN/BEY 2ADT 1IFT ", () => {
    homePage.acceptCookies();
    homePage.selectLanguage(flightData.language);
    homePage.selectOriginAndDestination(flightData.origin, flightData.destination);
    homePage.selectDeparture();
    homePage.pickAvailableDate(flightData.departureMonthName);
    homePage.selectArrival();
    homePage.selectPax(flightData.adults, flightData.childs, flightData.infants)
    homePage.clickOnSubmit();

    stvPage.selectFlight();
    stvPage.selectFlight();
    stvPage.selectFare(fares.Basic)

    passengersPage.fillPaxForm()
  });
});
