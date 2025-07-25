import { MongoClient, ServerApiVersion } from 'mongodb';

declare global {
  var _mongoClientPromise: Promise<MongoClient> | undefined;
}


const uri = process.env.MONGODB_URI;
if (!uri) throw new Error('MONGODB_URI is not defined');
if (!uri) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

// declare global {
//   // eslint-disable-next-line no-var
//   var _mongoClientPromise: Promise<MongoClient> | undefined;
// }

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

const clientPromise = global._mongoClientPromise ?? client.connect();

if (!global._mongoClientPromise) {
  global._mongoClientPromise = clientPromise;
}

export default clientPromise;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
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
