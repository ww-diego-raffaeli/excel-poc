// transformation-service.test.js

const sinon = require('sinon')
const service = require('./transformation-service')
const userService = require('./user-service')
let sandbox

beforeEach(() => {
    sandbox = sinon.createSandbox();
})
afterEach(() => {
    sandbox.restore()
})

test('transform -> user entity, return user response', () => {
    // arrange
    const transformationRequest = {entities: [{type: "User", targets: [{source:{fileName: "some_excel.xls", origin: "local"}, strategy:"strategy_name"}]}]};
    const userResult = "users generated"
    const fetchStub = sandbox.stub(userService, "fetch")
    fetchStub.returns(userResult)

    // act
    const actualResponse = service.transform(transformationRequest)

    // assertions
    expect(actualResponse).resolves.toEqual([{entity: {type: "User", targets: [{source:{fileName: "some_excel.xls", origin: "local"}, strategy:"strategy_name"}]}, result: "users generated"}])
    sinon.assert.calledOnce(fetchStub)
} )

test('transform -> request without user entity, return empty response', () => {
    // arrange
    const transformationRequest = {entities: [{type: "Usxxxx", targets: [{source:{fileName: "some_excel.xls", origin: "local"}, strategy:"strategy_name"}]}]};
    const fetchStub = sandbox.stub(userService, "fetch")

    // act
    const actualResponse = service.transform(transformationRequest)

    // assertions
    expect(actualResponse).resolves.toEqual([])
    sinon.assert.notCalled(fetchStub)
} )


