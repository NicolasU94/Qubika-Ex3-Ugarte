import LoginPage from "../support/LoginPage";
import DashboardPage from "../support/DashboardPage";
import CategoriesPage from "../support/CategoriesPage";

describe("Categories E2E Test", () => {
  //Defining Constants and variables
  const TEST_EMAIL = "test.qubika@qubika.com";
  const TEST_PASS = "12345678";
  const CAT_NAME = "Cy1337Cat";
  const SUBCAT_NAME = "Cy1337SubCat";
  let categoryId;
  let subCategoryId;

  beforeEach(() => {
    cy.visit("/");
  });

  it("Logs in and successfully creates a new category", () => {
    cy.intercept("POST", "**/api/auth/login").as("loginRequest");

    // Assert that the login page URL is correct
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/auth/login"
    );

    // Perform login
    LoginPage.login(TEST_EMAIL, TEST_PASS);

    //Asserting the Response from the login API Call
    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

    // Assert that after login, the URL is the dashboard
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/dashboard"
    );
    DashboardPage.getDashboardNavButton().should("be.visible");
    DashboardPage.navigateToCategories();
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/category-type"
    );
    CategoriesPage.getCreateCategoryButton().should("be.visible").click();
    CategoriesPage.getAddCategoryModal().should("be.visible");

    //Intercepting the Create Request
    cy.intercept("POST", "**/api/category-type/create").as("createCategory");

    CategoriesPage.createCategory(CAT_NAME);
    cy.wait("@createCategory").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      const CREATED_CAT = interception.response.body;
      categoryId = CREATED_CAT.id;
      expect(CREATED_CAT.name).to.eq(CAT_NAME);
    });
    cy.wait(1500);
    CategoriesPage.getLastPageButton().wait(500).click();
    CategoriesPage.getLastRowName().should("contain", CAT_NAME);
    CategoriesPage.getAddCategoryModal().should("not.exist");
  });

  it("logs in and successfully creates a new subcategory", () => {
    cy.intercept("POST", "**/api/auth/login").as("loginRequest");

    // Assert that the login page URL is correct
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/auth/login"
    );

    // Perform login
    LoginPage.login(TEST_EMAIL, TEST_PASS);

    //Asserting the Response from the login API Call
    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

    // Assert that after login, the URL is the dashboard
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/dashboard"
    );
    DashboardPage.getDashboardNavButton().should("be.visible");
    DashboardPage.navigateToCategories();
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/category-type"
    );
    CategoriesPage.getCreateCategoryButton().should("be.visible").click();
    CategoriesPage.getAddCategoryModal().should("be.visible");

    cy.intercept("POST", "**/api/category-type/create").as("createSubCategory");
    CategoriesPage.createSubCategory(SUBCAT_NAME, CAT_NAME);
    cy.wait("@createSubCategory").then((interception) => {
      expect(interception.response.statusCode).to.eq(200);
      const CREATED_SUBCAT = interception.response.body;
      subCategoryId = CREATED_SUBCAT.id;
      expect(CREATED_SUBCAT.name).to.eq(SUBCAT_NAME);
      expect(CREATED_SUBCAT.root).to.eq(false);
    });
    CategoriesPage.getLastPageButton().click();
    CategoriesPage.getLastRowName().should("contain", SUBCAT_NAME);
    CategoriesPage.getLastRowParentCategory().should("contain", CAT_NAME);
  });

  //     //* Below code will be commented to avoid unnecessary requests being run
  //After block to perform necessary cleanups
  //   after(() => {
  //     Cleanup Requests to delete the categories and Subcategories created during tests
  //     if (subCategoryId) {
  //       cy.request({
  //         method: "DELETE",
  //         url: `https://api.club-administration.qa.qubika.com/api/category-type/delete/${subCategoryId}`,
  //         headers: { "Content-Type": "application/json" },
  //         failOnStatusCode: false,
  //       }).then((response) => {
  //         expect(response.status).to.eq(401);
  //       });
  //     }

  //     if (categoryId) {
  //       cy.request({
  //         method: "DELETE",
  //         url: `https://api.club-administration.qa.qubika.com/api/category-type/delete/${categoryId}`,
  //         headers: { "Content-Type": "application/json" },
  //         failOnStatusCode: false,
  //       }).then((response) => {
  //         expect(response.status).to.eq(401);
  //       });
  //     }
  //   });
});
