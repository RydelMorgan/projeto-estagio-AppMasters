describe('authentication spec', () => {
  it('should interact with authentication process', () => {
    cy.intercept(
      'POST',
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp*'
    ).as('signupRequest')

    cy.visit('/')
    cy.get('#signup').click()
    cy.url().should('include', '/auth/signup')
    cy.get('#email').type('teste@exemplo.com')
    cy.get('#password').type('exemplo')
    cy.get('#submit').click()

    cy.wait('@signupRequest').then((interception) => {
      const { idToken } = interception?.response?.body

      cy.location('pathname').should('eq', '/')
      cy.get('#logout').click()
      cy.location('pathname').should('eq', '/')

      cy.get('#login').click()
      cy.url().should('include', '/auth/login')
      cy.get('#email').type('teste@exemplo.com')
      cy.get('#password').type('exemplo')
      cy.get('#submit').click()

      cy.location('pathname').should('eq', '/')
      cy.get('#logout').click()
      cy.location('pathname').should('eq', '/')

      cy.request({
        method: 'POST',
        url: `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${Cypress.env(
          'apiKey'
        )}`,
        body: {
          idToken: idToken,
        },
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    })
  })
  it('should return authentication errors', () => {

    //Sign Up
    cy.visit('/')
    cy.get('#signup').click()
    cy.url().should('include', '/auth/signup')
    
    cy.get('#submit').click()
    cy.contains('Formato de email inválido').should('be.visible')
    
    cy.get('#password').type('exemplo')
    cy.get('#submit').click()
    cy.contains('Faltando o email').should('be.visible')
    
    cy.get('#email').type('teste@exemplo.com')
    cy.get('#password').clear()
    cy.get('#submit').click()
    cy.contains('Faltando a senha').should('be.visible')

    cy.get('#password').type('12345')
    cy.get('#submit').click()
    cy.contains('Senha deve conter 6 caracteres').should('be.visible')


    cy.get('#back').click()
    cy.location('pathname').should('eq', '/')
    

    //Login
    cy.get('#login').click()
    cy.url().should('include', '/auth/login')
    
    cy.get('#submit').click()
    cy.contains('Formato de email inválido').should('be.visible')
    
    cy.get('#email').type('teste@exemplo.com')
    cy.get('#password').clear()
    cy.get('#submit').click()
    cy.contains('Faltando a senha').should('be.visible')
    
    cy.get('#password').clear()
    cy.get('#password').type('exemplo')
    cy.get('#submit').click()
    cy.contains('Não possui cadastro').should('be.visible')

    //Conta existente
    cy.intercept(
      'POST',
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp*'
    ).as('signupRequest')

    cy.get('#sign').click()
    cy.get('#email').type('teste@exemplo.com')
    cy.get('#password').type('exemplo')
    cy.get('#submit').click()

    cy.wait('@signupRequest').then((interception) => {
      const { idToken } = interception?.response?.body
          
      cy.location('pathname').should('eq', '/')
      cy.get('#logout').click()
      cy.location('pathname').should('eq', '/')

      cy.visit('/auth/signup')
      cy.get('#email').type('teste@exemplo.com')
      cy.get('#password').type('exemplo')
      cy.get('#submit').click()
      cy.contains('Email já encontrado no nosso servidor').should('be.visible')

      cy.get('#sign').click()
      cy.get('#email').type('teste@exemplo.com')
      cy.get('#password').type('123456')
      cy.get('#submit').click()
      cy.contains('Senha incorreta').should('be.visible')
      
      cy.request({
        method: 'POST',
        url: `https://identitytoolkit.googleapis.com/v1/accounts:delete?key=${Cypress.env(
          'apiKey'
        )}`,
        body: {
          idToken: idToken,
        },
      }).then((response) => {
        expect(response.status).to.equal(200)
      })
    })
  })
})
