/// <reference types = "Cypress"/>



context("Upload",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it("file upload",()=>{
        cy.visit(url)
    //  cy.get("#exampleInputFile").attachFile("kus_resmi.jpg")
     
     // cy.xpath("(//label[@class='custom-file-label'])[1]").should("have.text","kus_resmi.jpg")
     // cy.xpath("(//label[@class='custom-file-label'])[1]").should("include","kus")

     //2.yol method ile
     //3 tane parametre giriyoruz
     //1==>element locate  //2=> elementin uzantisiz path'i //3=>>yuklenecek dosya ismi
     cy.UploadImage("#exampleInputFile","kus_resmi.jpg","kus")

})

})