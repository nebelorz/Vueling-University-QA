// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })../../screenshots/

import addContext from "mochawesome/addContext";

Cypress.Commands.add("addContext", (context) => {
  cy.once("test:after:run", (test) => addContext({ test }, context));
});

// Command 'cy.getId' to search by id in case cy.get doesn't work (?)
Cypress.Commands.add("getID", (id) => {
  cy.get(`#${id}`);
});

// Command to throw an error with given text by parameter
Cypress.Commands.add("error", (text) => {
  throw new Error(text);
});

// Command to make a screenshot and print text by paramater
Cypress.Commands.add("addScreenshotContext", (text) => {
  cy.screenshot();
  cy.addTestContext(text);
});
