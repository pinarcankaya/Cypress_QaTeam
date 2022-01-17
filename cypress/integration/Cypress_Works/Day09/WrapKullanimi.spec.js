///<reference types ="Cypress"/>

//wrap kullanilmadan , then fonksiyonu icindeki bir degiskeni baska bir yere tasiyamiyoruz,
//once Sar,sonra Tasi  
context("Then Yapisi" ,()=>{

    
    it("Wrap kullanimi" ,()=>{
        cy.visit("http://test.iyikisordun.com/pages/forms/general.html")

      let mail
        //invoke getAttribute gibi calisiyor.invoke('val') ve invoke('text')
        //Diger Attribute'ler bu sekilde=>      invoke('attr','type')
       cy.get("input#exampleInputEmail1").invoke('val').then((emailAdress)=>{ 
            mail=emailAdress
            cy.log(emailAdress)
            
           cy.wrap(emailAdress).as("newEmail") //!!Wrap then fonk.icinde olusturulmalidir.
                                               //wrap'in icine then 'deki isim TIRNAKSIZ yazilmalidir.
                                               //Wrap'tan sonra MUTLAKA as ile isim verilmelidir.
        })

       // cy.log(mail)//Degiskeni fonksiyonun disinda tanimlayinca da log bos kaliyor.
      
         
         //as ile olusturulan isim @kullanilarak cy.get ile cagirilir,then fonk.olusturulur ve devam...
         cy.get("@newEmail").then((email)=>{
             cy.log(email)
         })//Burayi  sadece yazdirmak icin kullandik.
        
        
        cy.visit("http://test.iyikisordun.com/pages/forms/validation.html")
        cy.pause()
        cy.get("@newEmail").then((email)=>{
            cy.get("input#exampleInputEmail1").type(email)
       }) 

       
        
    })
})