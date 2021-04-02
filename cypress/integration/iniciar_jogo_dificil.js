describe('Iniciar jogo Campo Minado Nível Difícil', () => {
    it('Iniciando jogo nível difícil', () => {
        cy.visit('../../index.html');
        cy.get('#nivel').select('Difícil');
        cy.get('#botao-iniciar-jogo').click();
        cy.get("#400");
    })
})