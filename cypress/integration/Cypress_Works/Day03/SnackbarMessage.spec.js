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
            //cy.contains("kısa süre sonra kaybolacaktır").click()
            //get yada xpath yerine contains ile de tiklanabilir

            //3.yol text locater icin==>//div[normalize-space()=' '] kullanilabilir
            //textin bas ve sonundaki bosluklari siler 
            cy.xpath("//div[normalize-space()='Bu element kısa süre sonra kaybolacaktır.']")
          
            cy.get("#snackbar").should("include.text","kısa süre sonra kaybolacaktır.")// ?contains gibi
            cy.get("#snackbar").should("have.text","\n    \n        Bu element kısa süre sonra kaybolacaktır.\n    ")
           //! have.text=equals gibi
         //  cy.get("#snackbar").should("not.be.visible")

         
        })
        it.only("Snackbar message dogrulama",()=>{
            cy.visit("https://test.iyikisordun.com/pages/forms/general.html")

            cy.get("div:nth-child(3)>button").click()
            
            cy.get("#snackbar").as("Menu")
            cy.get("@Menu").should("include.text","kısa süre sonra kaybolacaktır.")
            cy.get("@Menu").should("have.text","\n    \n        Bu element kısa süre sonra kaybolacaktır.\n    ")
            cy.get("@Menu").should("not.be.visible")


        //!bir sure sonra kaybolan elementleri yakalamak icin kisayol olarak F8'e basilabilir
        //YADA  "INSPECT-SOURCE-EVENT LISTENER BERAKPOINTS" bolumunden klavye(keydown yada keyup)
        // veya mouse(click-double click vs.) tiklanarak 
    })

})