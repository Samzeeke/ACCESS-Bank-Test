Feature: Amazon Web Automation

  Scenario: Filter and Sort JETech Products
    Given I open Amazon website
    When I click on the hamburger menu
    And I click on Computers
    And I click on Table Accessories
    And I filter the results by Brand "JETech"
    And I sort the JETech results by "Newest Arrivals"
    And I click on the lowest priced item
    And I switch the window
    Then I assert that "About this item" section is present