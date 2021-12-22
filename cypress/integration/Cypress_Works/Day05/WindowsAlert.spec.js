/// <reference types = "Cypress"/>



context("Alert",()=>{
    const url="https://test.iyikisordun.com/pages/UI/modals.html"
   
    it("Alert uzerindeki texti dogrulama",()=>{
      cy.visit(url)
      cy.contains("Default Alert").click()
     //contains ile de locate edebiliyoruz

      cy.on("window:alert",(str)=>{
        expect(str).to.equal("Cypress alert kontrol.")  //alert icindkei texti aldik
      })
     
      cy.on("window:confirm",()=>true)  //alert te "ok" butonuna basar   
      cy.on("window:confirm",()=>false)  //alert te "cancel" butonuna basar//dismiss
    })
     //?test yaparken alert acildigini gormuyoruz cunku test akisinin bloklanmamasi icin 
        //?cypress tarafindan visible olmasi engelleniyor

    it("alert dismis",()=>{
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      cy.contains("Click for JS Confirm").click()
      cy.on("window:confirm",()=>false) //alert icindeki cancel butonuna tiklar
      
    })
    
    it.only("alert text",()=>{   ///alert icine text gondermek icin
      cy.visit("https://the-internet.herokuapp.com/javascript_alerts")
      
      cy.window().then(($win) => {
        cy.stub($win, 'prompt').returns('MERHABA')
        cy.contains('Click for JS Prompt').click()
       // cy.get(':nth-child(3) > button').click()  //2.yol
    })
        cy.get('#result').should('have.text','You entered: MERHABA')
      
    })
            ///jQuery, JavaScript kodu ve HTML öğeleri arasındaki etkileşimleri 
            //basitleştirmeye ve standartlaştırmaya yardımcı olan bir JavaScript kitaplığıdır.
            // JavaScript, web sitelerinin etkileşimli ve dinamik olmasını sağlar 
            //ve jQuery, bu süreci kolaylaştırmaya yardımcı olan bir araçtır.

            //Cypress otomatik olarak jQuery'yi içerir ve onu Cypress.$ olarak sunar.

             //stup:Bir işlevi değiştirin, kullanımını kaydedin ve davranışını kontrol edin.
    
})