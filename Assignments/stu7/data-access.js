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

//ex2:

const get_PersonID = 'SELECT * FROM person WHERE person_id=$1;'

exports.getPersonsId = async (personId) => {
    let retval = null;
    try {
        let r = await pool.query(get_PersonID, [personId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}


//ex3:
const get_PersonType = 'SELECT * FROM person p JOIN person_type pt ON pt.person_type_id = p.person_type_id WHERE pt.person_type=$1;'

exports.getPersonsForType = async (personType) => {
    let retval = null;
    try {
        let r = await pool.query(get_PersonType, [personType]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

//ex4:
const getAllBooks = 'SELECT * FROM book'
exports.getBooks = async () => {
    let retval = null;
    try {
        let r = await pool.query(getAllBooks);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

//ex5:
const GET_BOOK = 'SELECT * FROM book WHERE book_id = $1'
exports.getBookById = async (bookID) => {
    let retval = null;
    try {
        let r = await pool.query(getAllBooks);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}
