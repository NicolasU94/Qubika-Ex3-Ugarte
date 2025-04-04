const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://club-administration.qa.qubika.com", // Update with the actual base URL
    viewportWidth: 1280,
    viewportHeight: 720,
    defaultCommandTimeout: 25000,
    pageLoadTimeout: 25000,
    requestTimeout: 15000,
    retries: 0,
    video: true,
    setupNodeEvents(on, config) {
      // Implement any required Node events
    },
  },
});
