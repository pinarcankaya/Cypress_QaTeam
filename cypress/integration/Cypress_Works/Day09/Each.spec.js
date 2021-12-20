//<reference types = "Cypress"/>

const urls = {
    "General": "https://test.iyikisordun.com/pages/UI/general.html",
    "Icons": "https://test.iyikisordun.com/pages/UI/icons.html",
    "Buttons": "https://test.iyikisordun.com/pages/UI/buttons.html",
    "Sliders": "https://test.iyikisordun.com/pages/UI/sliders.html",
    "Modals & Alerts": "https://test.iyikisordun.com/pages/UI/modals.html",
    "Navbar & Tabs": "https://test.iyikisordun.com/pages/UI/navbar.html", 
    "Timeline": "https://test.iyikisordun.com/pages/UI/timeline.html",
    "Ribbons": "https://test.iyikisordun.com/pages/UI/ribbons.html"
}

context('Each Kullanimi', () => {
    const emailInputXpath = "//input[@type='email']"
    const passwordInputXpath = "//input[@name='password']"
    const submitInputXpath = "//input[@type='submit']"

    it('Href Dogrulama', () => {
        //visit
        const baseUrl = "https://test.iyikisordun.com/"
        let buttonName, url
        cy.visit(baseUrl)

        //login
        cy.xpath(emailInputXpath).type('cypress_test_1@gmail.com')
        cy.xpath(passwordInputXpath).type('admin_123')
        cy.xpath(submitInputXpath).click()

        //each
        cy.get("ul[role='menu'] > li:nth-of-type(5) > .nav-link").click()
        cy.get("li:nth-of-type(5) > .nav.nav-treeview a").each((element, index, list) => {
           // cy.log("ElementName: " + element.text()," index:" + index, "elemanSayisi" + list.length)

            cy.wrap(element).should("have.attr", "href").then((href) => { //should href degerini dogruladik then ile href degerini al
                //cy.log(href) -->bütün href degerlerini ekranda gördük
                buttonName = element.children('p').text().trim() //p elementi icindeki texti aldik
                url = urls[buttonName]
                assert.equal(url, (baseUrl + href), "Href dogrulamasi  !") // url ile href degerlerinin icerigi
            })
        })
    })
})