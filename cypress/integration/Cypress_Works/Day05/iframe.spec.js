/// <reference types = "Cypress"/>



context("Iframe",()=>{
    const url="https://test.iyikisordun.com/pages/UI/ribbons.html"
   
    const getIframeBody = () => {
        return cy.get('#FileFrame').its("0.contentDocument.body").should('be.visible')
    }

    it("iframe Test",()=>{
       cy.visit(url)

       //iframe icine giridkten sonraki elementleri kontrol etmek icin
       getIframeBody().find("#name_").should("have.text","Cypress_")
       getIframeBody().find("#surname_").should("have.text","Test")

      
    })

   //2.YOL commends.js deki hazir methodu kullanarak iframe girmek
    it("Iframe 2.Yol",()=>{
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.getIframe('#FileFrame').find('#name_').should('have.text','Cypress_')
        cy.getIframe('#FileFrame').find('#surname_').should('have.text','Test')
        
    })

    it.skip('iframe SilYaz',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        cy.getIframe('#mce_0_ifr').pause()
        .clear()
        .pause()
        .type('Merhaba Dunya')

    
    })
    //iframeshadow gibi farkli bir iframe cikarsa karsimiza  find'den once shadow yazabiliriz
})