/// <reference types="cypress"/>

describe( 'Cypress basics', () => {
    it('Should visit a page and assert title', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.title().should('to.be.equal', 'Campo de Treinamento')
        cy.title().should('contain', 'Campo')
    });

    it('Should find and interact with an element', () =>{
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('#buttonSimple')
            .click()
            .should('have.value', 'Obrigado!')
    });

    it('Find text with cypress', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('span').should('contain', 'Cuidado')
    });

    it('Find link with cypress', () => {
        cy.visit('https://wcaquino.me/cypress/componentes.html')
        cy.get('a').first().click()
        cy.get('#resultado').should('have.text', 'Voltou!')

        cy.reload()
        cy.get('#resultado').should('have.not.text', 'Voltou!')
        cy.contains('Voltar').click()
        cy.get('#resultado').should('have.text', 'Voltou!')
    });

}); 