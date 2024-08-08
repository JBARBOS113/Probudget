class loginPage{
    
    get={
        selectaplication: ()=> cy.get(':nth-child(8) > .choose-app__section__container__choose-img'),
        pageloginvalidate: ()=> cy.title('include','Probudget'),
        userclickBotton: ()=> cy.get('[type="submit"]').should('contain','Ingresar'),
        resulLoginUser: ()=> cy.get('[alt="probudget logo"]')
    }
    clickAplication(){
        this.get.selectaplication().click({force:true}).wait(5000)
    }
    validatePage(){
        this.get.pageloginvalidate().wait(2000)
    }
    getuserPage(user){
        cy.fixture('users').then(function(tesdata){
            this.tesdata = tesdata
            cy.get('[id="username"]').type(this.tesdata[user].username)
            cy.get('[id="password"]').type(this.tesdata[user].Password)
        })
    }
    clickloginPage(){
        this.get.userclickBotton().click({force:true}).wait(1000)
    }
    resulLogin(){
        this.get.resulLoginUser()
    }
}export const LoginPage =new loginPage;