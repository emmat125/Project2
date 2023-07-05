const express = require('express')
const app = express()
const port = 3000

const { MongoClient } = require('mongodb');
var url = "mongodb://localhost:27017";
const client = new MongoClient(url);

const dbName = "swapi_db";
const collectionName = "films"

module.exports.call = async function call(operation, parameters, callback) {

await client.connect();
const db = client.db(dbName);
const collection = db.collection(collectionName);

console.log( 'call complete: ' + operation );
    client.close();
    return 'call complete';
}
app.get('/', (req, res) => {
    res.send('Hello World');
})

app.get('/api/planets', (req, res) => {
    res.send({test:'fake test'});
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})
