describe('Login page', () => {
  it('Should show a error message when throw an error', () => {
    cy.visit('http://localhost:5173/login')
    cy.get('[data-cy="submit"]').click()
    cy.wait(10000)
    cy.get('[data-cy="error-message"]').should('exist')
  })
})