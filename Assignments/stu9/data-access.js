const { pool } = require("../../postgres-pool");

//const get_Persons = 'select * from person'

const get_Person = 'select * from person where person_id = ($1)'

exports.getPersons = async () => {
    let retval = null;
    try {
       let r = await pool.query(get_Person);
       retval = r.rows
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.getPerson = async (personId) => {
    let retval = null;
    try {
        let r = await pool.query(get_Person, [personId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}