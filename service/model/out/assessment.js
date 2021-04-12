// assessment.js

class Assessment {
    externalId
    name
    organizationId
    organizationName
    businessProcessId
    businessProcessName
    templateId
    templateVersionName
    metadataFields
    owner
    status
    respondents
    reviewers
    recentReviewer
    answers
    dueData
    lastestUpdated
    created
    constructor(externalId, name, templateId, owner, status, respondents, reviewers, lastestUpdated, created, answers) {
        this.externalId = externalId
        this.name = name
        this.templateId = templateId
        this.owner = owner
        this.status = status
        this.respondents = respondents
        this.reviewers = reviewers
        this.lastestUpdated = lastestUpdated
        this.created = created
        this.answers = answers
    }
}

class MetadataField {
    key
    apiIdentifier
    value
}

class Answer {
    questionId
    value
    files
    notes
    status
}

module.exports = {Assessment}
