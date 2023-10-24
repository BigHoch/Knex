const express = require('express');
const app = express();
const port = 8081;

const knex = require('knex')(require('../knexfile.js')[process.env.NODE_ENV || 'development'])
app.get('/', (request, response) => {
    response.send('Application up and running.')
})

app.listen(port, () => {
    console.log('your Knex and Express application are running succesfully')
})

app.get('/pets', (request, response) => {

})

