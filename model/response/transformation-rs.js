// transformation-rs.js

class TransformationRs {
    constructor(results) {
        this.results = results
    }
}

class EntityResult {
    constructor(entity, result) {
        this.entity = entity
        this.result = result
    }

}

module.exports = {TransformationRs, EntityResult}