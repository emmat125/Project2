const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "swapi_db";
const filmsCollection = "films";

module.exports.call = async function call(operation, parameters, callback) {

    await client.connect();
    const db = client.db(dbName);
    const collection = db.collection(filmsCollection);

    switch (operation.toLowerCase()) {
        case 'findAllFilms':
            const films = await collection.find({}).toArray();
            console.log(films)
            callback({ films: films });
            break;

        default:
            break;
    }

    console.log('call complete: ' + operation);
    client.close();
    return 'call complete';
}