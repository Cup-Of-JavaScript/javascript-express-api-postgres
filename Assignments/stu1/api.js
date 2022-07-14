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
    let result = await dataAccess.getPersons()
    console.log(result)
    res.send(result)
});

//
// GET /ex2/persons/:id
//

app.get('/ex2/persons/:id', cors(corsOptions), async (req, res) => { 
    let personId = req.params['id'];
    let result = await dataAccess.getPersonsID(personId)
    console.log(result)
    res.send(result)
});

//
// GET /ex3/persons?personType={Manager|Cashier|Stock%20Person}
//

app.get('/ex3/persons', cors(corsOptions), async (req, res) => { 
    let personsType = req.query['personType'];
    let result = await dataAccess.GET_PERSONSFORPERSONTYPE(personsType)
    res.send(result)

    // select * from person join .. where person_type = 'Manager'
});

//
// GET /ex4/books
//

app.get('/ex4/books', cors(corsOptions), async (req, res) => { 
    let result = await dataAccess.getBooks()
    console.log(result)
    res.send(result)

    // select * from person join .. where person_type = 'Manager'
});

//
// GET /ex5/books/:id
//

app.get('/ex5/books/:id', cors(corsOptions), async (req, res) => { 
    let bookId = req.params['id'];
    let result = await dataAccess.getBook(bookId)
    console.log(result)
    res.send(result)
});

//
// GET /ex6/bookstores/:id/people
//

app.get('/ex6/bookstores/:id/people', cors(corsOptions), async (req, res) => { 
    let bookstoreId = req.params['id'];
    let result = await dataAccess.getPeopleForBookstore(bookstoreId)
    console.log(result)
    res.send(result)
});

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
