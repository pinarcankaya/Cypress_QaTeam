// <reference types = "Cypress"/>
context("Files",()=>{

    it.skip("Read File",()=>{
      // ! localdeki dosyalari okumak icin
      cy.readFile("cypress/fixtures/text1.txt").should("eq","Hello")
      cy.readFile("cypress/fixtures/text1.txt").should("include","Hel")

      
      cy.readFile("cypress/fixtures/text2.json").its("email").should("eq","cypress@test.com")


      cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
      cy.readFile("cypress/fixtures/UItext.txt").then((emailAdress)=>{
       cy.ClearAndSendKeys("#exampleInputEmail1",emailAdress)
      })
      

    })
    it.skip("Write File json",()=>{
      
      cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
      cy.get("#exampleInputEmail1").invoke("val").then((emailText)=>{
        cy.writeFile("cypress/fixtures/writeFile.json",{email: emailText})

      })
      })

       it("Write File Text",()=>{
      cy.visit("https://test.iyikisordun.com/pages/UI/navbar.html")
      cy.xpath("//div[@id='custom-content-below-home']").invoke("text").then((text)=>{
      //  text=text.trim()
    cy.writeFile("cypress/fixtures/OrnekText.txt",text.trim())
    
    })
        
      })

  



   
})