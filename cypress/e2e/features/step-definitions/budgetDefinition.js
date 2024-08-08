import { LoginPage } from "../../../support/POM/loginPage"
import { HomePage } from "../../../support/POM/homePage"
import { BudgetDefinitionPage } from "../../../support/POM/budgetDefinitionPage"
import {Given,When, Then, And, Before} from "cypress-cucumber-preprocessor/steps"
const users = require('../../../fixtures/users.json')
beforeEach('Login Probudget',()=>{
    Given('We need to validate the url',()=>{
        cy.visit("/")
        const datausers = users
        LoginPage.clickAplication()
        LoginPage.clickPage()
        LoginPage.loginpagevalidate()
        LoginPage.typeuserName(datausers.username1)
        LoginPage.typeuserPassworld(datausers.passworld1)
        LoginPage.loginuserPage()
        LoginPage.resulLogin()
    |   cy.log('user login success')
    })
})

Given('That the user click on the option Budget Definitions',()=>{
    HomePage.clickBudgestoption()
    HomePage.clickbudgetDefinition()
}) 
And('click the botton create budget',()=>{
    BudgetDefinitionPage.clickbuttoncreateBudget()
}) 
When('Him want to fill all information',()=>{
    BudgetDefinitionPage.typeNamebudget()
    BudgetDefinitionPage.clickoptionClient()
    BudgetDefinitionPage.selectmodalClient()
    BudgetDefinitionPage.clickbuttonaceptClient()
    BudgetDefinitionPage.selectPeriod()
    BudgetDefinitionPage.selectDatebegin()
    BudgetDefinitionPage.selectDateend()
    BudgetDefinitionPage.selectDateapproved()
    BudgetDefinitionPage.typeDescription()

}) 
And('Him needs to return, him can do click for return',()=>{

}) 
And('Him wants to cancel this process',()=>{

}) 
And('Him wants to save and create the Budget',()=>{

}) 
Then('A successful message is displayed',()=>{

}) 