import { defineConfig } from "cypress";

export default defineConfig({
    e2e: {
        baseUrl: 'https://laoevisa.gov.la',
        retries: {
            runMode: 3,
        },
        viewportHeight: 900,
        viewportWidth: 1600,
        video: false,
        screenshotOnRunFailure: false,
        // setupNodeEvents(on, config) {
        // implement node event listeners here
        // },
    },
});