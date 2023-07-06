const { MongoClient } = require("mongodb");
const url = 'mongodb://localhost:27017';
const dbName = 'swapi';

module.exports.findAllFilms = async function () {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("films");
        const data = await collection.find().toArray();

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findFilm = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("films");
        const data = await collection.findOne({ id: +id });

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findFilmsCharacters = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("films_characters");
        const data = await collection.find({ film_id: +id }).toArray()
        let characters = [];
        for (let film of data) {
            let character_id = film.character_id;
            let col = db.collection("characters");
            let charInfo = await col.find({ id: +character_id }).toArray();
            characters.push({ id: character_id, name: charInfo[0].name })
        }

        console.log("Data retrived successfully")
        return characters;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findFilmsPlanets = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("films_planets");
        const data = await collection.find({ film_id: +id }).toArray()
        let planets = [];
        for (let film of data) {
            let planet_id = film.planet_id;
            let col = db.collection("planets");
            let planInfo = await col.find({ id: +planet_id }).toArray();
            planets.push({ id: planet_id, name: planInfo[0].name })
        }

        console.log("Data retrived successfully")
        return planets;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findAllPlanets = async function () {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("planets");
        const data = await collection.find().toArray();

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findPlanet = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("planets");
        const data = await collection.findOne({ id: +id });

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findPlanetsFilms = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("films_planets");
        const data = await collection.find({ planet_id: +id }).toArray()
        let films = [];
        for (let planet of data) {
            let film_id = planet.film_id;
            let col = db.collection("films");
            let filmInfo = await col.find({ id: +film_id }).toArray();
            films.push({ id: film_id, name: filmInfo[0].title })
        }

        console.log("Data retrived successfully")
        return films;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findPlanetsCharacters = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("characters");
        const data = await collection.find({ homeworld: +id }).toArray();

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findAllCharacters = async function () {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("characters");
        const data = await collection.find().toArray();

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data", err);
        throw err;
    }
}

module.exports.findCharacter = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("characters");
        const data = await collection.findOne({ id: +id });

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}

module.exports.findCharactersFilms = async function (id) {
    try {
        const client = new MongoClient(url);
        await client.connect();

        const db = client.db(dbName);
        const collection = db.collection("films_characters");
        const data = await collection.find({ character_id: +id }).toArray()
        let films = [];
        for (let character of data) {
            let film_id = character.film_id;
            let col = db.collection("films");
            let filmInfo = await col.find({ id: +film_id }).toArray();
            films.push({ id: film_id, name: filmInfo[0].title })
        }

        console.log("Data retrived successfully")
        return films;
    } catch (err) {
        console.error("Error retrieving data: ", err);
        throw err;
    }
}
