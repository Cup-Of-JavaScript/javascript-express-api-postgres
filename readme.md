# JavaScript Express API Postgress

Assignments are located [here](./Assignments.md).

# Getting Started
- Clone this repo
- Install dependencies: `npm install`
- Create file: `postgres-pool.js` from file: `postgres-pool.js.template`
  - Update `postgres-pool.js` with database password

# Creating a New API
- Prereq: Install nodemon only once: `npm install -g nodemon`
- Create a new directory and `cd` into this directory, lauch VS code: `code .`
- Execute: `npm init -y`
- Execute: `npm install express`
- Execute: `npm install cors`
- Create file: `api.js` from `api.js.template`
- Optionally change the port number in `api.js` (something greate than 1024): `const PORT = 5152;` 
- Start the API: `nodemon api.js`
- Test the "Hello World" message endpoint in Thunder Client: `GET http://localhost:5152/message`
- Create new endpoint:
  - Uncomment line 10: `const dataAccess = require('./data-access');` in `api.js`
  - Create `postgres-pool.js` file from `postgres-pool.js.template`
  - Create SQL in Postgres first
  - Create data access layer code
  - Create API endpoint
  - Create Thunder Client request

# Notes
- [api.js.template](./api.js.template) is a file that can be used to start building your Express API
- Be sure to run `create-bookstore-db.sql` in your student database (if you haven't already)

# Videos
- [What is an API (7m)](https://youtu.be/Yzx7ihtCGBs)
- [What is a ReST API (6m)](https://youtu.be/SLwpqD8n3d0)
- [Oktane17: Designing Beautiful ReST + JSON APIs (48m)](https://youtu.be/MiOSzpfP1Ww)
- [ReST Tutorial - How to Design a Good ReSTful API (8m)](https://youtu.be/sMKsmZbpyjE)
- [Roy Fielding - The God Father of the ReST API (11m)](https://youtu.be/w5j2KwzzB-0)
- [HTTP ReST API Crash Course w/ Express (40m)](https://youtu.be/iYM2zFP3Zn0)
