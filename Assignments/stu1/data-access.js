//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool } = require("../../postgres-pool");
const GET_PERSON = "select * from person;"
const GET_PERSONID = "select * from person where person_id = $1"

// exports.ex1 = async () => {
//     let personId = 1
//     return await this.getPerson(personId); 
// }

exports.getPersons = async () => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSON);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.getPersonID = async (personId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSONID, [personId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}