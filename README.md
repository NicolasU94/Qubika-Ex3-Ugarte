# Qubika-Ex3-Ugarte

Qubika QA Automation Challenge Exercise 3. Cypress.js E2E Automation.

Exercise 3 requirements:
Instructions:
Choose an automation framework and automate the following workflow on the Qubika Sports
Club management website. This should be an e2e, automating the API and the UI side in the
same test.

1. Create a new user through API and save the user information. Find Qubika Sports Club
   Management System Swagger here.
2. Go to Qubika Sports Club Management System
3. Validate that the login page is displayed correctly (make any relevant validation that you
   consider necessary)
4. Log in with the created user
5. Validate that the user is logged in
6. Once the user is logged in:
   a) Go to the Category page
   b) Create a new category and validate that the category was created successfully
   c) Create a sub category and validate it is displayed in the Categories list.

This exercise should be delivered via a repository URL of your choice (Remember to make the
repository public or provide access). Additionally, in the project, you should include a README
file explaining the solution, why you chose that framework, detailing enhancements, and
providing instructions for running the tests.

🧪 Qubika Sports Club Cypress Test Suite
This repository contains an automated end-to-end Cypress test suite for the Qubika Sports Club Management System, covering API and UI workflows such as user registration, login, and category/subcategory creation. The automation was done in Cypress.js since the framework offers good options to build a solution that integrates API and UI automation in a modern language like js. The solution was done following guidelines and requirements in the Exercise 3 of the Qubika challenge as detailed above.

🚀 Setup Instructions

1. Clone the repository
   git clone https://github.com/NicolasU94/Qubika-Ex3-Ugarte.git
   cd Qubika-Ex3-Ugarte
2. Install dependencies
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

🧰 Project Structure
├── cypress
│ ├── e2e # All test specs
│ ├── support
│ │ ├── LoginPage.js # Page Object Model for login screen functionalities
│ │ ├── DashboardPage.js # Page Object Model for dashboard screen functionalities
│ │ ├── CategoriesPage.js# Page Object Model for categories screen functionalities
│ │ └── commands.js # Custom Cypress commands
├── cypress.config.js # Cypress configuration
├── package.json # NPM project metadata and scripts

⚙️ Recommended NPM Scripts (Optional)
You can add these to your package.json for convenience:

📄 Notes
This suite includes combined API and UI testing, as required by Exercise 3.

Ensure that the backend API (https://api.club-administration.qa.qubika.com) and web frontend are available before running tests.
