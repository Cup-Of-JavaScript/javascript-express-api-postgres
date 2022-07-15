//
// File: test-data-access.js
// Desc: Simple driver to test our data access layer.
//

const dataAccess = require('./data-access');

const main = async () => {
     //let person  = {
      //   personId: 2,
      //   bookStoreId: 1,
       // firstName: "Diane",
       //lastName: "Tewah"
    //     dob: "8/29/1970"
    // }
    // let personId = 1
  let    personId = 1
  let  firstName = " Diana"
  let   lastName = "Tewah"
  
                    
                    

    let r = await dataAccess.updatePerson(personId,firstName, lastName);
    console.log(r)
    process.exit()
}

main()
