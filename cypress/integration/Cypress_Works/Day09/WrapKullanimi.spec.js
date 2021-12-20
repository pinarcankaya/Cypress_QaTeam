///<reference types ="Cypress"/>

//wrap kullanilmadan , then fonksiyonu icindeki bir degiskeni baska bir yere tasiyamiyoruz,once Sar,sonra Tasi  
context("Then Yapisi" ,()=>{

    it("Wrap kullanimi" ,()=>{
        cy.visit("http://test.iyikisordun.com/pages/forms/general.html")
        cy.get("input#exampleInputEmail1").invoke("val").then((emailAdress)=>{
           //  let mail=emailAdress
            cy.log(emailAdress)
            cy.wrap(emailAdress).as("newEmail")
        })
        cy.pause()
           //cy.log(mail)
        cy.get("@newEmail").then((mail)=>{
            cy.log(mail)
        })
        cy.visit("http://test.iyikisordun.com/pages/forms/validation.html")
        cy.pause()
        cy.get("@newEmail").then((email)=>{
            cy.get("input#exampleInputEmail1").type(email)
        }) 


        
    })
})