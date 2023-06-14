export class ContactPage {
  // Elements
  formEmail = () => cy.get("#recipient-email");
  formName = () => cy.get("#recipient-name");
  formMessageText = () => cy.get("#message-text");
  formButtonSubmit = () => cy.get('[onclick="send()"]');
  formButtonClose = () => cy.contains("button", "Close");

  // Functions
  fillForm() {
    // Using fixtures is considered as best practice.
    // Define scenarios in .json objects and use the data instead of hard-coding it
    cy.fixture("contactFormData").then((data) => {
      this.formEmail().type(data.email);
      this.formName().type(data.username);
      this.formMessageText().type(data.message);
      this.formButtonSubmit().click();
    });
  }
}
