/// <reference types = "Cypress"/>

context("Hata ayiklama yontemleri",()=>{
    const emailInputXpath="//input[@type='email']"
    const passwordInputXpath="//input[@name='password']"
    const submitInputXpath="//input[@type='submit']"

    const email="cypress_test_1@gmail.com"
    const password="admin_123"
  
    it("pasuse debugger debug",()=>{
       cy.visit(Cypress.config("baseUrl"))
         cy.Login()
       // cy.xpath(emailInputXpath).type(email)
       // cy.xpath(passwordInputXpath).type(password)
      //  cy.xpath(submitInputXpath).click()
  //
        cy.visit("https://test.iyikisordun.com/index.php")
        cy.xpath("//label[@for='todoCheck']").click().debug()  //debug=hata ayiklamasi
        cy.xpath("(//li[@class='done'])[1]").should("have.class","done")
        //cy.pause()
      

        cy.xpath("(//span[.='Let theme shine like a star'])[2]").invoke("text").then((str)=>{
          str=str.trim()
         // cy.log(str) .debug() //inspect bolumu acik olmali
        //  debugger
      
        }
        )
      //  debugger
      
    })
  
    
})