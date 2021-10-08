const customersPath = require('./customers.path').customers;
const authsPath = require('./auths.path').auths
module.exports = {
    paths: {
        ...authsPath,
        ...customersPath
    }
}