//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool } = require("../../postgres-pool");

const get_Persons = 'SELECT * FROM person;'

exports.getPersons = async () => {
    let retval = null;
    try {
        let r = await pool.query(get_Persons);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
