//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool } = require("../../postgres-pool");

const GET_PERSONS = 'select * from person;'
const GET_PERSON = 'select * from person where person_id=$1;'

exports.getPersons = async () => {
  let retval = null;
  try {
    let r = await pool.query(GET_PERSONS);
    retval = r.rows;
  } catch (err) {
    console.error(err);
  }
  return retval;
};

exports.getPerson = async () => {
    let personId = 1
    let retval = null;
    try {
      let r = await pool.query(GET_PERSON, [personId]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
  };
