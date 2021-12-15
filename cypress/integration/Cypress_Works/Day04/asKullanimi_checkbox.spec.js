/// <reference types = "Cypress"/>

context("as Kullanimi",()=>{
    const url="https://test.iyikisordun.com/pages/forms/advanced.html"
   
    it("check Box",()=>{
       
        cy.visit(url)
        cy.get("[type='checkbox']").check(["pr2","dg2"],{force: true})
        cy.pause()
    })
    it("as Kullanarak check box ",()=>{
        cy.get("[type='checkbox']").as("X")//takma ad
        cy.get("@X").uncheck(["pr2","dg2"],{force: true})
       
    })
    //as locater dan sonra takma ad vermek icin kullanilir
    //daha sonra istenilen yerde cagirilarak kullanilabilir

})