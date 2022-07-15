// 
// File: api.js
// Auth: 
// Date: 6/30/2022
// Desc: Template used for creating an Express web API.
//

const cors = require('cors');
const express = require('express');
const dataAccess = require('./data-access');

const PORT = 5152;
const app = express();

var corsOptions = {
    origin: ['http://localhost:3001', 'http://localhost:3000'],
    optionsSuccessStatus: 200
}

// Middleware...
app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

//
// GET /ex1/persons/:id
//

app.get('/bookstores/:id/books', cors(corsOptions), async (req, res) => { 
    let book_store_id= req.params['id']
    let books = await dataAccess.getBooks(book_store_id)
    res.send(books);
});


app.listen(PORT, () => {
    console.log(`Bookstore API is running on port: ${PORT}`);
});