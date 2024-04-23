const { default: preprocessor } = require('cypress-cucumber-preprocessor');

const cucumber = require('cypress-cucumber-preprocessor').default 

module.exports = (on, config) => {
    on('file:preprocessor', cucumber()) 
};
