///<reference types ="Cypress"/>

//wrap kullanilmadan , then fonksiyonu icindeki bir degiskeni baska bir yere tasiyamiyoruz,once Sar,sonra Tasi  
context("Then Yapisi" ,()=>{

    
    it("Wrap kullanimi" ,()=>{
        cy.visit("http://test.iyikisordun.com/pages/forms/general.html")

      let mail
        
       cy.get("input#exampleInputEmail1").invoke("val").then((emailAdress)=>{
            
           mail=emailAdress
            cy.log(emailAdress)
           cy.wrap(emailAdress).as("newEmail")
        })

    
       // cy.getText_Product_name_css("input#exampleInputEmail1")
        console.log(mail)

        //cy.pause()
      
        // cy.get("@newEmail").then((email)=>{
        //     cy.log(email)
        //  })
        // cy.visit("http://test.iyikisordun.com/pages/forms/validation.html")
        // cy.pause()
        // cy.get("@newEmail").then((email)=>{
        //     cy.get("input#exampleInputEmail1").type(email)
        // }) 

       
        
    })
})