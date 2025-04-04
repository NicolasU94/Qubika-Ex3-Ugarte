class CategoriesPage {
  static getLastPageButton() {
    return cy.get(".page-link").eq(-2).scrollIntoView().wait(1500);
  }

  static getCreateCategoryButton() {
    return cy.get(".btn.btn-primary").contains("Adicionar");
  }

  // Get the "Add Category" modal
  static getAddCategoryModal() {
    return cy.get(".cdk-overlay-pane.custom-dialog-container");
  }

  // Get the category name input field
  static getCategoryNameInput() {
    return cy.get("input#input-username");
  }

  // Get the subcategory checkbox
  static getSubcategoryCheckbox() {
    return cy.get('input[type="checkbox"]');
  }

  // Get the subcategory input (select field with typeahead)
  static getSubcategoryInput() {
    return cy
      .contains(".row.my-3.ng-star-inserted", "Seleccione la categoría padre")
      .find("input");
  }

  static getAcceptBtn() {
    return cy.get('button[type="submit"]').contains("Aceptar");
  }

  static getLastRowName() {
    return cy.get("tr.ng-star-inserted").last().find("td").first();
  }

  static getLastRowParentCategory() {
    return cy.get("tr.ng-star-inserted").last().find("td").eq(1);
  }

  static createCategory(categoryName) {
    this.getCategoryNameInput().type(categoryName);
    this.getAcceptBtn().click();
  }
  static createSubCategory(categoryName, parentCategoryName) {
    this.getCategoryNameInput().type(categoryName);
    this.getSubcategoryCheckbox().check({ force: true });
    this.getSubcategoryInput().type(parentCategoryName).wait(1500);
    cy.get('ng-dropdown-panel[role="listbox"]')
      .find("span.ng-option-label.ng-star-inserted")
      .first()
      .click()
      .wait(1000);
    this.getAcceptBtn().click();
  }
}

export default CategoriesPage;
