import { HomePage } from "../../../support/POM/homePage";
import { LoginPage } from "../../../support/POM/loginPage";
import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps"
const users = require('../../../fixtures/users.json')
beforeEach('The user can be on the honepaga',()=>{
    Given('The user can to select options',()=>{
        cy.visit("/")
        LoginPage.clickAplication()
        LoginPage.validatePage()
        LoginPage.getuserPage(1) 
        LoginPage.clickloginPage()
        LoginPage.resulLogin()
    |   cy.log('user login success')
    })
})
    Given('User can click on the options budget definition',()=>{
        HomePage.clickBudgestoption()
        HomePage.clickbudgetDefinition()
    }) 
    When('User wants to select budget request',()=>{
        HomePage.clickBudgestoption()
        HomePage.clickbudgetRequest()
    }) 
    Then('User can return homepage again',()=>{
        HomePage.clickReturnhome()
    })  

