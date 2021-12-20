// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-file-upload';

//!  bu method yuklenecek tum dosyalari resim dostasina cevirir
//  Cypress.Commands.add('UploadImage',(elementPath,imagePath,logoName)=>{
//      cy.fixture(imagePath).as('logo')
//      cy.get(elementPath).then(function(el){

//          const blob=Cypress.Blob.base64StringToBlob(this.logo,'image/png')
//          const file=new File([blob],logoName+ '.png',{type : 'image/png'})
//          const list=new DataTransfer()
//          list.items.add(file)
//          const myFileList=list.files
//          el[0].files=myFileList
//          el[0].dispatchEvent(new Event('change',{bubbles : true}))
//      })




Cypress.Commands.add('getIframe', (iframe) => {
    return cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then(cy.wrap);
})









Cypress.Commands.add("Login",(email=Cypress.env('username'),pass=Cypress.env('pass'))=>{

    const emailpath="input[name='username']"
    const passwordpath="input[name='password']"
    const submitpath="input[name='submit']"

   

    cy.ClearAndSendKeys(emailpath,email)   //!elementin pathi ve gonderilecek deger girilir
   // cy.get(emailpath).type(email)
    cy.ClearAndSendKeys(passwordpath,pass)
    //cy.get(passwordpath).type(pass)
    cy.ClickElement(submitpath)
   // cy.get(submitpath).click({force:true})

   

    cy.ClearAndSendKeys(emailpath,email)   //!elementin pathi ve gonderilecek deger girilir
    //cy.get(emailpath).type(email)
    cy.ClearAndSendKeys(passwordpath,pass)
  //  cy.get(passwordpath).type(pass)
    cy.ClickElement(submitpath)
   // cy.get(submitpath).click({force:true})


})
Cypress.Commands.add("ClearAndSendKeys",(elementpath,value)=>{  ///temizle ve gonder methodu
    const field=cy.get(elementpath).should("be.visible")
    field.clear()
    field.type(value)    
})

Cypress.Commands.add("ClickElement",(elementpath)=>{  // ! tikla
   cy.get(elementpath).click({force:true})
})










//elementi her zaman resim dosyasina cevirir
Cypress.Commands.add('UploadImage', (elementPath,imagePath,logoName)=>{
    cy.fixture(imagePath).as('logo') 
    cy.get(elementPath).then(function (el) {
    // convert the logo base64 string to a blob (logo base64 dizesini bir bloba dönüştürün)
    const blob=Cypress.Blob.base64StringToBlob(this.logo,'image/png')
    const file=new File([blob],logoName +'.png', {type:'image/png'})
    const list=new DataTransfer()
    list.items.add(file)
    const myFileList=list.files
    el[0].files=myFileList
    el[0].dispatchEvent(new Event('change',{bubbles:true }))

    })


   
})