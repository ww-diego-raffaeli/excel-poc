// entity-service.js

const entityService = require('./entity-service')
const Type = require('../model/transformation-rq').Type

async function transform(transformationRq) {
    return await Promise.all(transformationRq.entities.map(process))
}

async function process(entity) {
    let result = []
    if (matchType(entity)) {
        console.log(`Processing entity '${entity.type}' with sources: ${JSON.stringify(entity.targets)}`)
        result = await entityService.fetch(entity.targets)
    }

    return {entity: entity, result: result}
}

function matchType(entity) {
    const currentType = entity.type
    return currentType === Type.USER || currentType === Type.ASSESSMENT || currentType === Type.ATTACHMENT
}


module.exports = {transform}

