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

app.get('/ex2/persons/1', cors(corsOptions), async (req,res) => {
    let persons = await dataAccess.getPerson(1)
    res.send(persons)
});


//
// GET /ex3/persons?personType={Manager|Cashier|Stock%20Person}
//

// Ex. 3: TODO ...

//
// GET /ex4/books
//

// Ex. 4: TODO ...

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