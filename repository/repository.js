// repository.js

const s3Repository = require('./S3-repository')
const localRepository = require('./local-file-repository')

const Origin = {
    S3: 's3',
    LOCAL: 'local'
}

const repoStrategy = {
    [Origin.LOCAL]: localRepository,
    [Origin.S3]: s3Repository
}

/**
 * Retrieves file content
**/
async function retrieve(target) {
    const fileName = target.fileName
    const origin = target.origin
    const sheets = target.sheets
    console.log(`Retrieving file "${fileName}" from ${origin}`)
    const fileContent = await repoStrategy[origin].retrieve(fileName, sheets)

    return {
        fileName: fileName,
        content: fileContent
    }
}



module.exports.retrieve = retrieve