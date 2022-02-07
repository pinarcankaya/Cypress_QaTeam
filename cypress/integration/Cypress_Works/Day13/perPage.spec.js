///<reference types ="cypress"/>

context("Per Page", () => {
    
    it("Datatable per page kontrol", () => {
        const perPage = "10" //select icinde de kullanmak icin String olarak olusturduk,Show ...entries kismindaki diger sayilardaalinabilir.
        cy.visit("http://test.iyikisordun.com/pages/tables/data.html")
        cy.get("#example1_length > label > select").select(perPage)
        cy.get("#example1_info").invoke("text").then((totalCount) => {
            totalCount = totalCount.trim()
             cy.log(totalCount)
            totalCount = totalCount.split(" ")
             cy.log(totalCount)
             cy.log(totalCount[totalCount.length-2])
            totalCount = totalCount[totalCount.length - 2]



            let lastPage = totalCount % parseInt(perPage)
            cy.wrap(lastPage).as("lastPage")
             cy.log(lastPage)
        })
        
        
        
        cy.get("#example1_paginate > ul >li").then((sayfaSayisi) => {
             sayfaSayisi = sayfaSayisi.length
             for (let i = 2; i < sayfaSayisi ; i++) {
                 cy.get(`#example1_paginate > ul >li:nth-of-type(${i})`).click()
                 if (sayfaSayisi - 1 == i)
                     cy.get("@lastPage").then((lastPage) => {
                         cy.get("#example1 > tbody").find("tr").should("have.length", lastPage)
                     })
                 else {
                    cy.get("#example1 > tbody").find("tr").should("have.length", parseInt(perPage))
                }
            }
        })

    })
}) 