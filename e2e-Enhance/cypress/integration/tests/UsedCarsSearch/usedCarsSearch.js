// Test 1: Using the TradeMe Sandbox web site, write automation code which does the following:
// As a Web UI test: Query any existing Used Car listing and confirm that the following details
// are shown for that car:
//     Number plate
//      Kilometres
//      Body
//      Seats


import TrademeHomePage from "../../pageobject/trademeHome";

Given("I am in Trademe home page", () => {
  cy.visit("http://www.tmsandbox.co.nz");
  cy.get(TrademeHomePage.img_logo).should("be.visible");
});

And("I click in the search bar {string}", (name) => {
  TrademeHomePage.clickInCategory(name);
});

And("I click in {string} link", (name) => {
  TrademeHomePage.clickLink(name);
});

Then("I should see the Used Cars page", () => {
  cy.url().should("eq", "https://www.tmsandbox.co.nz/motors/used-cars");
});

And("I select the second last car", () => {
  TrademeHomePage.selectSecondLastCar();
});

And("I select the last car", () => {
    TrademeHomePage.selecLastCar();
  });
  
// eslint-disable-next-line no-undef
And("I verify the following data exist", (table) => {

  for (let data of table.rows()) {
    let i = 0;

    TrademeHomePage.checkExistingValue(data[i]);
    i++;
  }
});

