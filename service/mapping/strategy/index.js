// index.js

const MSFTUsersfromBulkExampleStrategy = require('./MSFT-users-from-bulk-example-strategy')

const strategiesByName = {
    [MSFTUsersfromBulkExampleStrategy.name]: MSFTUsersfromBulkExampleStrategy
}

module.exports = {strategiesByName}
