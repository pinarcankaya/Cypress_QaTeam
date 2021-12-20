///<reference types='Cypress'/>

context("Timeout",()=>{
     Cypress.config("defaultCommandTimeout",3000) //sadece bu spec dosyasi icin 3 sn bekler

    it("Default timeout degistirme",()=>{
        cy.visit(Cypress.config('baseUrl'))
        cy.get("input[name='username']").type("cypress_test_1@gmail.com")
        cy.get("input[name='password']").type("admin_123")
        cy.get("input[name='submit']").click()
        cy.get('.m-0.text-darkaa').should("have.text","Dashboard")
        //{timeout:10000} path'in yanina koydugumuz bu bekleme,path'in bulunmasini 10 sn bekler.
        
        //"defaultCommandTimeout":10000, cypress.json'a eklenirse tum spec dosyalari icin 10 sn bekler.
        //"pageLoadTimeout":15000 cypress.json'a eklenirse sayfanin yuklenmesini ...sn bekler.
    })
})