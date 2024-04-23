const cucumber = require ('cypress - cucumber- preprocessor').default

module.exports = (on, congig) => {
    on('file:preprocessor', cucumber)
}