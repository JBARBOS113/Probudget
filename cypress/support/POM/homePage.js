class homePage{
    get={
        buttonoptionbudget:()=> cy.get(':nth-child(2) > .mat-mdc-menu-trigger > .mdc-button__label > .button-menu-container > .text'),
        buttonBugetDefinition:()=> cy.get(':nth-child(1) > zb-probudget-route-content > .route-content > figure > img'),
        buttonBugetRequest:()=> cy.get(':nth-child(2) > zb-probudget-route-content > .route-content'),
        buttonreturnHome:() => cy.get('[class="logo"]')
    }
    clickBudgestoption(){
        this.get.buttonoptionbudget().click({force:true}).wait(1000)
    }
    clickbudgetDefinition(){
        this.get.buttonBugetDefinition().click({force:true}).wait(1000)
    }
    clickbudgetRequest(){
        this.get.buttonBugetRequest().click({force:true}).wait(2000)
    }
    clickReturnhome(){
        this.get.buttonreturnHome().click({force:true})
    }

}export const HomePage = new homePage;