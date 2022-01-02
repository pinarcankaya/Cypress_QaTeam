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
        cy.xpath("//label[@for='todoCheck1']").click()
      //  cy.get(".todo-list.ui-sortable > li:nth-of-type(1)").should("have.class","done")
        cy.xpath("(//li[@class='done'])[1]").should("have.class","done")
        cy.pause()
        //3.secenekteki yaziyi ekrana yazdiralim
        cy.xpath("(//span[.='Let theme shine like a star'])[1]").invoke("text").then((str)=>{

        str=str.trim()
        cy.log(str).debug()   //debug pause isleminin benzeridir buraya geldigi zaman normalde durmaz
        ///inspect bolumu acikken log islemi sonrasi ekran durur/yani debug'a gelince durur
        //bu hata ayiklama yontemidir
      //  debugger   //! buraya yazilinca sadce yazilan yerde durur
       
    })
       // debugger    //* burdaki debugger proje casismadan ilk olarak okundugu icin bastan itirbaren durur
        //sebebi cypress java script komutlarini kedni komutlarindan once calsitirir
        //bunun onune gecebilmek iicn debugger 'i then yapisiniin icine koymak gerekiyor
        cy.xpath("//label[@for='todoCheck4']").click()
      
        
    })
})