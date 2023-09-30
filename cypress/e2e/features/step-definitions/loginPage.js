import { LoginPage } from "../../../support/POM/loginPage";
import {Given,When, Then, And} from "cypress-cucumber-preprocessor/steps"
const users = require('../../../fixtures/users.json')

Given('validate de url for this page',()=>{
    cy.visit("/")
})
Given('The user need to select some aplication',()=>{
    LoginPage.clickAplication()
}) 
When('The user select de options page',()=>{
    LoginPage.clickPage()
})
Then('The page go to the login',()=>{
    LoginPage.loginpagevalidate()
}) 
And('The user type email and password',()=>{
    const datausers = users
    LoginPage.typeuserName(datausers.username1)
    LoginPage.typeuserPassworld(datausers.passworld1)
}) 
And('The user clicks on the page',()=>{
    LoginPage.loginuserPage() 
}) 
And('Validate when the user makes login page',()=>{
    LoginPage.resulLogin()
    cy.log('user login success')
})