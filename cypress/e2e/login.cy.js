describe('Test de base', () => {
  it('affiche le site', () => {
    cy.visit('https://the-internet.herokuapp.com/login')
    cy.contains('Login Page').should('be.visible')
  })
})