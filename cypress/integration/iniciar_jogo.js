describe('Iniciar jogo Campo Minado', () => {
    it('Iniciando jogo', () => {
        cy.visit('../../index.html');
        cy.get('#botao-iniciar-jogo').click();
        cy.get("#botao-salvar").contains('Salvar jogo');
    })
})