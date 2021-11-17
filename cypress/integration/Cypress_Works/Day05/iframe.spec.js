///<reference types = "Cypress"/>


context("Iframe",()=>{
    
  
      it("Iframe Text",()=>{
          cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
         
  
      })
      //2.YOL commends.js deki hazir methodu kullanarak iframe girmek
      it("Iframe 2.Yol",()=>{
          cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
          
      })
  
      it('iframe SilYaz',()=>{
          cy.visit('https://the-internet.herokuapp.com/iframe')
  
         
  
      
      })
  })