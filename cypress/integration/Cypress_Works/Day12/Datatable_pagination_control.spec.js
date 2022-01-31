///<reference types ="cypress"/>

        //regex101.com adresine gidilir
        //RegExp nesnesi, metni bir desenle eşleştirmek için kullanılır
        //[abc]Parantezler arasında herhangi bir karakter bulur
        //[0-9]Parantezler arasında herhangi bir rakami bulur;"[0-9]+" rakamlardan olusan kombinasyonlari(sayilari)verir.
        //g=ilk eşleşmeden sonra geri donme; durdurmak yerine tüm eşleşmeleri bulur
        //m=Test String kismina cok satırlı bir text girilmisse tum satirlari tara,eşleştirmeleri gerçekleştirir
        //i=Büyük/küçük harfe duyarsız eşleştirme gerçekleştirir
        //exec();"bizim belirledigimiz regex kuralini parantez icindeki text'e uygula ve eslesen kisimlari yakala"komutudur.

context("Datatable",()=>{
    //Datatable sayfalari arasinda gecis yapalim.
    it("Pagination Test Control",()=>{
        cy.visit("http://test.iyikisordun.com/pages/tables/data.html")

        const paginationPath ="#example2_paginate > ul>li"
        const trSayisiPath="[class] .card:nth-of-type(1) tbody >tr"
        const tableInfoPath="[class] .card:nth-of-type(1) [role='status']"
        let temp,toplamSatir=0

        const regex1 = RegExp('[0-9]+','gm') 
        
        cy.window().scrollTo("center")


        
        cy.get(paginationPath).then((buttonList)=>{
            for (var i =2; i < buttonList.length; i++) { //index 1=previous index 8=next old.icin tiklamiyoruz
                 temp=paginationPath+`:nth-of-type(${i})`
                     cy.get(temp).click({force:true}).wait(500) 
                
                
                cy.get(trSayisiPath).then((trSayisi)=>{
                    
                    toplamSatir  += trSayisi.length
                    cy.log(trSayisi.length,"sayfadaki toplam satir") 
                    cy.log(toplamSatir,"hesaplanan toplam satir")
                     
                     
                })
                 
            } 
        })
       
       //2.Task==>gorulen sayfa sayilarini gosteren Text'i(TableInfo) alip sayi kisimlarini cekelim
        let numberArray=[],
        tempArray=[]
         
       cy.get(tableInfoPath).invoke("text").then((tableInfoText)=>{
           cy.log(tableInfoText) //Showing 51 to 57 of 57 entries
           while ((tempArray = regex1.exec(tableInfoText)) !==null)   //belirledigimiz regex kuralin buradaki string uzerinede uygula
                numberArray.push(tempArray[0])
                
                
             const totalCount = numberArray[2]  //2.index ,numberArray'in 3.elemani
             cy.log(totalCount)
            assert.equal(totalCount,toplamSatir,"Total Count Kontrol")
           
         })
    })
})