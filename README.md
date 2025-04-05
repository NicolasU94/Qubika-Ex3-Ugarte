# 📘 Qubika-Ex3-Ugarte

## Qubika QA Automation Challenge – Exercise 3

**Framework:** Cypress.js  
**Author:** Nicolas Ugarte

---

## 📝 Challenge Requirements

> **Automate the following end-to-end flow (UI + API combined) for the Qubika Sports Club Management System.**

1. ✅ Create a new user via API and save the user information.
2. ✅ Navigate to the [Qubika Sports Club Management System](https://club-administration.qa.qubika.com).
3. ✅ Validate that the login page is displayed correctly.
4. ✅ Log in using the newly created user.
5. ✅ Validate successful login.
6. ✅ After login:
   - Go to the Category page
   - Create a new **Category** and validate its creation
   - Create a **Subcategory** and ensure it appears correctly in the list

> 👉 Swagger documentation for the API is available [here](https://api.club-administration.qa.qubika.com/swagger-ui.html).

---

## 🧪 Qubika Sports Club Cypress Test Suite

This project contains Cypress E2E automation for the Qubika Sports Club Management System.

It uses **Cypress.js** because it provides modern, developer-friendly tooling with strong support for **both UI and API automation** in the same test flow. This made it ideal for the hybrid requirements of Exercise 3.

---

## 🚀 Setup Instructions

### 1. Clone the Repository

git clone https://github.com/NicolasU94/Qubika-Ex3-Ugarte.git
cd Qubika-Ex3-Ugarte 2. Install dependencies
npm install

🧪 Running Tests
Run Cypress in interactive mode:
npx cypress open

This opens the Cypress Test Runner, where you can manually run your test specs.

Run Cypress in headless mode (CI-friendly):
npx cypress run
You’ll see results directly in your terminal, and videos/screenshots (if configured) will be saved in the cypress/videos and cypress/screenshots folders.

Run Specific specs in headless mode:

To run the CategoriesE2E Spec
npx cypress run --spec "cypress/e2e/login.cy.js,cypress/e2e/CategoriesE2E.cy.js

To run the LoginE2E Spec
npx cypress run --spec "cypress/e2e/login.cy.js,cypress/e2e/LoginE2E.cy.js

## 📁 Project Structure

```bash
Qubika-Ex3-Ugarte/
├── cypress/
│   ├── e2e/                       # Test spec files
│   │   ├── LoginE2E.cy.js         # Login test
│   │   └── CategoriesE2E.cy.js    # Main test: category + subcategory
│   ├── support/
│   │   ├── LoginPage.js           # Page Object Model for Login page
│   │   ├── DashboardPage.js       # Page Object Model for Dashboard page
│   │   └── CategoriesPage.js      # Page Object Model for Categories page
│   └── commands.js                # (Optional) Custom Cypress commands
├── cypress.config.js              # Cypress configuration file
├── package.json                   # Project metadata and test scripts
└── README.md                      # Documentation and setup instructions

📄 Notes
This suite includes combined API and UI testing, as required by Exercise 3.

Ensure that the backend API (https://api.club-administration.qa.qubika.com) and web frontend are available before running tests.
```
