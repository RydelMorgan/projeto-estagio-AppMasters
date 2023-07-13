import { defineConfig } from 'cypress';
import 'dotenv/config';


export default defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      require('@cypress/code-coverage/task')(on, config);
      return config;
    },
    baseUrl: 'http://localhost:3000'
  },
  env: {
    apiKey: process.env.API_KEY
  }
});