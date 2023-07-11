export class PassengersPage {
  // Elements
  buttonContinueWithoutRegister = () => cy.get('[data-testid="btn-skip"]');
  buttonSubmit = () => cy.get(".cta button");

  paxForm = {
    adult1Name: () => cy.getID("mat-input-6"),
    adult1Lastname: () => cy.getID("mat-input-5"),

    adult2Name: () => cy.getID("mat-input-19"),
    adult2Lastname: () => cy.getID("mat-input-18"),

    infantName: () => cy.getID("mat-input-16"),
    infantLastname: () => cy.getID("mat-input-14"),
  };

  contactForm = {
    name: () => cy.getID("mat-input-20"),
    lastname: () => cy.getID("mat-input-8"),
    country: () => cy.getID("mat-input-9"),
    prefix: () => cy.getID("mat-input-10"),
    phone: () => cy.getID("mat-input-11"),
    email: () => cy.getID("mat-input-12"),
  };

  // Functions
  skipRegister() {
    this.buttonContinueWithoutRegister.click();
  }

  fillPaxForm() {
    cy.fixture("paxData").then((data) => {
      this.paxForm.adult1Name().type(data.adult1.name);
      this.paxForm.adult1Lastname().type(data.adult1.lastname);

      this.paxForm.adult2Name().type(data.adult2.name);
      this.paxForm.adult2Lastname().type(data.adult2.lastname);

      this.paxForm.infantName().type(data.infant.name);
      this.paxForm.infantLastname().type(data.infant.lastname);
    });
  }

  fillContactForm() {
    // TODO
  }
}
