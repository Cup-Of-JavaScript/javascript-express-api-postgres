//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require('./data-access');

const main = async () => {
     //   let person  = {
         //   personTypeId: 1,
          //  bookStoreId: 1,
          //  firstName: "joe",
          //  lastName: "smith",
       //     dob: "8/29/1970"
       // }

    let r = await dataAccess.getPersonType();
    console.log(r)
    process.exit()
}

main()
