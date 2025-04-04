import LoginPage from "../support/LoginPage";
import DashboardPage from "../support/DashboardPage";

describe("Categories E2E Test", () => {
  let userData;

  before(() => {
    const email = `testuser${Date.now()}@example.com`;
    const payload = {
      email,
      password: "Test@1234",
      roles: ["ROLE_ADMIN"],
    };

    // Send API request to register user
    cy.request({
      method: "POST",
      url: "https://api.club-administration.qa.qubika.com/api/auth/register",
      body: payload,
      headers: { "Content-Type": "application/json" },
    }).then((response) => {
      expect(response.status).to.eq(201);
      expect(response.body.email).to.eq(payload.email);
      userData = {
        email: payload.email,
        password: payload.password,
      };
    });
  });

  it("should register a new user through the API and succesfully login using the registered credentials", () => {
    cy.visit("/"); // Navigate to the base URL
    cy.intercept("POST", "**/api/auth/login").as("loginRequest");

    // Assert that the login page URL is correct
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/auth/login"
    );
    cy.wrap(userData).should("not.be.null");
    cy.wrap(userData).should("not.be.undefined");

    // Perform login
    LoginPage.login(userData.email, userData.password);

    //Asserting the Response from the login API Call
    cy.wait("@loginRequest").its("response.statusCode").should("eq", 200);

    // Assert that after login, the URL is the dashboard
    cy.url().should(
      "eq",
      "https://club-administration.qa.qubika.com/#/dashboard"
    );
    DashboardPage.getDashboardNavButton().should("be.visible");
  });
});
