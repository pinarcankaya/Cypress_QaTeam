///<reference types ="Cypress"/>
//1.it=>> Datatable'in sutun isimlerinin gorunulurlugunu ve isimlerini dogrulayalim
//2.it=>>//Datatable'daki sutun genisliklerini cekip,dogrulayalim

//NOT::nth-of-type(), seçicisi sadece aynı tip elemanları seçer.
//th:nth-of-type($name$)Örneğinde, th elemanı ile aynı seviyedeki tüm th'leri seçmemizi sağlar.

var sutunGenislikleri = { //inspect'ten cekerek olusturuyoruz
    "Name": "width: 150px;",
    "Age": "width: 50px;",
    "Address": "width: 200px;",
    "Country": "width: 100px;",
    "Is Married": "width: 100px;"
}

context("Datatable", () => {
    const sutunSayisiPath = "#jsGrid1 > div.jsgrid-grid-header.jsgrid-header-scrollbar > table > tr.jsgrid-header-row >th"
    const sutunIsimleriPath = "#jsGrid1 > div.jsgrid-grid-header.jsgrid-header-scrollbar > table > tr.jsgrid-header-row >th:nth-of-type($name$)"

    //Datatable'in sutun isimlerinin gorunulurlugunu ve isimlerini dogrulayalim 
    it("Sutun isimlerini cekme ve dogrulama", () => {
        cy.visit("http://test.iyikisordun.com/pages/tables/jsgrid.html")

        cy.get(sutunSayisiPath).then((sutunSayisi) => {
            sutunSayisi = sutunSayisi.length
            cy.log(sutunSayisi)

            //1.YOL:Sutunlarin ismini yazdiralim
            //NOT:Mudahale etmek istedigimiz path'i ters tirnak icine alarak yaziyoruz
            for (let i = 1; i <= sutunSayisi; i++) {
                cy.get(`#jsGrid1 > div.jsgrid-grid-header.jsgrid-header-scrollbar > table > tr.jsgrid-header-row >th:nth-of-type(${i})`)
                    .invoke("text").then((sutunName) => {
                        cy.log(sutunName)
                    })

            }

            //NOT:replace();Path'in icinde degistirmek istedigimiz alani silip,istedigimiz veriyi girmemizi saglar.
            
            //2.YOL:Sutunlarin ismini yazdiralim(replace kullanimini ogrenelim)
            for (let i = 1; i <= sutunSayisi; i++) {
                let temp = sutunIsimleriPath.replace("$name$", i)  //temporary=gecici
                cy.get(temp).should("be.visible").invoke("text").then((sutunName) => {
                    cy.log(sutunName)
                })
            }
        //Mudahale edececegimiz path'i bir degiskenin icine almissak ya da page sayfasindan cagirarak kullaniyorsak;mudahale icin 
        //replace kullanmek zorunlu hale gelir.

        })
    })
    //Datatable'daki sutun genisliklerini cekip,dogrulayalim
    it.only("Sutun genisligi dogrulama", () => {
        cy.visit("http://test.iyikisordun.com/pages/tables/jsgrid.html")
        cy.get(sutunSayisiPath).then((sutunSayisi) => {
            sutunSayisi = sutunSayisi.length
            //  cy.log(sutunSayisi)

            for (let i = 1; i <= sutunSayisi; i++) {
                let temp = sutunIsimleriPath.replace("$name$", i)
                cy.get(temp).invoke("text").then((sutunName) => {
                    cy.get(temp).should("have.attr", "style", sutunGenislikleri[sutunName]) //sutunGenislikleri; yukaridaki blogun ismi
                    //Yukaridaki dogrulamada atrr'u cekip,expected degerlerle karsilastiriyoruz.
    //Not:Bir degisken bulogunda value lara ulasmak icin degiskenBlogununAdi[Key] seklinde bir yazim kullaniyoruz.
                    cy.log(sutunName)
                })
                
            }

            
        })
    })
})