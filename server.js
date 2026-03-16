import "dotenv/config"
import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
const port = process.env.PORT || 3001;

const uri = process.env.MONGO_URI;
const client = new MongoClient(uri);

app.get('/', async (req, res) => {

    try {
        // Connect the client to the server
        await client.connect();
        // Establish and verify database connection
        await client.db("admin").command({ ping: 1 });
        console.log("Connected successfully to MongoDB!");
        res.status(200).json({message:"Successfully connected to the database!"});
    } catch(err) {
        console.log("Failed to connect to the database.")
        res.status(500).json({message: "Failed to connect to the database."})
    } finally {
        // Ensures that the client will close
        await client.close();
    }

});

app.listen(port, () => {
    console.log(`Server listening on port: ${port}`);
});