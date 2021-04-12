// input-conf.js

const FileName = {
    MICROSOFT_EXAMPLE_FILE: 'Example Batch Upload File - Microsoft Only.xlsx',
    FINANCE_PIA_91119: 'Finance Privacy PIA 9.11.19 Data Mapping.xlsx'
}

const ExtractionStrategy = {
    USERS_FROM_BULK: 'users_from_bulk_example',
    MSFT_FINANCE_ASSESSMENTS: 'MSFT-Finance_assessments_extraction'
}

const Origin = {
    S3: 's3',
    LOCAL: 'local'
}

const userTargets = [
    {source: {fileName:FileName.MICROSOFT_EXAMPLE_FILE, origin: Origin.LOCAL}, strategy: ExtractionStrategy.USERS_FROM_BULK}
    ]

const attachmentTargets = []

const assessmentTargets = [
    {source: {fileName: FileName.FINANCE_PIA_91119, origin: Origin.LOCAL}, strategy: ExtractionStrategy.MSFT_FINANCE_ASSESSMENTS}
]

module.exports = { userTargets, attachmentTargets, assessmentTargets }