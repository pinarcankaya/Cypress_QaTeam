///<reference types="Cypress"/>



context("Before-After-2",()=>{

  //!!!index.js deki beforeEach cagrilmaksizin kulllanilir.
  //Dikkat:index.js deki BeforeEach yoruma alindi.
    
    it("1.Widget",()=>{
       cy.get(".bg-info.small-box > .inner > p").should("have.text","New Orders")
    })

     it("2.Widget",()=>{
        cy.get(".bg-success.small-box > .inner > p").should("have.text","Bounce Rate")
    })

    it("3.Widget",()=>{
        cy.get(".bg-warning.small-box > .inner > p").should("have.text","User Registrations")
    })

    it("4.Widget",()=>{
        cy.get(".bg-danger.small-box > .inner > p").should("have.text","Unique Visitors")
    })
    
        
    })
