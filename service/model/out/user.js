// user.js

class User {
    constructor(email, firstName, lastName, companyName) {
        this.email = email
        this.firstName = firstName
        this.lastName = lastName
        this.companyName = companyName
        this.enabled = false
    }
}

module.exports = User