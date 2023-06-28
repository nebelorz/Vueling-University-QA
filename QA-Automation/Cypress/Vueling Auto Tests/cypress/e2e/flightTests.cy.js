import { HomePage } from "../webpages/HomePage";
import { PassengersPage } from "../webpages/PassengersPage";
import { STVPage } from "../webpages/STVPage";

describe("Search flight tests", () => {
  const homePage = new HomePage();
  const stvPage = new STVPage();
  const passengersPage = new PassengersPage();
  let data;

  before(() => {
    cy.fixture("flightTestsScenarios").then((flightData) => {
      data = flightData;
    });
  });

  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - BCN/MAD OW 1ADT 1CHD", () => {
    homePage.acceptCookies();
    homePage.switchTripToOW();
    homePage.fillOriginAndDestination(data.origin, data.destination);
    homePage.pickAvailableDate(data.month);
    homePage.selectPax(data.adults, data.childs, data.infants);
    homePage.submitSearch();

    stvPage.selectFirstVuelingFlight();
    stvPage.selectFare(data.fare);
    stvPage.submitSTV();

    passengersPage.fillPax("aa", "bb");
  });
});
