// MSFT-Finance-assessments-extraction-strategy.js

const Assessment = require('../../model/out/assessment').Assessment
const header = require('./expected-headers').OneTrustSourceData_MSFT_Finance_assessments_extraction_Header

const name = 'MSFT-Finance_assessments_extraction'
const sheets = ['OneTrust Source Data', 'WW Template Mapping']

function apply(content) {

    console.log("Mapping Assessments with strategy " + name)

    const assessmentRows = content.find(sheet => sheet.name === 'OneTrust Source Data').rows

    // first row is the 'Column ID' cell values on 'WW Template Mapping' sheet
    const columnIDValues = assessmentRows[0]

    // second row should be row headers
    const rowHeaders = assessmentRows[1]

    return assessmentRows.slice(2)
        .map(row => mapLine(rowHeaders, row))
        .map(line => mapEntity(line))
}

function mapLine(rowHeaders, rawRow) {
    let line = {}
    for (let i = 0; i < rowHeaders.length; i++) {
        line[rowHeaders[i]] = rawRow[i]
    }

    return line
}

function mapEntity(line) {
    const externalId = line[header.ID]
    const name = line[header.NAME]
    const templateId = line[header.TEMPLATE]
    const owner = line[header.CREATOR]
    const status = 'completed'
    const respondents = [line[header.RESPONDENT]]
    const reviewers = line[header.APPROVER]
    const lastestUpdated = '' // TODO find field mapping
    const created = line[header.DATE_CREATED]

    const assessment = new Assessment(externalId, name, templateId, owner, status, respondents, reviewers, lastestUpdated, created, [])
    console.log("Entity " + JSON.stringify(assessment) + " mapped from " + JSON.stringify(line))

    return assessment

}

module.exports = {name, sheets, apply}