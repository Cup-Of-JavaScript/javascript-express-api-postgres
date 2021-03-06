//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool } = require("../../postgres-pool");

const GET_PERSONS = 'select * from person;'
const GET_PERSON = 'select * from person where person_id=$1;'
const GET_PERSONS_FOR_TYPE =
`select 
   p.person_id,
   p.person_type_id,
   p.book_store_id,
   p.first_name,
   p.last_name,
   p.dob,
   pt.person_type
from person p
join person_type pt on p.person_type_id= pt.person_type_id
where pt.person_type = $1`
const GET_BOOKS = `select * from book;`
const GET_BOOK =`select * from book where book_id=$1;`
const GET_PERSONS_FOR_BOOK_STORE =
`select 
p.person_id,
p.first_name,
p.last_name,
pt.person_type
from person p
join book_store bs on bs.book_store_id=p.book_store_id
join person_type pt on p.person_type_id=pt.person_type_id
where bs.book_store_id = $1`
const ADD_PERSON =
`insert into 
  person(person_type_id, book_store_id, first_name, last_name, dob) 
  values($1,$2,$3,$4,$5) 
returning person_id, first_name, last_name;`
const ADD_BOOK_STORE = 
`insert into 
 book_store(book_store_name) 
 values ($1) 
 returning book_store_name, book_store_id;`
 const UPDATE_PERSON = 'update person set first_name =$2, last_name=$3 where person_id = $1 returning person_id, first_name, last_name;'
 const DELETE_PERSON = 'delete from person where person_id = $1 ;'


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

exports.getPerson = async (personId) => {
    let retval = null;
    try {
      let r = await pool.query(GET_PERSON, [personId]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
  };

  exports.getPersonsforType = async (personType) => {
   let retval = null;
    try {
      let r = await pool.query(GET_PERSONS_FOR_TYPE, [personType]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
  };

  exports.getBooks = async () => {
    let retval = null;
    try {
      let r = await pool.query(GET_BOOKS);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
  };

  exports.getBook = async (bookId) => {
    let retval = null;
    try {
      let r = await pool.query(GET_BOOK, [bookId]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
  };

  exports.getPersonsforBookStore = async (bookStoreId) => {
    let retval = null;
     try {
       let r = await pool.query(GET_PERSONS_FOR_BOOK_STORE, [bookStoreId]);
       retval = r.rows;
     } catch (err) {
       console.error(err);
     }
     return retval;
   };

   exports.addPerson = async (personTypeId, bookStoreId, firstName, lastName, dob) => {
    let retval = null;
     try {
       let r = await pool.query(ADD_PERSON, [personTypeId, bookStoreId, firstName, lastName, dob]);
       retval = r.rows;
     } catch (err) {
       console.error(err);
     }
     return retval;
   };


   exports.addBookStore = async (bookStoreName) => {
    let retval = null;
     try {
       let r = await pool.query(ADD_BOOK_STORE, [bookStoreName]);
       retval = r.rows;
     } catch (err) {
       console.error(err);
     }
     return retval;
   };

   exports.updatePerson = async(personId,firstName, lastName) =>{
    let retval = null;
    try {
      let r = await pool.query(UPDATE_PERSON, [personId,firstName, lastName]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
   }

   exports.deletePerson = async(personId) =>{
    let retval = null;
    try {
      let r = await pool.query(DELETE_PERSON, [personId]);
      retval = r.rows;
    } catch (err) {
      console.error(err);
    }
    return retval;
   }

   