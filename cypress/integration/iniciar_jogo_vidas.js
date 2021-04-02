describe('Iniciar jogo com 3 vidas', () => {
    it('Iniciando jogo com 3 vidas', () => {
        cy.visit('../../index.html');
        cy.get('#vidas').select('3');
        cy.get('#botao-iniciar-jogo').click();
        cy.get('.area-infos-jogo-itens').contains('Vidas restantes: 3');
    })
})