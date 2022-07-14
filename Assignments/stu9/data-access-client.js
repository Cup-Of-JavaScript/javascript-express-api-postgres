const dataAccess = require('./data-access.js');

const main = async () => {


    let r = await dataAccess.getPerson();  



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
