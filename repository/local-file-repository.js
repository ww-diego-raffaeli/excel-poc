//local-file-repository.js

const Workbook = require('exceljs').Workbook
const path = require('path')

async function retrieve(fileName, sheetNames) {
    const filePath = path.join(__dirname, 'data/' + fileName)

    let wb
    try {
        wb = await new Workbook().xlsx.readFile(filePath)
    } catch (error) {
        console.error("Error trying to read file " + error)
    }

    return sheetNames.map((sheetName) => readSheet(wb,sheetName))
}

function readSheet(wb,sheetName) {
    const sheetContent = []
    wb.getWorksheet(sheetName).eachRow({includeEmpty: true}, function (row, rowNumber) {
        // avoid first element
        sheetContent.push(row.values.slice(1))
    })
    return {name: sheetName, rows: sheetContent}
}

module.exports = {retrieve}