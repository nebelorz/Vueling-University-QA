import { ContactPage } from "../webpages/ContactPage";
import { HomePage } from "../webpages/HomePage";

// The "describe" are like test suites, inside you'll keep each test case (it) related
describe("NavBar buttons work as expected", () => {
  // Here you can declare variables to use along the tests
  const homePage = new HomePage();
  const contactPage = new ContactPage();

  // The code inside "before" will run once when the test suite begins
  before(() => {
    cy.log("TEST SUITE STARTS");
  });

  // The code inside "beforeEach" will run every time a test case runs
  beforeEach(() => {
    cy.visit(""); // visits baseUrl every time a test begins
  });

  it("TC 0 - NavBar Home button redirects to landing page", () => {
    homePage.clickOnNavbar(homePage.navbar.home());
    cy.url().should("contain", "index.html");
  });

  it("TC 1 - NavBar Contact button opens the contact form", () => {
    homePage.clickOnNavbar(homePage.navbar.contact());
    contactPage.formButtonSubmit().should("exist").and("be.visible");
  });

  // The code inside "afterEach" will run every time a test case finishes
  /*
  afterEach(() => {
    let screenshotName = "NavbarTests"
    cy.screenshot(`${screenshotName}`);
    cy.addContext("Screenshot taken. You can see it in ./cypress/screenshots");
  });
  */

  // The code inside "after" will run once when the test suite finishes
  after(() => {
    cy.log("TEST SUITE FINISHED");
  });
});
