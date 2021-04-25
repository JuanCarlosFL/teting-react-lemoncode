describe('Login specs', () => {
  it('visit hte login page', () => {
    cy.visit('/');
  });

  it('should name input has the focus when it clicks on it', () => {
    // Arrange
    const user = 'admin';
    const password = '1234';
    // Act
    cy.visit('/');
    cy.findAllByRole('input').as('input');

    cy.get('@input[0]').type(user);
    cy.get('@input[1]').type('password');
    // Assert
    cy.get('@input').should('have.value', user);
    cy.get('@input').should('have.value', password);
  });

});
