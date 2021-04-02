describe('Reiniciar jogo Campo Minado', () => {
    it('Reiniciar jogo', () => {
        cy.visit('../../index.html');
        cy.get('#botao-iniciar-jogo').click();
        cy.get("#botao-reiniciar").click();
        cy.on('window:alert', (str) => {
            expect(str).to.equal(`Ao iniciar um novo jogo, você perderá sua partida salva! Continuar?`)
          });
    })
})