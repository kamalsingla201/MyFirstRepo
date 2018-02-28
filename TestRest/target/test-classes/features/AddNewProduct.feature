Feature: Add new product feature

  Background: 
    Given The add product service is up and running

  Scenario Outline: Add a new product
    When I enter product name as "<product_name>"
    And I enter category as "<product_category>"
    And I enter price as "<Unit_Price>"
    And I send a request to add new product
    Then I verify the response status as "<status>"
    And I verify the newly added product "<product_name>" using search service

    Examples: 
      | product_name       | product_category | Unit_Price | status  |
      | A House in Bali    | Books            | 15.39D     | SUCCESS |
      | Keyboard           | Electronics      | 18.49D     | SUCCESS |
      | Mouse              | Electronics      | 21.59D     | SUCCESS |
      | 17Monitor          | Electronics      | 35.69D     | SUCCESS |
      | Hammer             | Hardware         | 40.79D     | SUCCESS |
      | Screwdriver        | Hardware         | 51.89D     | SUCCESS |
      | English Dictionary | Books            | 19.99D     | SUCCESS |
      | An Alaskan Odysse  | Books            | 07.39D     | SUCCESS |
      | LCD Projector      | Electronics      | 25.29D     | SUCCESS |
      | Smart Thermostat   | Electronics      | 82.69D     | SUCCESS |
