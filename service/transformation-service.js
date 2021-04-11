// transformation-service.js
const userService = require('./user-service')
//const attachmentService = require('./service').attachmentService
//const assessmentService = require('./service').assessmentService

async function transform(transformationRq) {

    const results = []

    // users
    const userEntity = transformationRq.entities.find( entity => entity.type === "User")
    if (userEntity != undefined) {
        console.log('Processing users sources' + JSON.stringify(userEntity.targets))
        const userResult = await userService.fetch(userEntity.targets)
        console.log('Users obtained: ' + JSON.stringify(userResult))
        results.push({entity: userEntity, result: userResult})
    }

    // attachments

    // assessments

    return results
}

module.exports = {transform}

