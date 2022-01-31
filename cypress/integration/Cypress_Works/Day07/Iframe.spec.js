///<reference types = "Cypress"/>

// Bir web sayfası içinde Javascript, DOM sayesinde aşağıdaki işlevleri yerine getirebilir:

//Sayfa içindeki HTML öğeleri ve özniteliklerinden birini değiştirebilir ya da silebilir. Var olan bir öğe ya da niteliği değiştirebilir.
//Sayfa içerisindeki CSS stilleri üzerinde değişiklik yapabilir.
//Tüm mevcut olaylara tepki oluşturabilir.
//Yeni olaylar oluşturabilir.

context("Iframe",()=>{


//Support commends.js'e getIframe adinda hazir methodu yerlestiriyoruz
    it("Iframe 2.Yol",()=>{
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.getIframe('#FileFrame').find('#name_').should('have.text','Cypress_')
        cy.getIframe('#FileFrame').find('#surname_').should('have.text','Test')
    })

 //Baska bir sitede Iframe icindeki yaziyi silip tekrar bir yazi gonderiyoruz.   
    it('iframe SilYaz',()=>{
        cy.visit('https://the-internet.herokuapp.com/iframe')

        //cy.get('h3').should('contain', 'Editor') //include==contain
     
        cy.getIframe('#mce_0_ifr').pause()
        .clear()
        .pause()
        .type('Merhaba Dunya')

    
    })
})