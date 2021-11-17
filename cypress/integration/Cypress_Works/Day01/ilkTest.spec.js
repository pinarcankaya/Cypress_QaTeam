///<reference types="Cypress"/>

context("Ilk Test",()=>{
    const url="http://test.iyikisordun.com/login.php"
    
    it.skip("visit",()=>{
        cy.visit("http://test.iyikisordun.com/login.php")  //1.yol
       // cy.visit(Cypress.config("baseUrl"))              //2.yol
       // cy.visit(url)                                    //3.yol
    })
    
    it("url Dogrulama",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.url().should("include",Cypress.config("baseUrl"))
        cy.location("protocol").should("eq","http:")
       
    })
    
    
    })