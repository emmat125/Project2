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
        console.log("Data from data_acess:" + data[1].producer)

        console.log("Data retrived successfully")
        return data;
    } catch (err) {
        console.error("Error retrieving data", err);
        throw err;
    }
}
