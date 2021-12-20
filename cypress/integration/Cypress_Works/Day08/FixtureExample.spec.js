// <reference types = "Cypress"/>

context("Fixtures",()=>{


    it.skip("Login Senaryosu",()=>{
        cy.visit("https://test.iyikisordun.com/login.php")
        cy.get("input[name='username']").type("cypress_test_1@gmail.com")
        cy.get("input[name='password']").type("admin_123")
        cy.get("input[name='submit']").click()
    })

    it("Login Senaryosu",()=>{
        cy.visit("https://test.iyikisordun.com/login.php")

       cy.fixture("loginSenaryosu").then((user)=>{

        
        cy.get("input[name='username']").type(user.userName)
        cy.get("input[name='password']").type(user.pass)
        cy.get("input[name='submit']").click()

       
       })
    })
})