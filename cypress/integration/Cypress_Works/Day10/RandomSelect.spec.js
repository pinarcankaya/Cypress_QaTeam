///<reference types ="Cypress"/>

var formElementValues = {
    email: "",
    pass: "",
    carname: ""
}

context("Random Select", () => {
    it("Select Box'ta random secilen elementin alinmasi", () => {
        cy.visit("http://test.iyikisordun.com/pages/UI/ribbons.html")
        cy.get("input#exampleInputEmail1").type("cypress_test_1@gmail.com")
        cy.get("input#exampleInputPassword1").type("admin_123")
        cy.get(".select-selected").click()

        //**Oncelikle dropdown'daki eleman sayisini bulalim.
        cy.get(".select-items>div").then((dropdownElement) => { //Dikkat!! Path aldiktan sonra tum secenekleri kapsamasi icin >div ekledi.
            dropdownElement = dropdownElement.length
            cy.log(dropdownElement)  //12

            //Bu 12 secenekten birini random secebilmek icin
            // Math.floor,Sayının ondalık değeri ne olursa olsun aşağı yuvarlama işlemini yapar.let d = Math.floor(5.1);
            // Returns a random integer from 0 to 10:  Math.floor(Math.random() * 11);

            //**Random sayi olusturma yontemi:    
            let randomSelect = Math.floor(Math.random() * (dropdownElement)) + 1
            cy.log(randomSelect)

            //:nth-child(n)  üst öğesinin türünden bağımsız olarak n'inci çocuğu olan öğeyi seçmek için seçicisidir.
            //ORN:li index değeri çift olanlar,   li:nth-child(even),li index değeri tek olanlar,    li:nth-child(odd)
            //:nth-child(5n+3) gibi bir kullanımla 3’üncü index değerinden başla 5’er 5’er atlayarak uygula denmektedir

            //**Random sayiyi istedigimiz path'in icinde kullanarak rastgele bir isim seciyoruz.    
            //NOT:Mudahale etmek istedigimiz path'i ters tirnak icine alarak yaziyoruz
            cy.get(`.select-items > div:nth-child(${randomSelect})`)//Ters tirnaga dikkat
                .invoke("text").then((carNameText) => {
                    formElementValues.carname = carNameText
                    cy.log(carNameText)
                })


            cy.pause()
            cy.get(`.select-items > div:nth-child(${randomSelect})`).click()
            cy.window().scrollTo("top") //sayfasin en ustune gider



            //  //Asagida, yukaridakilerden bagimsiz en ustte olusturulan degisken grubunun ici aktif olarak dolduruluyor
            cy.get(".select-selected").invoke("text").then((secilenAraba) => {
                assert.equal(secilenAraba, formElementValues.carname, "Car Name Dogrulama")
            })

            cy.get("input#exampleInputEmail1").invoke("val").then((eMailAdresText) => {
                cy.log(eMailAdresText)
                formElementValues.email = eMailAdresText
            })

            cy.get("input#exampleInputPassword1").invoke("val").then((passText) => {
                formElementValues.pass = passText
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