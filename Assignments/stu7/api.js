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
//

app.get('/ex1/persons/', cors(corsOptions), async (req, res) => { 
    let persons = await dataAccess.getPersons()
    res.send(persons)
});

//
// GET /ex2/persons/:id
//

app.get('/ex2/persons/:id', cors(corsOptions), async (req, res) => { 
    let id = req.params['id'];    
    let person = await dataAccess.getPersonsId(id)
    res.send(person)
});

//
// GET /ex3/persons?personType={Manager|Cashier|Stock%20Person}
//

app.get('/ex3/persons', cors(corsOptions), async (req, res) => { 
    let persons = await dataAccess.getPersonsForType(req.query['personType'])
    res.send(persons);
});

//
// GET /ex4/books
//
app.get('/ex4/books/', cors(corsOptions), async (req, res) => { 
    let books = await dataAccess.getBooks()
    res.send(books);
});


//
// GET /ex5/books/:id
//


app.get('/ex5/books/:id', cors(corsOptions), async (req, res) => { 
    let books = await dataAccess.getBookById(req.params['id'])
    res.send(books);
});


//
// GET /ex6/bookstores/:id/people
//

// Ex. 6: TODO ...

//
// POST /ex7/persons
//

// Ex. 7: TODO ...

//
// POST /ex8/bookstores
//

// Ex. 8: TODO ...

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
