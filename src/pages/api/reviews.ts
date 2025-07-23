// ✅ src/pages/api/reviews.ts
import clientPromise from '@/lib/db/mongodb';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const client = await clientPromise;
    const db = client.db('nextShop');
    const collection = db.collection('reviews');

    const reviews = await collection.find({}).toArray();
    res.status(200).json(reviews);
    // const reviews = await collection.find({}).toArray();
console.log('Fetched reviews:', reviews);

  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch reviews',err });
  }
}
