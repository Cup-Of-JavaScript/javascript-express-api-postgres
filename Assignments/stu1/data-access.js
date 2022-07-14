//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool } = require("../../postgres-pool");
const GET_PERSON = "select * from person;"
const GET_PERSONID = "select * from person where person_id = $1"
const GET_PERSON_TYPES = "select p.person_id, pt.person_type_id, p.first_name, p.last_name, p.dob, pt.person_type from person p join person_type pt on p.person_type_id = pt.person_type_id where pt.person_type = $1"
const GET_BOOKS = "select * from book;"
const GET_BOOKID = "select * from book where book_id = $1;"
const SELECT_PEOPLEFORBOOKSTORE = "select p.person_id, p.first_name, p.last_name, pt.person_type from person p join person_type pt on p.person_type_id = pt.person_type_id where book_store_id = $1;"
const ADD_PERSON = "insert into person (book_store_id, person_type_id, first_name, last_name, dob) values ($1, $2, $3, $4, $5) returning book_store_id, person_type_id, first_name, last_name, dob, person_id;"


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

exports.getPersonsID = async (personId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSONID, [personId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.GET_PERSONSFORPERSONTYPE = async (person_type) => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSON_TYPES, [person_type]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.getBooks = async () => {
    let retval = null;
    try {
        let r = await pool.query(GET_BOOKS);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.getBook = async (bookID) => {
    let retval = null;
    try {
        let r = await pool.query(GET_BOOKID, [bookID]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.getPeopleForBookstore = async (bookstoreID) => {
    let retval = null;
    try {
        let r = await pool.query(SELECT_PEOPLEFORBOOKSTORE, [bookstoreID]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.AddPerson = async (person) => {
    let retval = null;
    try {
        let r = await pool.query(ADD_PERSON, [person.bookStoreId, person.personTypeId, person.firstName, person.lastName, person.dob]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}