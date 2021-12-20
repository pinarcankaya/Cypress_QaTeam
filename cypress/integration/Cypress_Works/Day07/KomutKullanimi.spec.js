// <reference types = "Cypress"/>

context("Login Senaryolari",()=>{


    it.skip("ozel komut olusturmadan login islemleri",()=>{
        cy.visit(Cypress.config("baseUrl"))
       cy.get("input[name='username']").type(Cypress.env('username'))
       cy.get("input[name='password']").type(Cypress.env("pass"))
        cy.get("input[name='submit']").click()
    
    })

    
    it("ozel komut olusturmadan login islemleri",()=>{
        cy.visit(Cypress.config("baseUrl"))
         cy.Login()
    })
})