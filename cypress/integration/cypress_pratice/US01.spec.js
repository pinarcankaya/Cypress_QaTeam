/// <reference types = "Cypress"/>

context("xpath",()=>{

    const url="https://testautomationpractice.blogspot.com/"
    

    it("visit",()=>{
        cy.visit(url)
       
    })
    it("url dogrulama",()=>{
        cy.url().should("include",url)
        cy.get("h1")
        //cy.xpath("//h1[.='Volunteer Sign Up']")
        
    })
    it("protocol dogrulama",()=>{
       cy.location("protocol").should("eq","https:")
      
    })
    it.only("textbox ",()=>{
        cy.visit(url)
        cy.wait(2000)
         cy.get("input[name='RESULT_TextField-1']").type("pinar")  
        // cy.get("input[name='RESULT_TextField-2']").type("can")  
        // cy.get("input[name='RESULT_TextField-3']").type("000111")  
        // cy.get("input[name='RESULT_TextField-4']").type("Turkey")  
        // cy.get("input[name='RESULT_TextField-5']").type("Ankara")  
        // cy.get("input[name='RESULT_TextField-6']").type("pinar123@gmail.com")  
     })
    })