// mapper.js

const strategiesByName = require('./strategy').strategiesByName

function map(input) {
    const rawContent = input.content
    const strategyName = input.strategy
    return strategiesByName[strategyName].apply(rawContent)
}

function targetSheets(strategyName) {
    return strategiesByName[strategyName].sheets
}

module.exports = {map, targetSheets}