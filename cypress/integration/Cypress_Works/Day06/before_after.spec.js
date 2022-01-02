///<reference types="Cypress"/>

before(()=>{
    //spec dosyasındaki bütün testler kosmadan önce 1 kez çalıştırılırç.

})

beforeEach(()=>{
    //Her bir testten önce çalıştırılır.
    const emailInputXPath="//input[@type='email' and @name='username']"
    const passwordInputXPath="//input[@name='password']"
    const submitButtonXPath="//input[@type='submit']"

    cy.visit(Cypress.config('baseUrl'))
    cy.xpath(emailInputXPath).type("cypress_test_1@gmail.com")
    cy.xpath(passwordInputXPath).type("admin_123")
    cy.xpath(submitButtonXPath).click()
})

after(()=>{
    //spec dosyasındaki bütün testler koştuktan sonra sadece 1 kez çalıştırılır.
})

afterEach(()=>{
    //Her bir testten sonra çalıştırılır.
})

context("Before-After",()=>{

    
    it("1.Widget",()=>{
       cy.get(".bg-info.small-box > .inner > h3").should("have.text","150")
    })

     it("2.Widget",()=>{
        cy.get(".bg-success.small-box > .inner > h3").should("have.text","53%")
    })

    it("3.Widget",()=>{
        cy.get(".bg-warning.small-box > .inner > h3").should("have.text","44")
    })

    it("4.Widget",()=>{
        cy.get(".bg-danger.small-box > .inner > h3").should("have.text","65")
    })
    
   
    
})
