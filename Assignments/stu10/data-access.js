//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//
 const GET_PERSONS = "Select * from person;"
 const GET_PERSON = "Select * from person where person_id =$1;"
 const GET_PERSON_TYPE = `Select * from person p
join person_type pt on pt.person_type_id = p.person_type_id where pt.person_type = $1`

const { pool } = require("../../postgres-pool");

exports.getPersonType = async (personsType) => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSON_TYPE, [personsType]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
