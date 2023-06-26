import { HomePage } from "../webpages/HomePage";

describe("Search flight tests", () => {
  const homePage = new HomePage();

  beforeEach(() => {
    cy.visit("");
  });

  it("TC 0 - BCN/MAD OW 1ADT", () => {
    homePage.acceptCookies();
    homePage.switchTripToOW();
    homePage.fillOriginAndDestination("BCN", "MAD");
    homePage.pickAvailableDate();
    homePage.selectPax(3, 3, 2);
    homePage.submitSearch();
  });
});
