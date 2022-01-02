class  loginPage{
    //Bu sayfa TestNJ'deki Page sayfalari gibi kullanilir.

    emailInput(){
        return cy.get("input[name='username']")
    }

    passwordInput(){
        return cy.get("input[name='password']")
    }

    submitButton(){
        return cy.get("input[name='submit']") 
    }

    dasbord(){
        return cy.get('.m-0.text-dark')
    }


}

export default loginPage
