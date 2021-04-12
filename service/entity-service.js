// entity-service.js

const repository = require('../repository').repository
const mapper = require('./mapping').mapper

async function fetch(targets) {
    // fetch data & transform
    const results = await Promise.all(targets.map(target => mapTarget(target)))

    // combine results
    return results.reduce((acc, currentVal) => acc.concat(currentVal.output), [])
}

async function mapTarget(target) {
    const fileName = target.source.fileName
    const origin = target.source.origin
    const strategy = target.strategy
    const sheets = mapper.targetSheets(strategy)

    console.log(`Obtaining file content "${fileName}", sheets "${sheets}" from "${origin}" origin`)
    const file = await repository.retrieve(fileName, origin, sheets)

    console.log("Applying transformation to '" + fileName + "' with '" + strategy + "' strategy")
    const transformedData = mapper.map({fileName: fileName, content: file.content, strategy: strategy})
    console.log("Transformation finished. Items obtained: " + transformedData.length)

    return {
        source: target.source,
        strategy: strategy,
        sheets: sheets,
        input: file,
        output: transformedData
    }
}

module.exports = {fetch}


