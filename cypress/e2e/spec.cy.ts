
describe('games spec', () => {
  it('should filter by title', () => {

    cy.fixture('request.json').then((json) => {
      cy.intercept('*data', {
          statusCode: 200,
          body: json,
      });
    });

    cy.visit('/')
    
    cy.get('#search').type('exemplo de jogo 1')
    cy.get('#search-option-0').click()

    cy.contains("Exemplo de Jogo 1").should("be.visible")
    cy.contains("Exemplo de Jogo 2").should("not.exist")
    cy.contains("Exemplo de Jogo 3").should("not.exist")

    cy.get('.MuiAutocomplete-clearIndicator').click()

    cy.contains("Exemplo de Jogo 1").should("be.visible")
    cy.contains("Exemplo de Jogo 2").should("be.visible")
    cy.contains("Exemplo de Jogo 3").should("be.visible")

  })

  it('should filter by genre', () => {

    cy.fixture('request.json').then((json) => {
      cy.intercept('*data', {
          statusCode: 200,
          body: json,
      });
    });

    cy.visit('/')
    
    cy.get('#genero0').click()

    cy.contains("Exemplo de Jogo 1").should("be.visible")
    cy.contains("Exemplo de Jogo 2").should("not.exist")
    cy.contains("Exemplo de Jogo 3").should("be.visible")

    cy.get('#genero1').click()

    cy.contains("Exemplo de Jogo 1").should("be.visible")
    cy.contains("Exemplo de Jogo 2").should("be.visible")
    cy.contains("Exemplo de Jogo 3").should("be.visible")

    cy.get('#genero0').click()

    cy.contains("Exemplo de Jogo 1").should("not.exist")
    cy.contains("Exemplo de Jogo 2").should("be.visible")
    cy.contains("Exemplo de Jogo 3").should("not.exist")

    cy.get('#genero1').click()

    cy.contains("Exemplo de Jogo 1").should("be.visible")
    cy.contains("Exemplo de Jogo 2").should("be.visible")
    cy.contains("Exemplo de Jogo 3").should("be.visible")
  })

  it('should show server error message', () => {

    [500, 502, 503, 504, 507, 508 ,509].forEach(statusCode => {

        cy.intercept('*data', {
          statusCode: statusCode,
        });


        cy.visit('/')

        cy.contains("O servidor falhou em responder, tente recarregar a página").should("be.visible")
      }
    )
  })

  it('should show timeout error message', () => {

    cy.intercept('*data', {
      statusCode: 200,
      delay: 5000
    });

    cy.visit('/')

    cy.wait(3000)

    cy.contains("O servidor demorou para responder, tente mais tarde").should("be.visible")
  })

  it('should show default error message', () => {

    [501, 505, 506, 400, 403, 404].forEach(statusCode => {

        cy.intercept('*data', {
          statusCode: statusCode,
        });


        cy.visit('/')

        cy.contains("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde").should("be.visible")
      }
    )
  })
  
  it('should show default error message if no response body', () => {

      cy.intercept('*data', {
          statusCode: 200,
      });

      cy.visit('/')

      cy.contains("O servidor não conseguirá responder por agora, tente voltar novamente mais tarde").should("be.visible")
  })

  it('should show loader', () => {

    cy.fixture('request.json').then((json) => {
      cy.intercept('*data', {
          statusCode: 200,
          body: json,
          delay: 500
      });
    });

    cy.visit('/')

    cy.get('#loader').should("be.visible")

    cy.contains("Exemplo de Jogo 1").should("be.visible")
    cy.get('#loader').should("not.exist")

  })



})