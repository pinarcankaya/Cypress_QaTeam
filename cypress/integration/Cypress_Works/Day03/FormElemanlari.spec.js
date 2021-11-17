/// <reference types = "Cypress"/>

context("Form Elemanlari",()=>{

    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it.skip("Input Box Editleme",()=>{
        cy.visit(url)
        cy.get("#exampleInputEmail1").type("abc123@gmail.com")
    })
    it.skip("Input Box Editleme",()=>{
        cy.visit(url)
        cy.get("#exampleInputEmail1").clear()
        cy.get("#exampleInputEmail1").type("abc123@gmail.com")
        cy.get("#exampleInputEmail1").should("have.value","abc123@gmail.com")
    })
    it("Radio Button",()=>{
        cy.visit(url)
        //cy.get("[type=radio]").check("radio_11")  //check in ici bos da kalabilir hepsine tiklar o zmaan
       // cy.get("[type=radio]").check("radio_11",{force:true})

        cy.get("#customRadio3").click({force: true})  
        cy.get("#customRadio3").check({force: true}).should('be.checked')
        //element disabled olsa bile force true ile secebiliyoruz
        
    })



})