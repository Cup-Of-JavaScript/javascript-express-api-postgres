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


// app.get('/message', cors(corsOptions), async (req,res) => {
//     res.send('Hello World.')
// });

//
// GET /ex1/persons/
//

app.get('/ex1/persons', cors(corsOptions), async (req,res) => {
    let persons = await dataAccess.getPersons()
    res.send(persons)
});

//
// GET /ex2/persons/:id
//


// Ex. 2: TODO ...

app.get('/ex2/persons/:id', cors(corsOptions), async (req,res) => {
    let personId = req.params['id']
    let persons = await dataAccess.getPerson(personId)
    res.send(persons)
});


//
// GET /ex3/persons?personType={Manager|Cashier|Stock%20Person}
//

// Ex. 3: TODO ...
app.get('/ex3/persons', cors(corsOptions), async (req, res) => {
    let personsType = req.query['personType']
    let persons = await dataAccess.getPersonType(personsType)
    res.send(persons)
})
//
// GET /ex4/books
//

// Ex. 4: TODO ...

app.get('/ex4/books', cors(corsOptions), async (req,res) => {
    let books = await dataAccess.getBooks()
    res.send(books)
});


//
// GET /ex5/books/:id
//

// Ex. 5: TODO ...

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
