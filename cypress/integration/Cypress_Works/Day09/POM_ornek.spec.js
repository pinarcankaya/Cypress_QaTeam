///<reference types ='Cypress'/>

import login from "../../PageObjectModel/login"





//PageObjectModel(POM) yapisi ,projemizin daha yonetilebilir olasini saglar.Ornegin element path'lerinin tek bir yerden yonetilmesini saglariz.
context('Pom',()=>{
   //POM daki class'tan bir object olusturuyoruz
   const login_ = new login()
      

    it('Login',()=>{

        
        //PageObjectModel dosyasi altina olusturdugumuz js file'inin ismini 
        //yazip enter'a basinca yukaridaki import otomatik olarak olusuyor. 
       // cy.visit(Cypress.config('baseUrl'))
       cy.visit("http://test.iyikisordun.com/login.php")

        // cy.get("input[name='username']").should('be.visible').type("cypress_test_1@gmail.com")
        // cy.get("input[name='password']").should('be.visible').type("admin_123")
        // cy.get("input[name='submit']").should('be.visible').click()
        // cy.get('.m-0.text-dark').should("have.text","Dashboard")

    
        

       login_.emailInput().should('be.visible').type("cypress_test_1@gmail.com")
       login_.passwordInput().should('be.visible').type("admin_123")
       login_.submitButton().should('be.visible').click()
       


    })


})