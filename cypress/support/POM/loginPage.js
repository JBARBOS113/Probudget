class loginPage{
    get={
        selectaplication: ()=> cy.get('[src="http://192.168.3.3:7126/assets/icons/probudget-app-icon.png"]'),
        selectPage: ()=> cy.get('[src="http://192.168.3.3:7126/assets/images/zb-choose-unicolombo.svg"]'),
        pageloginvalidate: ()=> cy.title().should('include','Inicia sesión en unicolombo'),
        usurtypenamePage: ()=> cy.get('[id="username"]'),
        usertypePassworld: ()=> cy.get('[id="password"]'),
        userclickBotton: ()=> cy.get('[type="submit"]').should('contain','Ingresar'),
        resulLoginUser: ()=> cy.get('[alt="probudget logo"]')
    }
 
    clickAplication(){
        this.get.selectaplication().click({force:true}).wait(2000)
    }
    clickPage(){
        this.get.selectPage().click({force:true}).wait(2000)
    }
    loginpagevalidate(){
        this.get.pageloginvalidate().wait(2000)
    }
    typeuserName(type){
        this.get.usurtypenamePage().type(type).wait(2000)
    }
    typeuserPassworld(type){
        this.get.usertypePassworld().type(type).wait(2000)
    }
    loginuserPage(){
        this.get.userclickBotton().click({force:true}).wait(2000)
    }
    resulLogin(){
        this.get.resulLoginUser()
    }

}export const LoginPage =new loginPage;