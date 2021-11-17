///<reference types ="Cypress"/>

context("Tarayici Fonksiyonlari",()=>{

    const url1="http://test.iyikisordun.com/index2.html"
    const url2="http://test.iyikisordun.com/index3.html"

    it("geri gelme",()=>{

        cy.visit(url1)
        cy.pause()
        cy.visit(url2)
        cy.pause()
        //cy.go("back")  //1.yol
        cy.go(-1)        //2.yol

        cy.url().should("include","index2")

    })
    it("ileri gelme",()=>{
  
        cy.go("forward")  //cy.go(1)
        cy.url().should("include","index3")

    })
    it("reload",()=>{  
        cy.get(".form-control").type("Merhaba")
        cy.wait(3000)
        cy.reload()  //reload:yeniden yukle
        
        
    })
})