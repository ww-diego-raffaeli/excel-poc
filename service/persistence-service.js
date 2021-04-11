// persistence-service.js
const fse = require('fs-extra');

function persist(data) {
    // create an response folder

    // save results
    const date = new Date()
    const timestamp = date.getTime()
    const utcDate = date.toUTCString()
    fse.outputFileSync('outputs/' + timestamp + '/data.json', JSON.stringify(data))
    fse.outputFileSync('outputs/' + timestamp + '/' + utcDate, '')
}

module.exports = {persist}