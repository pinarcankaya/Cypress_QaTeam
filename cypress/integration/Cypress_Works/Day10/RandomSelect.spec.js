///<reference types ="Cypress"/>

var formElementValues ={
    email:"",
    pass:"",
    carname:""
}

context("Random Select",()=>{
    it("Select Box'ta random secilen elementin alinmasi",()=>{
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.get("input#exampleInputEmail1").type("cypress_test_1@gmail.com")
        cy.get("input#exampleInputPassword1").type("admin_123")
        cy.get(".select-selected").click()

        cy.get(".select-items>div").then((dropdownElement)=>{ //Dikkat!! Path aldiktan sonra tum secenekleri kapsamasi icin >div ekledi.
            dropdownElement=dropdownElement.length
            cy.log(dropdownElement)  //12
            //Bu 12 secenekten birini random secebilmek icin
            //Math.floor,Sayının ondalık değeri ne olursa olsun aşağı yuvarlama işlemini yapar.
            let randomSelect =Math.floor(Math.random()*(dropdownElement))+1
            cy.log(randomSelect)
             
            cy.get(`.select-items > div:nth-child(${randomSelect})`)
            .invoke("text").then((carNameText)=>{
                formElementValues.carname =carNameText
                cy.log(carNameText)
            })
            
            cy.get(`.select-items > div:nth-child(${randomSelect})`).click()
            cy.window().scrollTo("top") //sayfasin en ustune gider

            cy.get(".select-selected").invoke("text").then((carNameSelectText)=>{
                assert.equal(carNameSelectText , formElementValues.carname ,"Car Name Dogrulama")
            })

            cy.get("input#exampleInputEmail1").invoke("val").then((eMailAdresText)=>{
                cy.log(eMailAdresText)
                formElementValues.email = eMailAdresText
            })
             
            cy.get("input#exampleInputPassword1").invoke("val").then((passText)=>{
                formElementValues.pass =passText
                cy.log(passText)
                
            })
       })
    })

    ///jQuery, JavaScript kodu ve HTML öğeleri arasındaki etkileşimleri 
            //basitleştirmeye ve standartlaştırmaya yardımcı olan bir JavaScript kitaplığıdır.
    // JavaScript, web sitelerinin etkileşimli ve dinamik olmasını sağlar 
            //ve jQuery, bu süreci kolaylaştırmaya yardımcı olan bir araçtır.

    //Cypress otomatik olarak jQuery'yi içerir ve onu Cypress.$ olarak sunar.
})