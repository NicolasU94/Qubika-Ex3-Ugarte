class LoginPage {
  static getEmailField() {
    return cy.get('input[formcontrolname="email"]');
  }

  static getPasswordField() {
    return cy.get('input[formcontrolname="password"]');
  }

  static getLoginButton() {
    return cy.get('button[type="submit"]');
  }

  static login(email, password) {
    this.getEmailField().type(email);
    this.getPasswordField().type(password);
    this.getLoginButton().click();
  }
}

export default LoginPage;
