// MSFT-users-from-bulk-example-strategy.js

const User = require('../../model/out/user')

const name = 'users_from_bulk_example'
const sheets = ['Users']

// expected headers
// "Email","First Name","Last Name","Role","Status","Organization","Business Process"
const EMAIL = "Email"
const FIRST_NAME = "First Name"
const LAST_NAME = "Last Name"
const ROLE = "Role"
const STATUS = "Status"
const ORGANIZATION = "Organization"
const BUSINESS_PROCESS = "Business Process"

//
const COMPANY_NAME = "Microsoft"

function apply(content) {

    console.log("Mapping Users with strategy " + name)

    // this strategy considers only the sheet 'Users'
    const rows = content.find(sheet => sheet.name === "Users").rows

    // first row should contains some description of each field meaning
    // second row should be row headers
    const rowHeaders = rows[1]

    return rows.slice(2)
        .map(row => mapLine(rowHeaders, row))
        .map(line => mapUser(line))
}

function mapLine(rowHeaders,rawRow) {
    const fields = []
    for (let i = 0; i < rowHeaders.length; i++) {
        fields.push({name: rowHeaders[i], value: rawRow[i]})
    }

    return fields
}

function mapUser(line) {
    const email = line.find(item => item.name === EMAIL).value
    const firstName = line.find(item => item.name === FIRST_NAME).value
    const lastName = line.find(item => item.name === LAST_NAME).value
    //const role = line.find(item => item.name === ROLE).value
    //const status = line.find(item => item.name === STATUS).value
    //const organization = line.find(item => item.name === ORGANIZATION).value
    //const business_process = line.find(item => item.name === BUSINESS_PROCESS).value

    const user = new User(email, firstName, lastName, COMPANY_NAME)
    console.log("User" + JSON.stringify(user) + " mapped from " + JSON.stringify(line))

    return user
}

module.exports = {name, sheets, apply}