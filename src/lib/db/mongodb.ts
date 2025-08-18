import { MongoClient, ServerApiVersion } from "mongodb"

declare global {
  // eslint-disable-next-line no-var
  var _mongoClientPromise: Promise<MongoClient> | undefined
}

const uri = process.env.MONGODB_URI
if (!uri) throw new Error("Please define MONGODB_URI in .env.local")

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const clientPromise = global._mongoClientPromise ?? client.connect()

if (!global._mongoClientPromise) {
  global._mongoClientPromise = clientPromise
}

export default clientPromise
