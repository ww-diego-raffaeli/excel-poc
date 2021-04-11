// transformation-rq.js

class TransformationRq {
    constructor(entities) {
        this.entities = entities
    }
}

class Entity {
    constructor(type, targets) {
        this.type = type
        this.targets = targets
    }
}

class Target {
    constructor(source, strategy) {
        this.source = source
        this.strategy = strategy
    }
}

class Source {
    constructor(fileName, origin) {
        this.fileName = fileName
        this.origin = origin
    }
}

const Type = {
    USER: 'User',
    ATTACHMENT: 'Attachment',
    ASSESSMENT: 'Assessment'
}

const Origin = {
    S3: 'S3',
    LOCAL: 'local'
}

module.exports = {TransformationRq, Entity, Target, Source, Type, Origin}

