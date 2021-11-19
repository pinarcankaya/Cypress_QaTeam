/// <reference types = "Cypress"/>



context("Iframe",()=>{
    const url="https://test.iyikisordun.com/pages/UI/ribbons.html"
   
    const getIframleDocument=()=>{
         return cy.get("#FileFrame").its("0.contentDocument").should("exist")

    }
    const getIframeBody = () => {
        return getIframleDocument().its("body").should("not.be.undefined").then(cy.wrap)
    }

    it("iframe Test",()=>{
       cy.visit(url)

       //iframe icine giridkten sonraki elementleri kontrol etmek icin
       getIframeBody().find("#name_").should("have.text","Cypress_")
       getIframeBody().find("#surname_").should("have.text","Test")
 
       //iframe in yapisinda shodow gibi bir yapida ise body den sonra shodow eklenmeli
       getIframeBody().find("#surname_").should("have.text","Test")
      
    })

   //2.YOL commends.js deki hazir methodu kullanarak iframe girmek
    it("Iframe 2.Yol",()=>{
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.getIframe('#FileFrame').find('#name_').should('have.text','Cypress_')
        cy.getIframe('#FileFrame').find('#surname_').should('have.text','Test')
    })

    it('iframe SilYaz',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        //cy.get('h3').should('contain', 'Editor') //include==contain
     
        cy.getIframe('#mce_0_ifr').pause()
        .clear()
        .pause()
        .type('Merhaba Dunya')

    
    })
})