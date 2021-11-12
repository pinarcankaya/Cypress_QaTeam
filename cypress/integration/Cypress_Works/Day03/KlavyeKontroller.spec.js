/// <reference types = "Cypress"/>

context("Form Elemanlari",()=>{
    const url="https://test.iyikisordun.com/pages/forms/advanced.html"

    it.skip("Input Box",()=>{
        cy.visit(url)
        cy.wait(3000)
       cy.xpath("(//span[@role='presentation'])[1]").click()
       cy.wait(3000)
       cy.xpath("(//input[@class='select2-search__field'])[4]").type("Alaska").type('{enter}')
       //cy.wait(2000)
       //cy.xpath("(//input[@class='select2-search__field'])[4]").type('{enter}')
    })
    it("check Box",()=>{
        cy.visit(url)
        cy.wait(2000)
       // cy.get("[type='checkbox']").check("pr2",{force: true}).should("be.checked")  //tek checkbox secimi
      
         cy.get("[type='checkbox']").check(["pr2","dg2"],{force: true}).should("be.checked") //2 checkbox secimi
       
         //type degeri ve value degeri varsa loacte boyle olabilir
        //should be checked ile dogrulama yaptik
    })
    it("unchecked Box",()=>{
        cy.wait(2000)
        cy.get("[type='checkbox']").uncheck(["pr2","dg2"],{force: true}).should("not.be.checked") //2 checkbox secimi
        
    })
})