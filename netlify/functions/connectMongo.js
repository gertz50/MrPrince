// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = process.env.MONGODB_URI;

// // Create a MongoClient with a MongoClientOptions object to set the Stable API version
// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   }
// });

// async function run() {
//   try {
//     // Connect the client to the server	(optional starting in v4.7)
//     await client.connect();
//     // Send a ping to confirm a successful connection
//     await client.db("admin").command({ ping: 1 });
//     console.log("Pinged your deployment. You successfully connected to MongoDB!");
//   } finally {
//     // Ensures that the client will close when you finish/error
//     await client.close();
//   }
// }
// run().catch(console.dir);



// /.netlify/functions/connectMongo.js

const { MongoClient } = require('mongodb');

exports.handler = async function (event, context) {
  try {
    const client = new MongoClient(process.env.MONGODB_URI);
    await client.connect();

    const db = client.db("MongoDB");
    const collection = db.collection("test");
    const data = await collection.find({}).toArray();

    await client.close();

    return {
      statusCode: 200,
      body: JSON.stringify(data),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Error connecting to MongoDB" }),
    };
  }
};
