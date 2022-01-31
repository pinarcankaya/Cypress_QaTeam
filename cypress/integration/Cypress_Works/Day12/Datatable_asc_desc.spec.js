///<reference types ="Cypress"/>
//Datatable'in sutun isimlerinin gorunulurlugunu ve isimlerini dogrulayalim
// ASC artan, DESC azalan sıralamayı ifade eder.

context("Datatable",()=>{
    it("ASC ile siralanmis sutundaki verileri dogrulama",()=>{
        cy.visit("http://test.iyikisordun.com/pages/tables/data.html")
        cy.pause()
        cy.get("#example2 > thead > tr > th:nth-child(2)").click()

     cy.pause()
        let liste=[]
        cy.get("#example2 > tbody >tr").then((satirSayisi)=>{  
            satirSayisi=satirSayisi.length
            // cy.log(satirSayisi)
            for (let i = 1; i <=satirSayisi; i++) {
                cy.get(`#example2 > tbody > tr:nth-child(${i}) > td:nth-child(2)`)
                .invoke("text").then((names)=>{
                    liste.push(names)
                    cy.log(names)
                })
                cy.wrap(liste).as("liste")
            }

        })



        cy.get("@liste").then((liste)=>{
            let sortListe =[...liste]  //listeyi klonluyoruz
             //cy.log(liste)
            // cy.log(sortListe)
            sortListe.sort(new Intl.Collator("en").compare) //Intl.Collator nesnesi, dile duyarlı dize karşılaştırmasına olanak tanır.compare=karşılaştırmak

           assert.equal(JSON.stringify(liste),JSON.stringify(sortListe),"Siralama dogrulama")
          // JSON.stringify() yöntemi, bir JavaScript nesnesini veya değerini bir JSON dizesine dönüştürür.stringify=dizmek
        })

        
    })

    it.only("DESC ile siralanmis sutundaki verileri dogrulama",()=>{
        cy.visit("http://test.iyikisordun.com/pages/tables/data.html")
      //  cy.pause()
        cy.get("#example2 > thead > tr > th:nth-child(2)").click()
        cy.get("#example2 > thead > tr > th:nth-child(2)").click()
        let liste=[]
        cy.get("#example2 > tbody >tr").then((satirSayisi)=>{  
            satirSayisi=satirSayisi.length
            // cy.log(satirSayisi)
            for (let i = 1; i <=satirSayisi; i++) {
                cy.get(`#example2 > tbody > tr:nth-child(${i}) > td:nth-child(2)`)
                .invoke("val").then((names)=>{
                    liste.push(names)
                    cy.log(names)
                })
                cy.wrap(liste).as("liste")  //Wrap for icinde olusturdugumuz ve liste icine attigimiz isimleri 
                //baska bir yerde de kullanmamizi sagliyor.
            }
           
        })
        cy.get("@liste").then((liste)=>{
            let sortListe =[...liste]  //listeyi klonluyoruz
             //cy.log(liste)
            // cy.log(sortListe)
            sortListe.sort(new Intl.Collator("en").compare) //Intl.Collator nesnesi, dile duyarlı dize karşılaştırmasına olanak tanır.compare=karşılaştırmak
            sortListe.reverse()
           assert.equal(JSON.stringify(liste),JSON.stringify(sortListe),"Siralama dogrulama")
           
          // JSON.stringify() yöntemi, bir JavaScript nesnesini veya değerini bir JSON dizesine dönüştürür.stringify=dizmek
        })

        
    })
})
//Intl.Collator ORNEKLERI
//console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('de').compare));
// expected output: ["a", "ä", "z", "Z"]

//console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('sv').compare));
// expected output: ["a", "z", "Z", "ä"]

//console.log(['Z', 'a', 'z', 'ä'].sort(new Intl.Collator('de', { caseFirst: 'upper' } ).compare));
// expected output: ["a", "ä", "Z", "z"]