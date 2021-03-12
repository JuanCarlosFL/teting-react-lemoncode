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
    const userInput = cy.get('input[name="user"]');
    const passwordInput = cy.get('input[name="password"]');

    userInput.type(user);
    passwordInput.type(password);
    // Assert
    userInput.should('have.value', user);
    passwordInput.should('have.value', password);
  });

});
