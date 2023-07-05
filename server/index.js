const express = require('express');
const dao = require('./data_acess');
const app = express(); // server app
const port = 4000; // port

app.get('/', (req, res) => {
    try {
        res.send('Hellooo World');
    } catch (err) {
        console.log("Error retrieving data: ", err);
        throw err;
    }
})

app.get('/api/films', async (req, res) => {
    try {
        const data = await dao.findAllFilms();
        res.send(data)
    } catch (err) {
        console.log("Error retrieving data: ", err);
        throw err;
    }
})

app.get('/api/planets', async (req, res) => {
    try {
        const data = await dao.findAllPlanets();
        res.send(data)
    } catch (err) {
        console.log("Error retrieving data: ", err);
        throw err;
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
