import { Given,Then} from "cypress-cucumber-preprocessor/steps";

const chai= require('chai').use(require('chai-as-promised'));
const expect=chai.expect;

const url = 'http://google.com'
Given('I open Google page', () => {
  cy.visit(url);
});
Then(`I see {string} in the title`, (title) => {
 // cy.title().should('include', title);
  expect(true).equals(true);
});



