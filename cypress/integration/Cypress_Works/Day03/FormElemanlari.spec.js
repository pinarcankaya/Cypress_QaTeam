/// <reference types = "Cypress"/>

context("Form Elemanlari",()=>{

    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it.skip("Input Box Editleme",()=>{
        cy.visit(url)
        cy.get("#exampleInputEmail1").type("abc123@gmail.com")
    })
    it("Input Box Editleme",()=>{
        cy.visit(url)
        cy.get("#exampleInputEmail1").clear()  //veriyi gondermden once temizler
        cy.get("#exampleInputEmail1").type("abc123@gmail.com")
        cy.get("#exampleInputEmail1").should("have.value","abc123@gmail.com")
        // kontrol edecegimiz data bir value degeri ise have.value kullanilir
        //inspect bolumunde bulunan value degerinin karsisindaki degeri getirir
    })
    it.only("Radio Button",()=>{
        cy.visit(url)
         //!radio buttonlara  ulasmak icin 1.yol
         //type=radio oldugu icin get icine   [type=radio] yazilir
         //check fonksiyonu icinde de locaterdaki value degeri yazilir
        cy.get("[type=radio]").check("radio_11")  //check in ici bos da kalabilir hepsine tiklar o zmaan
        cy.get("[type=radio]").check("radio_11",{force:true})
      

       // !radio buttonlara  ulasmak icin 2.yol
       //tum locateri alip get icinde kullanabilirz ama bu durumda da
       //{force: true} kullanmmaiz gerekir
       // cy.get("#customRadio3").click({force: true})  
       // cy.get("#customRadio3").check({force: true}).should('be.checked')//secili mi
        //element disabled olsa bile force true ile secebiliyoruz


        //  ilk radio button secilecekse. getten sonra checkten once first()yazabilriiz
      // ornek==> cy.get('[type="radio"].XyzTypeRadio').first().check()

     
    })



})