const express = require('express');
const dao = require('./data_acess');
const app = express(); // server app
const port = 4000; // port

app.get('/', (req, res) => {
    res.send('Hellooo World');
})

app.get('/api/films', async (req, res) => {
    const data = await dao.findAllFilms();
    console.log("Data index.js:" + data)
    res.send(data)
    // res.send({ test: 'fake test' });
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
