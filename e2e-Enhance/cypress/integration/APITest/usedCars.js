// Test 3. As an API test: Perform the same query and checks as the Web UI test above but use the
//API not the UI.

describe("Get Request", () => {
  var result;
  const oauth =
    'oauth_consumer_key="E4068E9E751B871CC2E720042CDFA46C", oauth_signature_method="PLAINTEXT", oauth_signature="33126AC75E326A9FA0331D81E3E028E2&"';

  it("Validate status code of the Used car API", () => {
    result = cy.request({
      url: "https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json",
      headers: { Authorization: "OAuth " + oauth },
      method: "GET",
    });
    result.its("status").should("equal", 200);
  });

  it("Validate /used api contains the correct keys and values", () => {
    cy.request({
      method: "GET",
      url: "https://api.tmsandbox.co.nz/v1/Search/Motors/Used.json",
      headers: {
        Authorization: "OAuth " + oauth,
        accept: "application/json",
      },
    }).then((response) => {
      let body = JSON.parse(JSON.stringify(response.body));

      let newObject = Object.assign(body["List"]);

      let temp = Object.assign([newObject[0]]);
      cy.log(temp);

      const result = temp.map(
        ({ NumberPlate, Odometer, BodyStyle, Seats }) => ({
          NumberPlate,
          Odometer,
          BodyStyle,
          Seats,
        })
      );

      for (const property in result[0]) {
        if (result[0].hasOwnProperty(property)) {
          expect(result[0][property], property).not.to.equal(undefined);
        }
      }

      expect(result[0]["NumberPlate"], "NumberPlate").to.not.be.empty;
      expect(result[0]["Seats"], "Seats").to.be.above(0);
    });
  });
});
