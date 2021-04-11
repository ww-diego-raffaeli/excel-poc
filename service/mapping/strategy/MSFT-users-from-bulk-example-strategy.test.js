const strategy = require('./MSFT-users-from-bulk-example-strategy')

test('apply -> content with 3 users, return 3 users', () => {
    // arrange
    const content = []
    content.push({name:'Users', rows:[
            ["For Microsoft, this must be the User's base alias (not the friendly email address) to enable SSO with Azure Active Directory.",null,null,{"richText":[{"font":{"bold":true,"size":11,"color":{"theme":1},"name":"Calibri","family":2,"scheme":"minor"},"text":"Valid Values:"},{"font":{"size":11,"color":{"theme":1},"name":"Calibri","family":2,"scheme":"minor"},"text":"\n- Member\n- Global Admin\n- Viewer"}]},{"richText":[{"font":{"bold":true,"size":11,"color":{"theme":1},"name":"Calibri","family":2,"scheme":"minor"},"text":"Valid Values:"},{"font":{"size":11,"color":{"theme":1},"name":"Calibri","family":2,"scheme":"minor"},"text":"\n- Enabled\n- Disabled"}]},"The name of the Organization must be defined in WireWheel.","The name of the Business Process must be defined in WireWheel."],
            ["Email","First Name","Last Name","Role","Status","Organization","Business Process"],
            ["Alias1@microsoft.com","FirstName1","LastName1","Member","Enabled"],
            ["Alias2@microsoft.com","FirstName2","LastName2","Member","Enabled"],
            ["Alias3@microsoft.com","FirstName3","LastName3","Member","Enabled"],
        ]})

    const expectedResponse = [
        {email: "Alias1@microsoft.com", firstName: "FirstName1", lastName: "LastName1", companyName: "Microsoft", enabled: false},
        {email: "Alias2@microsoft.com", firstName: "FirstName2", lastName: "LastName2", companyName: "Microsoft", enabled: false},
        {email: "Alias3@microsoft.com", firstName: "FirstName3", lastName: "LastName3", companyName: "Microsoft", enabled: false}
    ]

    // act
    const actualResponse = strategy.apply(content);

    // assertions
    expect(actualResponse.length).toBe(3);
    expect(actualResponse).toEqual(expectedResponse)
})

test('apply -> content without sheet named "Users"', () => {
    // TODO
})