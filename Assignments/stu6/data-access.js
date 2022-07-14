const { pool } = require("../../postgres-pool");

const get_Persons = 'select * from person'

exports.getPersons = async () => {
    let retval = null;
    try {
       let r = await pool.query(get_Persons);
       retval = r.rows
    } catch (err) {
        console.error(err);
    }
    return retval;
}
