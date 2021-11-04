Feature: Used Car Search

    As a user, I'd like to search for an used car and verify the following attributes

    @regression @e2e
    Scenario: Search the second last Car with attributes
        Given I am in Trademe home page
        And I click in the search bar "Cars, bikes & boats"
        And I click in "Used Cars" link
        Then I should see the Used Cars page
        And I select the second last car
        And I verify the following data exist
            | Field           | Value          |
            | Number plate    | <NumberPlate>  |
            | Kilometres      | <Kilometres>   |
            | Body            | <Body>         |
            | Seats            | <Seats>       |
     
            

   @regression @e2e
    Scenario: Search the last Car with attributes
        Given I am in Trademe home page
        And I click in the search bar "Cars, bikes & boats"
        And I click in "Used Cars" link
        Then I should see the Used Cars page
        And I select the last car
        And I verify the following data exist
            | Field           | Value          |
            | Number plate    | <NumberPlate>  |
            | Kilometres      | <Kilometres>   |
            | Body            | <Body>         |
            | Seats            | <Seats>       |