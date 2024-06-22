// pages/api/casinos/add.js
import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const client = await clientPromise;
    const db = client.db('slotx');
    const newCasino = req.body;

    const result = await db.collection('casinos').insertOne(newCasino);
    const insertedCasino = await db.collection('casinos').findOne({ _id: result.insertedId });

    res.status(201).json(insertedCasino);
  } catch (error) {
    res.status(500).json({ error: 'Failed to add casino' });
  }
}
