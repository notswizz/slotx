// pages/api/casinos/addComment.js
import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', ['POST']);
    return res.status(405).end(`Method ${req.method} Not Allowed`);
  }

  try {
    const client = await clientPromise;
    const db = client.db('slotx');
    const { id, comment } = req.body;

    const result = await db.collection('casinos').updateOne(
      { _id: new ObjectId(id) },
      { $push: { comments: comment } }
    );

    if (result.modifiedCount === 1) {
      const updatedCasino = await db.collection('casinos').findOne({ _id: new ObjectId(id) });
      res.status(200).json(updatedCasino);
    } else {
      res.status(404).json({ error: 'Casino not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to add comment' });
  }
}
