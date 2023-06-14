import { HomePage } from "../webpages/HomePage";

describe("Searcher Tests", () => {
  const homePage = new HomePage();

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
    //homePage.selectOW();
    //homePage.fillOriginAndDestination();
  });
});
