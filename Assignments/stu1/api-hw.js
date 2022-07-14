// 
// File: api.js
// Auth: 
// Date: 6/30/2022
// Desc: Template used for creating an Express web API.
//

const cors = require('cors');
const express = require('express');
//const dataAccess = require('./data-access');

const PORT = 7777;
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

//app.get('/ex1/persons/:id', cors(corsOptions), async (req, res) => { 
    // Parsing...
    // let id = req.params['id'];                 // Read path params from URL.
    // let queryParam1 = req.query['personType']  // Read query params from URL.
    // let body = req.body;                       // Read request body.

    // Data access..
    // let result = await dataAccess.<YOUR FUNCTION HERE>

    // Response...
    // res.status(404);  // 201, 404             // Status code.
    // res.send(<YOUR OBJECT HERE>);
//});

//
// GET /message
//

app.get('/helloworld', cors(corsOptions), async (req, res) => {
     res.send('Hello World.')
});

app.listen(PORT, () => {
    console.log(`Express API is running on port: ${PORT}`);
});
