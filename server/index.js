const express = require('express');
const bodyParser = require('body-parser');
var dao = require('./data_acess');
var app = express(); // server app
var port = 4000; // port
app.use(bodyParser.json()); // Parse JSON body

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/films', (req, res) => {
    dao.call('findAllFilms', {}, (result) => {
        if (result.films !== undefined) {
            res.send(result.films[0]);
        } else {
            res.statusCode = 404;
            res.end();
        }
    });
    // res.send({ test: 'fake test' });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
