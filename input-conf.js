// input-conf.js

const FileName = {
    MICROSOFT_EXAMPLE_FILE: 'Example Batch Upload File - Microsoft Only.xlsx'
}

const ExtractionStrategy = {
    USERS_FROM_BULK: 'users_from_bulk_example'
}

const Origin = {
    S3: 's3',
    LOCAL: 'local'
}

const userTargets = [
    {source: {fileName:FileName.MICROSOFT_EXAMPLE_FILE, origin: Origin.LOCAL}, strategy: ExtractionStrategy.USERS_FROM_BULK}
    ]

const attachmentTargets = []

const assessmentTargets = []

module.exports = { userTargets, attachmentTargets, assessmentTargets }