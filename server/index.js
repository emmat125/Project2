const express = require('express');
const dao = require('./data_acess');
const app = express(); // server app
const port = 4000; // port

app.get('/', (req, res) => {
    try {
        res.send('Welcome to SWAPI');
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

app.get('/api/films/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findFilm(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/films/:id/characters', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findFilmsCharacters(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/films/:id/planets', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findFilmsPlanets(id);
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

app.get('/api/planets/:id/films', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findPlanetsFilms(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/planets/:id/characters', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findPlanetsCharacters(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/characters', async (req, res) => {
    const data = await dao.findAllCharacters();
    res.send(data)
})

app.get('/api/characters/:id', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findCharacter(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.get('/api/characters/:id/films', async (req, res) => {
    try {
        const id = req.params.id;
        const data = await dao.findCharactersFilms(id);
        res.send(data)
    } catch (err) {
        console.error("Error retrieving data: ", err);
        res.sendStatus(500);
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
})
