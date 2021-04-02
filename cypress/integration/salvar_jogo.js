describe('Iniciar jogo Campo Minado', () => {
    it('Iniciando jogo', () => {
        cy.visit('../../index.html');
        cy.get('#botao-iniciar-jogo').click();
        cy.get('#41').click();
        cy.get('#botao-salvar').click();
        cy.get('#botao-continuar').click();
        cy.get('#41.celula-fechada').should('not.exist');
    })
})