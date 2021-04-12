// main.js
const transformationService = require('./service').transformationService
const persistenceService = require('./service').persistenceService
const rq = require('./model/transformation-rq')

const inputConfig = require('./input-conf')

const run = async () => {

    // invoke transformer
    const response = await transformationService.transform(buildRq())

    // save result
    persistenceService.persist(response)

    // invoke migration api
    // TODO
}

run()

function buildRq() {
    return new rq.TransformationRq([
        new rq.Entity(rq.Type.USER, inputConfig.userTargets),
        new rq.Entity(rq.Type.ASSESSMENT, inputConfig.assessmentTargets)
    ])

}




