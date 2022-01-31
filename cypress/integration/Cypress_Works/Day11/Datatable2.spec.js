///<reference types ="Cypress"/>

//:nth-child()aynı seviyedeki tum elemanlarını seçmek için kullanılır.
//Parantez icine,rakam,odd,even yada ${i} yazilarak siniflandirma yapilabilir


//Datatable'in sutun isimlerinin gorunulurlugunu ve isimlerini dogrulayalim
context("Datatable", () => {
    it("Search islemi", () => {
        cy.visit("http://test.iyikisordun.com/pages/tables/data.html")
        cy.get("select[name='example1_length']").scrollIntoView()

        // cy.pause()
        cy.get("select[name='example1_length']").select("100")
        cy.get("#example1 > tbody >tr").then((satirSayisi) => {
            satirSayisi = satirSayisi.length
            cy.log(satirSayisi)
            cy.get("#example1 > tbody >tr").should("have.length", "57")


            for (let i = 1; i <= satirSayisi; i++) {

                cy.get(`#example1 > tbody > tr:nth-child(${i}) > td:nth-child(2)`)
                    .invoke("text").then((browserName) => {
                        cy.log(browserName)
                        // cy.get("#example1_filter [aria-controls]").type(browserName)
                        //Ustteki satir ,input alanini silip yenisini ekleyemedigi icin hata veriyor.

                        cy.ClearAndSendKeys("#example1_filter [aria-controls]", browserName)
                        cy.wait(1000)
                        cy.get("#example1 > tbody>tr").should("have.length", "1")  //Assert 1.yol
                        cy.get("#example1 > tbody").find("tr").should("have.length", "1")  //Assert 2.yol
                        cy.get("#example1_filter > label > input").clear()
                    })

            }



        })

    })
})