const { defineConfig } = require("cypress");
const path = require("path");
const fs = require("fs-extra");

module.exports = defineConfig({
  animationDistanceThreshold: 30,
  blockHosts: null,
  chromeWebSecurity: false,
  defaultCommandTimeout: 4000,
  env: {},
  execTimeout: 60000,
  fileServerFolder: "",
  fixturesFolder: "cypress/fixtures",
  hosts: null,
  modifyObstructiveCode: true,
  numTestsKeptInMemory: 50,
  pageLoadTimeout: 60000,
  port: null,
  projectId: "weqmci",
  reporter: "cypress-mochawesome-reporter",
  reporterOptions: {
    charts: true,
    reportDir: "cypress/reports",
    overwrite: false,
    html: true,
    json: true,
    timestamp: "ddmmyyyy_HHMMss",
    embeddedScreenshots: true,
    inlineAssets: true,
  },
  requestTimeout: 10000,
  responseTimeout: 30000,
  screenshotsFolder: "cypress/screenshots",
  taskTimeout: 60000,
  trashAssetsBeforeRuns: true,
  userAgent: null,
  video: false,
  videoCompression: 35,
  videoUploadOnPasses: true,
  videosFolder: "cypress/videos",
  viewportHeight: 1080,
  viewportWidth: 1920,
  waitForAnimations: true,
  watchForFileChanges: true,
  e2e: {
    // baseUrl: "https://www.demoblaze.com/", // You can set the baseUrl here instead

    setupNodeEvents(on, config) {
      require("cypress-mochawesome-reporter/plugin")(on);
      // All the config options are loaded from ""./cypress/config/<file>.json"
      function getConfigurationByFile(file) {
        const pathToConfigFile = path.resolve("./cypress/config", `${file}.json`);
        return fs.readJson(pathToConfigFile);
      }

      const file = config.env.configFile || "prod_env";
      return getConfigurationByFile(file);
    },
  },
});
