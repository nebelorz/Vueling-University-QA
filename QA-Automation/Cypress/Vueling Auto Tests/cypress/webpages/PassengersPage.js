export class PassengersPage {
  // Elements
  pax = {
    name: () => cy.get("#passengersInformationBox .js_firstname"),
    lastname: () => cy.get("#passengersInformationBox .js_lastname"),
  };

  // Functions
  fillADTAndCHD(ADTname, ADTlastname, CHDname, CHDlastname) {
    this.pax.name().first.should("be.visible");
    this.pax.name().first().type(ADTname);
    this.pax.lastname().first().type(ADTlastname);

    this.pax.name().last.should("be.visible");
    this.pax.name().last().type(CHDname);
    this.pax.lastname().last().type(CHDlastname);
  }
}
