const { defineConfig } = require('cypress');

module.exports = defineConfig({
  video: false,
  defaulCommandTimeout: 5000,
  pageLoadTimeout: 10000,
  IgnoreTestFiles: ['*,js', '*md'],

  "Testiles": "**/*.feature",
  "pluginsFile": "cypress/plugins/index.js",
});


