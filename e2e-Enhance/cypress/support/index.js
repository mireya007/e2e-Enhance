// eslint-disable-next-line no-unused-vars
import { Given, When, Then, And } from 'cypress-cucumber-preprocessor/steps';
// Import commands.js using ES2015 syntax:
import './commands'


Cypress.on('uncaught:exception', (err, runnable) => false);

// Alternatively you can use CommonJS syntax:
// require('./commands')
