// index.js

const usersFromBulkExampleStrategy = require('./users-from-bulk-example-strategy')
const MSFTFinanceAssessmentsExtraction = require('./MSFT-Finance-assessments-extraction-strategy')

const strategiesByName = {
    [usersFromBulkExampleStrategy.name]: usersFromBulkExampleStrategy,
    [MSFTFinanceAssessmentsExtraction.name]: MSFTFinanceAssessmentsExtraction
}

module.exports = {strategiesByName}
