//
// File: data-access.js
// Date: 6/30/2022
// Desc: CommonJS module that contains our data access code.
//

const { pool } = require("../../../postgres-pool");

const GET_BOOKSTOREID = "select (b.book_id, b.title, b.isbn) from book_store bs join book_store_book bb on bb.book_store_id = bs.book_store_id join book b on  b.book_id = bb.book_id where  bs.book_store_id = $1;"

exports.getBookStoreId = async (bookstoreId) => {
    let retval = null;
    try {
        let r = await pool.query(GET_BOOKSTOREID, [bookstoreId]);
        retval = r.rows;
    } catch (err) {
        console.error(err);
    }
    return retval;
}