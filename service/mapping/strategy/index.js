// index.js

const MSFTUsersFromBulkExampleStrategy = require('./MSFT-users-from-bulk-example-strategy')
const MSFTFinanceAssessmentsExtraction = require('./MSFT-Finance-assessments-extraction-strategy')

const strategiesByName = {
    [MSFTUsersFromBulkExampleStrategy.name]: MSFTUsersFromBulkExampleStrategy,
    [MSFTFinanceAssessmentsExtraction.name]: MSFTFinanceAssessmentsExtraction
}

module.exports = {strategiesByName}
