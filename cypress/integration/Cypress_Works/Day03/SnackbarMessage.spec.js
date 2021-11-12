/// <reference types = "Cypress"/>

context("Login senaryo",()=>{

    const email="cypress_test_1@gmail.com"
    const password="admin_123"

    it("ranorex ile test senaryosu",()=>{
         cy.visit(Cypress.config("baseUrl"))
         cy.get("[type='email']").type(email)
         cy.get("[type='password']").type(password)
         cy.wait(2000)
         cy.get(".btn").click()
           //visit yapilan yerin superdomainleri(baseurl) ayni ise ayni IT de kullanabilriiz
        cy.visit("https://test.iyikisordun.com/pages/forms/general.html")  

        cy.get("div:nth-of-type(2) > .btn.btn-danger").click()
        cy.get("#snackbar").should("be.visible")
        cy.get("#snackbar").should("include.text","Bu element kısa süre sonra kaybolacaktır.")
        cy.get("#snackbar").should("not.be.visible")
    })
})