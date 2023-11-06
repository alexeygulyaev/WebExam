const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://80.69.180.108:8441",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
