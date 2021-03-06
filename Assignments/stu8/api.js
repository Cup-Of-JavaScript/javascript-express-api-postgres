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
    let book = await dataAccess.getBook()
    res.send(book)
});


//
// GET /ex5/books/:id
//

// Ex. 5: TODO ...

app.get('/ex5/books/:id', cors(corsOptions), async (req,res) => {
    let bookId = req.params['id']
    let book = await dataAccess.getBookbyId(bookId)
    res.send(book)
});


//
// GET /ex6/bookstores/:id/people
//

// Ex. 6: TODO ...
app.get('/ex6/persons/:id', cors(corsOptions), async (req,res) => {
    let storeId = req.params['id']
    let people = await dataAccess.getPeopleByStore(storeId)
    res.send(people)
});
//
// POST /ex7/persons
//

// Ex. 7: TODO ...
app.post('/ex7/persons', cors(corsOptions), async (req,res) => {
    let person = req.body;
    let personId = await dataAccess.addPerson(person)
    person.personId = personId
    res.send(person);
})
//
// POST /ex8/bookstores
//

app.post('/ex8/bookstores', cors(corsOptions), async (req,res) => {
    let bookstore = req.body;
    let bookstoreId = await dataAccess.addBookstore(bookstore)
    bookstore.bookstoreId = bookstoreId
    res.send(bookstore);
})

//
// PUT /ex9/persons
//

// Ex. 9: TODO ...

app.put('/ex9/persons', cors(corsOptions), async (req,res) => {
    let person = req.body;
    let personId = await dataAccess.updatePerson(person)
    person.personId = personId
    res.send(person);
})

//
// DELETE /ex10/persons/:id
//

// Ex. 10: TODO ...

app.delete('/ex10/persons/:id', cors(corsOptions), async (req, res) => {
    let personId = req.params['id']
    let person = await dataAccess.deletePerson(personId)
    res.send("Ok");
})

app.listen(PORT, () => {
    console.log(`Bookstore API is running on port: ${PORT}`);
});
