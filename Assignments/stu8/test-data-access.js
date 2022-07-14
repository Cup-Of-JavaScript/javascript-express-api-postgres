//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require('./data-access');

const main = async () => {
    let bookstore  = {
        "bookstoreName": "Book Worms"
    }

    let r = await dataAccess.addBookstore(bookstore)
    console.log(r)
    process.exit()
}

main()
