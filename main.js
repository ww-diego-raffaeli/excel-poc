// main.js
const transformationService = require('./service').transformationService
const persistenceService = require('./service').persistenceService
const rq = require('./model/request/transformation-rq')

const inputConfig = require('./input-conf')

const run = async () => {

    // invoke transformer
    const transformationRq = new rq.TransformationRq([new rq.Entity(rq.Type.USER, inputConfig.userTargets)])
    const response = await transformationService.transform(transformationRq)

    // save result
    persistenceService.persist(response)

    // invoke migration api
    // TODO
}

run()



