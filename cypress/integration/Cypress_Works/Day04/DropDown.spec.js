/// <reference types = "Cypress"/>


context("DropDown",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it.skip("select",()=>{
        cy.visit(url)
     //   cy.xpath("(//select[@class='form-control'])[1]").select("option 2").should("have.value","option 2")
        cy.xpath("(//select[@class='form-control'])[1]").select("option 2").should("include.text"," option 2")
    })

    it("multiple select",()=>{
        cy.visit(url)
        cy.xpath("(//select[@class='custom-select'])[3]").select(["option 3","option 4","option 5"]).
        invoke("val").should("deep.equal",["option 3","option 4","option 5"])
    })
    
   
})