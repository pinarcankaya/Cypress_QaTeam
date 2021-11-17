/// <reference types = "Cypress"/>


    context("Snackbar Message",()=>{

        const email="cypress_test_1@gmail.com"
        const password="admin_123"

        it("Login Senaryosu",()=>{
        cy.visit("https://test.iyikisordun.com/index.php")
         cy.get("[type='email']").type(email)
         cy.get("[type='password']").type(password)
         cy.get(".btn").click()
        })

        it("Snackbar message dogrulama",()=>{
            cy.visit("https://test.iyikisordun.com/pages/forms/general.html")
            cy.get("div:nth-child(3)>button").click()
            cy.get("#snackbar").should("be.visible")  //isdisplay
         //  cy.get("#snackbar").should("include.text","kısa süre sonra kaybolacaktır.")// ?contains gibi
            cy.get("#snackbar").should("have.text","\n    \n        Bu element kısa süre sonra kaybolacaktır.\n    ")
           //! have.text=equals gibi
           cy.get("#snackbar").should("not.be.visible")
        })
    })