//
// File: data-access-client.js
// Desc: Simple driver for the data access layer (DAL).
//

const dataAccess = require('./data-access.js');

const main = async () => {
     let person = {
        "bookStoreId": 1,
        "personTypeId": 1,
        "firstName": "Angie",
        "lastName": "Christopher",
        "dob": "4/1/1989"
     }
    
     let book = {
        "bookstoreName": "Books-A-Million"
     }
    let r = await dataAccess.AddPerson(book);  


    // Select..
    // let r = await dataAccess.getPerson(1)

    // Delete...
    //let r = await dataAccess.deleteCustomer(2);

    // Insert...
    // let r = await dataAccess.insert("Dave Jones");

    // Update...
    //  let customer = {
    //     customerName: "Joey",
    //     customerId: 1
    //  }
    //let r = await dataAccess.update.ex15(customer);

    console.log(r);
    process.exit()
}

main();