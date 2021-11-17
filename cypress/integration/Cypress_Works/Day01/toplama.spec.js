///<reference types="Cypress"/>

//it.skip --> testi run etmez
//it.only --> sadece o testi calistirir

context("4 islem",()=>{
       
    const s1=5
    const s2=4
    let sonuc;
    
    
 it("toplama",()=>{
   sonuc=s1+s2
   cy.log(sonuc)
   assert.equal(sonuc,9,"toplama sonuc kontrol")

    })

   it("cikarma",()=>{
       sonuc=s1-s2
       cy.log(sonuc)
       assert.equal(sonuc,1,"cikarma sonuc kontrol")
   }) 

})