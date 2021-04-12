// entity-service.test.js

const sinon = require('sinon')
const service = require('./entity-service')
const repository = require('../repository').repository
const mapper = require('./mapping').mapper

let sandbox

beforeEach(() => {
    sandbox = sinon.createSandbox();
})
afterEach(() => {
    sandbox.restore()
})

test('fetch -> targets, return transformed data ', () => {
    // arrange
    const targets = [
        {source:{fileName: "some_excel.xls", origin: "local"}, strategy: "some_strategy_1"}
        //{source:{fileName: "other_file.csv", origin: "local"}, strategy: "other_strategy_2"}
    ]
    const sheets = ['Users']
    const file1 = {
        fileName: "some_excel.xls",
        content: "file 1 content"
    }

    const targetSheetsStub = sandbox.stub(mapper, "targetSheets")
    targetSheetsStub.withArgs("some_strategy_1").returns(sheets)
    const retrieveStub = sandbox.stub(repository, "retrieve")
    retrieveStub.withArgs("some_excel.xls", "local", sheets).returns(file1)
    const mapStub = sandbox.stub(mapper, "map")
    mapStub.withArgs({fileName: "some_excel.xls", content: file1.content, strategy: "some_strategy_1"}).returns("firstTargetTransformedData")

    // act
    const actualResponse = service.fetch(targets)

    // assertions
    actualResponse.then(value => {
        expect(value).toEqual(["firstTargetTransformedData"])
        sinon.assert.calledOnce(targetSheetsStub)
        sinon.assert.calledOnce(retrieveStub)
        sinon.assert.calledOnce(mapStub)
    })
})