/// <reference types = "Cypress"/>



context("Iframe",()=>{
    const url="https://test.iyikisordun.com/pages/UI/ribbons.html"
   
    const getIframeBody = () => {
        return getIframleDocument().its("0.contentDocument.body").should('not.be.undefined')
    }

    it.skip("iframe Test",()=>{
       cy.visit(url)

       //iframe icine giridkten sonraki elementleri kontrol etmek icin
       getIframeBody().find("#name_").should("have.text","Cypress_")
       getIframeBody().find("#surname_").should("have.text","Test")

      
    })



   //2.YOL commends.js deki hazir methodu kullanarak iframe girmek
    it.only("Iframe 2.Yol",()=>{
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.getIframe('#FileFrame').find('#name_').should('have.text','Cypress_')
        //commands.js'ten gelen method
        cy.getIframe('#FileFrame').find('#surname_').should('have.text','Test')
        
    })


    it.skip('iframe SilYaz',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').pause()
        .clear()
        .pause()
        .type('Merhaba Dunya')

        //iframe icinde herhangi bir texti silip yenisini yazmak icin
    
    })
    //iframe shadow gibi farkli bir iframe cikarsa karsimiza  find'den once shadow yazabiliriz
})