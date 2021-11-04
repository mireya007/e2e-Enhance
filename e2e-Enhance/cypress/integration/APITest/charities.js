// Test 2. As an API test: Retrieve a list of charities and confirm that St John is included in the list.
describe("Get Request", ()=> {
    var result;
    it("Validate status code of the Charity API", ()=> {
        result = cy.request("https://api.trademe.co.nz/v1/Charities.json");
        result.its("status").should("equal", 200)
    })

    it("Validate /charity api contains the correct keys and values", ()=> {
      cy.request({
          method: "GET",
          url: "https://api.trademe.co.nz/v1/Charities.json",
          headers: {
              accept: "application/json"
          }
      }).then(response => {
          let body =JSON.parse(JSON.stringify(response.body))
          cy.log(body);

          body.forEach(item => {
         cy.log("Description: " + item["Description"]);
        });
      
          cy.wrap(body)
          .should('not.be.empty')
          .then((list) => Cypress._.map(list, 'Description'))
          .should('include', 'St John')

      })
    })


})



