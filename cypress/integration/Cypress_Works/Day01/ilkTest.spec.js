///<reference types="Cypress"/>

context("Ilk Test",()=>{
    //context yerine descirible da kullanilabilir
    const url="http://test.iyikisordun.com/login.php"
    
    it.skip("visit",()=>{
        cy.visit("http://test.iyikisordun.com/login.php")  //1.yol
       // cy.visit(Cypress.config("baseUrl"))              //2.yol
       // cy.visit(url)                                    //3.yol
    })
    
    it("url Dogrulama",()=>{
        cy.visit(Cypress.config("baseUrl"))
        cy.url().should("include",Cypress.config("baseUrl")) //include==contains gorevinde
        cy.location("protocol").should("eq","http:")
       
    })
    //should attribute cagirma komutu
     // cy.get('#private').should('have.attr', 'type', 'email')
    

    //find bir foumun icindeki elemanlara bakarken de kullanilabilir
     // cy.get('form').find('[name="emailUser"]').check()
    

    })