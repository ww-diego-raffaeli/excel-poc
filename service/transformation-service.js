// transformation-service.js

const entityService = require('./entity-service')
const rqModel = require('../model/transformation-rq')
const Type = rqModel.Type


async function transform(transformationRq) {
    const results = []

    // users
    const userEntity = transformationRq.entities.find(findEntity(Type.USER))
    if (userEntity != undefined) {
        console.log('Processing users sources' + JSON.stringify(userEntity.targets))
        const userResult = await entityService.fetch(userEntity.targets)
        console.log('Users obtained: ' + JSON.stringify(userResult))
        results.push({entity: userEntity, result: userResult})
    } else {
        console.log("User entity not present")
    }

    // attachments
    // TODO

    // assessments
    const assessmentEntity = transformationRq.entities.find(findEntity(Type.ASSESSMENT))
    if (assessmentEntity != undefined) {
        console.log('Processing assessment sources' + JSON.stringify(assessmentEntity.targets))
        const assessmentResult = await entityService.fetch(assessmentEntity.targets)
        console.log('Assessment obtained: ' + JSON.stringify(assessmentResult))
        results.push({entity: assessmentEntity, result: assessmentResult})
    } else {
        console.log("Assessment entity not present")
    }

    return results
}

function findEntity(type) {
    return entity => entity.type === type;
}

module.exports = {transform}

