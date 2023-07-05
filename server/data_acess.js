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
