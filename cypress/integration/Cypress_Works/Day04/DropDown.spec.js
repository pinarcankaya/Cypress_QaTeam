/// <reference types = "Cypress"/>


context("DropDown",()=>{
    const url="https://test.iyikisordun.com/pages/forms/general.html"
   
    it("select class elementin texti ile secim",()=>{
        cy.visit(url)
        cy.xpath("(//select[@class='form-control'])[1]").select("option 3").should("have.value","option 3")
        //have.value select methodda locate ettigimiz elementin  value'sunu verir
        
      //  cy.xpath("(//select[@class='form-control'])[1]").select("option 2").should("include.text","option 2")
         //select class mantigi select method olrak belirtilmeli //icine sececegimiz value girilmeli
    })

    it.only("multiple select elementin texti ile secim",()=>{
        cy.visit(url)
       // cy.xpath("(//select[@class='custom-select'])[3]").select(["option 3","option 4","option 5"]).
       // invoke("val").should("deep.equal",["option 3","option 4","option 5"])
        //invole=cagir

        //2.yol 
        cy.xpath("(//select[@class='custom-select'])[3]").select([2,3,4])
        invoke("val").should("deep.equal",["option 3","option 4","option 5"])
    })

    it(" select class index ile secim",()=>{
        cy.visit(url)
        cy.xpath("(//select[@class='custom-select'])[3]").select(0)
       
    })

    it(" select class value ile secim",()=>{
        ///ornek 
        <select>
      // <option value="456">apples</option>
      //<option value="457">oranges</option>
     //<option value="458">bananas</option>
     //  </select>

        // cy.get('select').select('456').should('have.value', '456')
       
       
    })
    
    
        //deep.equal==>birden fazla datayi dogrularken !
        
        ///invoke google aciklama
        //. invoke(), çalıştırmadan önce fonksiyonun konu üzerinde var olmasını bekleyecektir.
         //. invoke(), çağrılan işlev bir söz verirse, sözün çözülmesini bekleyecektir.
         //.invoke(), tüm zincirleme iddialar geçene kadar otomatik olarak yeniden dener.
    
   
})