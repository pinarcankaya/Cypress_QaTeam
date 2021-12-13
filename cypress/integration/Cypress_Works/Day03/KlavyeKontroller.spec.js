/// <reference types = "Cypress"/>

context("Form Elemanlari",()=>{
    const url="https://test.iyikisordun.com/pages/forms/advanced.html"


    it.skip("input Box",()=>{
        cy.visit(url)
        cy.xpath("(//span[@role='presentation'])[3]").click()
       
       cy.xpath("(//input[@class='select2-search__field'])[4]").type("Alaska").type('{enter}')

    })
    it("check Box",()=>{
        cy.visit(url)
        cy.get("[type='checkbox']").check("pr2",{force: true}).should("be.checked")
        cy.get("[type='checkbox']").check(["pr2","dg2"],{force: true}).should("be.checked")
        //check kullanacaksak type ve value degerlerini kullnamamiz gerekiyor
        //radio button ve checkbox larda genellikle force true kullanmamiz gerekiyor
          
    }) 

    it.skip("unchecked Box",()=>{
      cy.pause()
      cy.get("[type='checkbox']").uncheck(["pr2","dg2"],{force: true}).should("not.be.checked")

    }) 

   
})