///<reference types="Cypress"/>

context("Cypress selector",()=>{
       
    const eMail="cypress_test_1@gmail.com"
    const pass="admin_123"
    const eMailXpath="//input[@name='username' or @type='email']"
    const passwordXpath="//input[@name='password']"
    const submitButtonXpath="//input[@name='submit']"

    //Cypress'in bagli oldugu google'dan Ranorex Selocity eklentisini indiriyoruz
    //Path'leri Copy selector ile aliyoruz.//istege bagli
    //locaterlari hel css ile hem xpath ile alabilriz
    
 it.skip("Path kullanimi",()=>{
     cy.visit(Cypress.config("baseUrl"))
     cy.get("input[name='username']").type(eMail)  //type=sendkeys==> veri gondermek icin
     cy.get("input[name='password']").type(pass)
     cy.get("input[name='submit']").click()
     //!cy.get(".m-0.text-dark").should("have.va","Dashboard")//sitede bulunan yazi bir text ise have.text kukllanilabilir
    })

    //Xpath kullanabilmek icin;
    //1.Terminale "npm install -D cypress-xpath"  yazip xpath'i indiriyoruz.
    //2.cypress/support/index.js'e require('cypress-xpath')  yi yapistiriyoruz


   it("xpath kullanimi",()=>{
    cy.visit(Cypress.config("baseUrl"))
    cy.xpath(eMailXpath).type(eMail)
    cy.xpath(passwordXpath).type(pass)
    cy.xpath(submitButtonXpath).click()
    cy.get(".m-0.text-dark").should("have.text","Dashboard")
   

   }) 

})