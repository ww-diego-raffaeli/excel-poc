// entity-service.js

const entityService = require('./entity-service')

async function transform(transformationRq) {

    const promises = transformationRq.entities.map(async entity => {
        const type = entity.type
        console.log('Processing entity sources' + JSON.stringify(entity.targets))
        const result = await entityService.fetch(entity.targets)
        console.log('Items obtained: ' + JSON.stringify(result))
        return {entity: entity, result: result}
    })

    return await Promise.all(promises)
}

module.exports = {transform}

