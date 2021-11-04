export default class TrademeHomePage {
  static img_logo = '[id="SiteHeader_SiteTabs_kevin"]';
  static arrow_allCategories = '[id="SearchType"]';
  static search = "#generalSearch > .field-right > .btn";
  static used_cars_link =
    ":nth-child(1) > .motors-landing-list > :nth-child(1) > h2 > a";
    static key_details = '[id="AttributesDisplay_attributesSection"]'
  static car_list = '[id="ListViewList"]';
  static car_description = '[id="AttributesDisplay_attributesSection"] > ul'

  static dropdownSelector(selectedItem) {
    cy.get(this.arrow_allCategories)
      .select(selectedItem)
      .each(($el) => {
        const text = $el.text();
        if (text == selectedItem) {
          cy.wrap($el).click();
          return false;
        }
      });
  }

  static clickInCategory(name) {
    cy.get(this.arrow_allCategories).select(name);
    cy.get(this.search).click();
  }

  static clickLink(name) {
    cy.get(this.used_cars_link)
      .should("have.attr", "href")
      .should("eq", "/motors/used-cars")
      .then(() => {
        cy.get(this.used_cars_link).click();
      });
  }

  static selectSecondLastCar() {
    cy.get(this.car_list)
      .find("li")
      .then((li) => {
        const listingCount = Cypress.$(li).length;
        expect(li).to.have.length(listingCount);
        cy.get(li).eq(listingCount - 2 ).click()    
      });

  }


  static selecLastCar() {
    cy.get(this.car_list)
      .find("li")
      .then((li) => {
        const listingCount = Cypress.$(li).length;
        expect(li).to.have.length(listingCount);
        cy.get(li).eq(listingCount - 1).click()    
      });

  }
  
    
static checkExistingValue(labelText) {
  cy.get(this.car_description).each(($el) => {
    const text = $el.text();

    if (text.includes(labelText)) {

      cy.log(` ${labelText} exist ...`);

    } else {


      cy.log(`**${labelText} doesn't exist ...**`).then(()=> {
        expect($el.text()).to.contain(labelText);
      });
    

    }
      
  });
}


}

