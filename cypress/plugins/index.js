/// <reference types="cypress" />
// ***********************************************************
// This example plugins/index.js can be used to load plugins
//
// You can change the location of this file or turn off loading
// the plugins file with the 'pluginsFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/plugins-guide
// ***********************************************************

// This function is called when a project is opened or re-opened (e.g. due to
// the project's config changing)

/**
 * @type {Cypress.PluginConfig}
 */

const fs=require('fs')
const path=require('path')


// eslint-disable-next-line no-unused-vars
// ! ilgili klasorun isimlerini uzantilariyla birlikte verir 
module.exports = (on, config) => {
  // `on` is used to hook into various events Cypress emits
  // `config` is the resolved Cypress config
  on('task',{
    GetAllFileNames(folderPath){
      files=[]
      fs.readdirSync(folderPath).forEach(file=>{
        files.push(file)
      });
      return files
    }
})

//  on('task',{
//    GetAllFileNames(folderPath){
//      deleteAllFileInTargetFolder(folderPath){
//        if(fs.existsSync(folderpath)){
//          fs.readdir(folderPath,(err,files)=>{
//            if (err) throw err;

//            for(const file of files){
//              fs.unlink(path.join(folderPath,file),err={
//                if (err) throw err;
//              });
//            }
//          });
//      }
//      return true
//    }
// })
 


}

const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')
module.exports = (on, config) => {
  on('task', {downloadFile})
}