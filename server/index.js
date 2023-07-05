const express = require('express');
const dao = require('./data_acess');
const app = express(); // server app
const port = 4000; // port

app.get('/', (req, res) => {
    try {
        res.send('Hellooo World');
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/films', async (req, res) => {
    try {
        const data = await dao.findAllFilms();
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/planets', async (req, res) => {
    try {
        const data = await dao.findAllPlanets();
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/planets/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findPlanet(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
