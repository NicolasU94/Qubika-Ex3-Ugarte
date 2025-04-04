class DashboardPage {
  static getUserProfileIcon() {
    return cy.get(".user-profile-icon", { timeout: 10000 }); // Wait for profile icon
  }

  static getDashboardNavButton() {
    return cy.get("#sidenav-collapse-main a").contains("Dashboard");
  }

  static getCategoriesMenu() {
    return cy.get("#sidenav-collapse-main a").contains("Categorias");
  }

  static navigateToCategories() {
    this.getCategoriesMenu().click();
  }
}

export default DashboardPage;
