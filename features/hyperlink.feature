Feature: Hyperlink

    Scenario: Clicking the forum hyperlink
        Given the home page
        When the forum button is clicked
        Then there should be a forum tab
    