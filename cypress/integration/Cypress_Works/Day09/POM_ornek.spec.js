///<reference types ='Cypress'/>

import loginPage from "../../../PageObjectModel/loginPage"

//PageObjectModel(POM) yapisi ,projemizin daha yonetilebilir olasini saglar.Ornegin element path'lerinin tek bir yerden yonetilmesini saglariz.
context('Pom',()=>{
   //POM daki class'tan bir object olusturuyoruz
   const login  =new loginPage()
      

    it('Login',()=>{
        //PageObjectModel dosyasi altina olusturdugumuz js file'inin ismini 
        //yazip enter'a basinca yukaridaki import otomatik olarak olusuyor. 
       // cy.visit(Cypress.config('baseUrl'))
       cy.visit("http://test.iyikisordun.com/login.php")

       login.emailInput.should('be.visible').type(("cypress_test_1@gmail.com"))
       login.passwordInput.should("be.visible").type("admin_123")
       login.submitButton.should('be.visible').click()
       login.dasbord.should("have.text","Dashboard")


    })


})