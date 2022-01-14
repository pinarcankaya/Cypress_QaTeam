///<reference types ='Cypress'/>


context('Click',()=>{

    it('right click', ()=>{
    
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.contains("right click me").rightclick()
    })

    it('Double-Click', ()=>{
        
        cy.visit('https://demo.guru99.com/test/simple_context_menu.html')

        cy.contains("Double-Click Me To See Alert").dblclick()

        cy.on("window:alert",(str)=>{
            expect(str).to.equal('You double clicked me.. Thank You..')
        })
        
    })

    it.only('Drag and Drop 1.Yol',()=>{
        const dataTransfer=new DataTransfer
       
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')

        //Ilk olarak , sütun-a'nın 'A' kutusuna sahip olduğunu ve sütun-b'nin 'B' kutusuna sahip olduğunu kontrol ediyoruz.
        cy.get('div#column-a').should('have.text', 'A')
        cy.get('div#column-b').should('have.text', 'B')
         cy.pause()
        
        cy.get('div#column-a').trigger('dragstart',{dataTransfer});
         cy.get('div#column-b').trigger('drop',{dataTransfer});
        
         //After Drag and Drop column-a has 'B' and 'column-b' has 'A'
        
        cy.get('div#column-a').should('have.text', 'B')
        cy.get('div#column-b').should('have.text', 'A')

    
            

    })



    it('Drag and Drop 2.yol', ()=>{
        // 1) Terminalden: npm install --save-dev @4tw/cypress-drag-drop
        // 2) import '@4tw/cypress-drag-drop' //support commands.js
       
        cy.visit('https://the-internet.herokuapp.com/drag_and_drop')
  //Ilk olarak , sütun-a'nın 'A' kutusuna sahip olduğunu 
   //ve sütun-b'nin 'B' kutusuna sahip olduğunu kontrol ediyoruz.
        cy.get('div#column-a').should('have.text', 'A')
        cy.get('div#column-b').should('have.text', 'B')
     cy.pause()
    
    cy.get('div#column-a').drag('div#column-b')
    
     //After Drag and Drop column-a has 'B' and 'column-b' has 'A'
    
    cy.get('div#column-a').should('have.text', 'B')
    cy.get('div#column-b').should('have.text', 'A')

    })
   
      

    

    

})