// 
// File: api.js
// Date: 6/30/2022
// Desc: Simple API using CommonJS modules.
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
// GET /ex1/persons/
app.get('/ex1/persons/', cors(corsOptions), async (req, res) => { 
    let result = await dataAccess.getPersons()
    // console.log(result)
     res.send(result);
});


// GET /ex2/persons/:id
app.get('/ex2/persons/:id', cors(corsOptions), async (req, res) => { 
    let personId = req.params['id']
    let result = await dataAccess.getPerson(personId)
    // console.log(result)
     res.send(result);
});



//
// GET /ex3/persons?personType={Manager|Cashier|Stock%20Person}
app.get('/ex3/persons/', cors(corsOptions), async (req, res) => { 
    let personType = req.query['personType']
    let result = await dataAccess.getPersonsforType(personType)
    console.log(result)
     res.send(result);
});


// GET /ex4/books
app.get('/ex4/book/', cors(corsOptions), async (req, res) => { 
    let result = await dataAccess.getBooks()
    res.send(result);
});


// GET /ex5/books/:id
app.get('/ex5/book/:id', cors(corsOptions), async (req, res) => { 
    let bookId = req.params['id']
    let result = await dataAccess.getBook(bookId)
    res.send(result);
});


// GET /ex6/bookstores/:id/people
app.get('/ex6/book_store/:id', cors(corsOptions), async (req, res) => { 
    let bookStoreId = req.params['id']
    let result = await dataAccess.getPersonsforBookStore(bookStoreId)
    res.send(result);
});


// POST /ex7/persons
app.post('/ex7/persons/', cors(corsOptions), async (req, res) => { 
    let person = req.body;
    let result = await dataAccess.addPerson(person.personTypeId, person.bookStoreId, person.firstName, person.lastName, person.dob)
    res.send(result);
});

// POST /ex8/bookstores
app.post('/ex8/book_store/', cors(corsOptions), async (req, res) => { 
     let bookStore = req.body;
    let result = await dataAccess.addBookStore(bookStore.bookStoreName)
    res.send(result);
});



//
// PUT /ex9/persons
//

// Ex. 9: TODO ...

//
// DELETE /ex10/persons/:id
//

// Ex. 10: TODO ...

app.listen(PORT, () => {
    console.log(`Bookstore API is running on port: ${PORT}`);
});
