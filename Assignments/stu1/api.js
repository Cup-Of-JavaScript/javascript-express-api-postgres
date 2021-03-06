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
    if (getPersons != result){
        res.status(204)  
    } else {
        res.send(result)
    }
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

app.post('/ex7/persons', cors(corsOptions), async (req, res) => { 
    let person2 = req.body;
    let personId = await dataAccess.AddPerson(person2)
    person2.personId= personId
    res.send(personId)
});

//
// POST /ex8/bookstores
//

app.post('/ex8/bookstores', cors(corsOptions), async (req, res) => { 
    let book = req.body;
    let bookId = await dataAccess.AddBookstore(book)
    book.bookId= bookId
    res.send(bookId)
});

//
// PUT /ex9/persons
//

app.put('/ex9/persons', cors(corsOptions), async (req, res) => { 
    let person = req.body;
    let updatePerson = await dataAccess.putpdatePerson(person)
    person.updatePerson = updatePerson
    res.send(updatePerson)
});

//
// DELETE /ex10/persons/:id
//

app.delete('/ex10/persons/:id', cors(corsOptions), async (req, res) => { 
    let deletePerson = req.params['id'];;
    let erasePerson = await dataAccess.deletePerson(deletePerson)          
    console.log(erasePerson)
    res.send('OK')
});

app.listen(PORT, () => {
    console.log(`Bookstore API is running on port: ${PORT}`);
});
