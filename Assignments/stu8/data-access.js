//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const GET_PERSONS = "select * from person;"

const GET_PERSON = "select * from person where person_id =$1;"

const GET_PERSON_TYPE = `select * from person p
join person_type pt on pt.person_type_id = p.person_type_id where pt.person_type = $1`

const GET_BOOKS = "select * from book"

const GET_BOOK_BY_ID = "select * from book where book_id =$1;"

const GET_PEOPLE_BY_BOOKSTORE = `select p.person_id, 
    p.first_name, 
    p.last_name, 
    pt.person_type from person p
join person_type pt on p.person_type_id = pt.person_type_id
join book_store bs on p.book_store_id = bs.book_store_id where bs.book_store_id = $1`

const ADD_PERSON = `insert into person (book_store_id, person_type_id, first_name, last_name, dob) values ($1, $2, $3, $4, $5) returning book_store_id, person_type_id, first_name, last_name, dob, person_id;`

const ADD_BOOKSTORE = `
  insert into 
    book_store (book_store_name) 
  values 
    ($1) returning book_store_id, book_store_name`

const UPDATE_PERSON = 'update person set first_name = $2, last_name = $3 where person_id = $1 returning person_id, first_name, last_name'

const DELETE_PERSON = 'delete from person where person_id = $1'

const { pool } = require("../../postgres-pool");

exports.getPersons = async () => {
    let retval = null;
    try {
        let r = await pool.query(GET_PERSONS);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

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

exports.getBookbyId = async (bookId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_BOOK_BY_ID, [bookId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.getPeopleByStore = async (storeId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_PEOPLE_BY_BOOKSTORE, [storeId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.addPerson = async (person) => {
    let retval = null;
    try {
        let r = await pool.query(ADD_PERSON, [person.personTypeId, person.bookStoreId, person.firstName, person.lastName, person.dob]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}

exports.addBookstore = async (bookstore) => {
    let retval = null;
    try {
        let r = await pool.query(ADD_BOOKSTORE, [bookstore.bookstoreName]);
        retval = r.rows;
      } catch (err) {
        console.error(err);
      }
    return retval;
}

exports.updatePerson = async (person) => {
    let retval = null;
    try {
        let r = await pool.query(UPDATE_PERSON, [person.personId, person.firstName, person.lastName]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}   

exports.deletePerson = async (personId) => {
    let retval = null;
    try {
        let r = await pool.query(DELETE_PERSON, [personId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}