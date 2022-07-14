//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//
 const GET_PERSONS = "Select * from person;"
 const GET_PERSON = "Select * from person where person_id =$1;"

const { pool } = require("../../postgres-pool");

exports.getPerson = async (personId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSON, [personId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
