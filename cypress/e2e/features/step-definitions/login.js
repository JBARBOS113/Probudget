import { LoginPage } from "../../../support/POM/loginPage";
import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps"
//const users = require('../../../fixtures/users.json')
Given('validate de url for this page',()=>{
    cy.visit("/")
})
Given('The user need to select some aplication',()=>{
    LoginPage.clickAplication()
}) 
When('The user checkout title page',()=>{
    LoginPage.validatePage()
})
Then('The user type email and password',()=>{
    // ver en el documento users segun pa posición llama al usuario
    LoginPage.getuserPage(1) 
}) 
And('The user clicks on the page',()=>{
    LoginPage.clickloginPage() 
}) 
And('Validate when the user makes login page',()=>{
    LoginPage.resulLogin()
    cy.log('user login success')
})