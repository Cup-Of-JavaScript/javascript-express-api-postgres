//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//


const { pool } = require("../../../postgres-pool");

const GET_BOOKS = `select b.title,
b.isbn,
b.book_id
from book b
join book_store_book bsb on b.book_id=bsb.book_id 
join book_store bs on bsb.book_store_id=bs.book_store_id where bs.book_store_id = $1;`

exports.getBooks = async (book_store_id) => {
   let retval = null;
   try {
       let r = await pool.query(GET_BOOKS, [book_store_id]);
       retval = r.rows;
   } catch (err) {
       console.error(err);
   }
   return retval;
};
