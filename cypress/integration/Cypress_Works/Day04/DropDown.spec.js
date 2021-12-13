/// <reference types = "Cypress"/>


context("DropDown",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it.skip("select",()=>{
        cy.visit(url)
     //   cy.xpath("(//select[@class='form-control'])[1]").select("option 2").should("have.value","option 2")
        cy.xpath("(//select[@class='form-control'])[1]").select("option 2").should("include.text"," option 2")
         //select class mantigi select method olrak belirtilmeli //icine sececgimiz value girilmeli
    })

    it("multiple select",()=>{
        cy.visit(url)
        cy.xpath("(//select[@class='custom-select'])[3]").select(["option 3","option 4","option 5"]).
        invoke("val").should("deep.equal",["option 3","option 4","option 5"])
    })
    //deep.equal==>birden fazla datayi dogrularken !
        
        ///invoke ggoogle aciklama
        //. invoke(), çalıştırmadan önce fonksiyonun konu üzerinde var olmasını bekleyecektir.
         //. invoke(), çağrılan işlev bir söz verirse, sözün çözülmesini bekleyecektir.
         //.invoke(), tüm zincirleme iddialar geçene kadar otomatik olarak yeniden dener.
    
   
})