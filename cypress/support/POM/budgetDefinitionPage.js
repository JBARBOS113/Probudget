class budgetDefinitionPage{
    get={
        clikoptiocreateBudget:()=> cy.get(':nth-child(1) > .zb-button > [translate=""]'),
        
        typenameBudget:()=> cy.get('[id="nameBudget"]').type('Presupuesto'),

        clickClient:()=> cy.get('#txtClient').wait(2000),

        selectClientmodal:()=> cy.get('[class="modal modal-enter"]').invoke('css', 'z-index', '1500').then(() => {
            cy.get('[class="zb-table__body"]').eq(1).each(($filas)=>{
                let resul= $filas.text()
                cy.log('---------++'+ resul)
                const randomIndex = Cypress._.random(0, $filas.length - 5)
                const randomRow = $filas.eq(randomIndex)
                randomRow.click({force: true})
            })
        }),
       clickaceptClient:()=> cy.get('[class="button-text"]').eq(3).then(($button)=>{
             // Obtiene la ubicación en el DOM del cuarto botón
             const buttonPath = Cypress.$($button).text()
             cy.contains('[class="button-text"]', `${buttonPath}`).click({ force: true });
       }),
       selectPeriod:()=> cy.get('#idPeriodicity').select('3'),
    
        selectdateBegin:(() =>{
            const today = new Date()
            const year = today.getFullYear()
            const month = today.getMonth() + 1; // Los meses comienzan en 0
            const day = today.getDate();
            // Formatear la fecha en un formato que sea aceptado por el campo de fecha de tu aplicación (por ejemplo, "YYYY-MM-DD")
            const formattedDate = `${year}/${month.toString().padStart(2, '0')}/${day.toString().padStart(2, '0')}`
            // Encontrar el campo de fecha y llenarlo con la fecha actual
            cy.log("------------------"+formattedDate)
            cy.get('#startDate').invoke('val',formattedDate)
            //cy.get(':nth-child(4) > .zb-form-field > .zb-form-field__container > #startDate').type({force: true},formattedDate)
            // Agregar una aserción para verificar que el campo de fecha contiene la fecha actual
            cy.get('#startDate').should('have.value', formattedDate)
        }),
        seelctdateEnd:(()=>{
            const dayjs = require('dayjs'); 
            // Obtiene la fecha actual
            const fechaActual = dayjs();
            // Calcula una fecha futura, por ejemplo, 365 días a partir de la fecha actual
            const fechaFutura = fechaActual.add(365, 'day');
            // Convierte la fecha futura a una cadena en el formato necesario (por ejemplo, 'DD-MM-YYYY')
            const fechaFuturaStr = fechaFutura.format('DD-MM-YYYY');
            // Encuentra el campo de fecha en tu página y establece su valor
            cy.get('[id="endDate"]').invoke('val',fechaFuturaStr)
        }),
        selectdateApproved:(()=>{
            const dayjs = require('dayjs'); 
            // Obtiene la fecha actual
            const fechaActual = dayjs();
            // Calcula una fecha futura, por ejemplo, 365 días a partir de la fecha actual
            const fechaFutura = fechaActual.add(20, 'day');
            // Convierte la fecha futura a una cadena en el formato necesario (por ejemplo, 'DD-MM-YYYY')
            const fechaFuturaStr = fechaFutura.format('DD-MM-YYYY');
            // Encuentra el campo de fecha en tu página y establece su valor
            cy.get('[id="approveDate"]').invoke('val',fechaFuturaStr)
        }),
        typeDescription:()=> cy.get('[placeholder="Descripción"]'),

        viewDetailOption: ()=> cy.get(':nth-child(2) > .td-actions > :nth-child(1)'),
        editOption:()=> cy.get(':nth-child(2) > .td-actions > :nth-child(2) > span > .zb-button-icon-prefix > .mat-icon'),
        filterOption:()=> cy.get(':nth-child(2) > .zb-button'),
        filterforCode:()=> cy.get('#txtBudgetCode'),
        filterforName:()=> cy.get('#txtBudgetName'),
        filterforClient:()=> cy.get('#txtBudgetName'),
        selecttheClient: ()=>  cy.get('class="zb-table" > tr').then(($data)=>{
            let result=$data.text()
            cy.log('this is the data...'+result)

        })
    }
    clickbuttoncreateBudget(){
        this.get.clikoptiocreateBudget().click()
    }
    typeNamebudget(){
        this.get.typenameBudget()
    }
    clickoptionClient(){
        this.get.clickClient().click({force: true}).wait(2000)
    }
    selectmodalClient(){
        this.get.selectClientmodal()
    }
    clickbuttonaceptClient(){
        this.get.clickaceptClient()
    }
    selectPeriod(){
        this.get.selectPeriod()
    }
    selectDatebegin(){
        this.get.selectdateBegin()
    }
    selectDateend(){
        this.get.seelctdateEnd()
    }
    selectDateapproved(){
        this.get.selectdateApproved()
    }
    typeDescription(){
        this.get.typeDescription().type('Hello this is a MSM for this test')
    }

} export const BudgetDefinitionPage = new budgetDefinitionPage; 
