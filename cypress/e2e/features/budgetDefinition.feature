Feature: Test for Budget Definitions

    Background: valitate url
        Given We need to validate the url
    Scenario: The user needs to create a budget...
        Given That the user click on the option Budget Definitions
        And click the botton create budget
        When Him want to fill all information
        And Him needs to return, him can do click for return
        And Him wants to cancel this process
        And Him wants to save and create the Budget
        Then A successful message is displayed
