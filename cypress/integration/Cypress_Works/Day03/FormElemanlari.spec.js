/// <reference types = "Cypress"/>

context("Form Elemanlari",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
    it.skip("Input Box",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.get("#exampleInputEmail1").clear

    })
    ///bu satiri en uste yaz
    it.skip("Input Box Editleme",()=>{
        cy.reload()  //ayni yer yenilensin
        cy.wait(2000)
        cy.get("#exampleInputEmail1").type("yeniemail@g")

    })
    it.skip("Input Box Editleme",()=>{
        cy.visit(url)
        cy.wait(2000)
        cy.get("#exampleInputEmail1").should("have.value","ornek_email@test.com")

    })
     it("Radio Button",()=>{
         cy.visit(url)
         cy.wait(2000)
         cy.get("[type=radio]").check("radio_11")  //bundan 7 tane oldigi icin force tru kullaniyorz
         cy.get("[type=radio]").check("radio_11",{force: true})
         //tipi radio olan elemntlerden hangsini secmek istiyrouz anlaminda type=redio yaziyoz
         //icinden radio11 olani sec diyoruz

     })

//hata denetimini devre disi birakmak icin force=true ///diger kontrolleri atlar istedgimiz elementten baslar
})