//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require('./data-access');

const main = async () => {
    let person  = {
        "personId": 1,
        "firstName": "Ms. Alice",
        "lastName": "Change"
      }

    let r = await dataAccess.updatePerson(person)
    console.log(r)
    process.exit()
}

main()
