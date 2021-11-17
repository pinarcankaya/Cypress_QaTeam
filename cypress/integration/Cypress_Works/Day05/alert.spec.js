///<reference types = "cypress"/>

context("Alert",()=>{
  
            it('alert test', ()=>{
    
                
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
               
            })
        
            it('accept alert Test', ()=> {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
                

            })   
    
            it('dismiss alert', ()=> {
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
             
            })
    
            it('entering text on the allert', () => {
    
                //3. buttom'a tikla (Click for JS Promt)
                //'Hi' yaz. Ok'e tikla
                cy.visit('https://the-internet.herokuapp.com/javascript_alerts')
        
              
            })
    
        })