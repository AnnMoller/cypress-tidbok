// ***********************************************************
// This example support/index.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

Cypress.clinicId = () => `SE-${Math.floor(Math.random() * 100000000000)}`;

// Alternatively you can use CommonJS syntax:
// require('./commands')
/*
const pg = require("pg");
const pool = /* initialize your database connection */;
//const pool = mysql.createPool(config) 

module.exports = (on) => {
    on("task", {
        querydb ({ sql, values }) {                
            return pool.query(statement);
        }
    });
}
