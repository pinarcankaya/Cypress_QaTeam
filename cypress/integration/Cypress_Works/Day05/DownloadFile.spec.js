
/// <reference types = "Cypress"/>




describe('Example to demonstrate file download in cypress', function () {

    it('File Download using cypress-downloadfile npm package', () => {
        cy.downloadFile('https://www.learningcontainer.com/wp-content/uploads/2020/04/sample-text-file.txt',
            'cypress/fixtures/Download', 'LoremText.txt')
        cy.readFile('cypress/fixtures/Download/LoremText.txt').should('contain', 'Lorem ipsum dolor sit amet')    
    })

    //2.ornek
    it('downlaod file in mentioned dir', () => {
               cy.downloadFile('https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg','cypress/fixtures/Download',
               'cypress-example.jpg')
               cy.readFile("cypress/fixtures/Download/cypress-example.jpg")
             })
            })

//1.adim  ==>Terminale asagidaki komutu yaz
//npm install --save -dev cypress-downloadfile
//2.adim  ==>cypress/support/commands.js 'e asagidaki komutu yaz
//require('cypress-downloadfile/lib/downloadFileCommand')

//3.adim  ==>cypress/plugins/index.js''e asagidaki komutu yaz
//const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
//module.exports = (on, config) => {
//  on('task', {downloadFile})
//}


//fixtures icine kayit eder