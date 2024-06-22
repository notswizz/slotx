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
    const { id } = req.body;

    const result = await db.collection('stories').updateOne(
      { _id: new ObjectId(id) },
      { $inc: { shares: 1 } }  // Assuming you have a 'shares' field in your stories collection
    );

    if (result.modifiedCount === 1) {
      const updatedStory = await db.collection('stories').findOne({ _id: new ObjectId(id) });
      res.status(200).json(updatedStory);
    } else {
      res.status(404).json({ error: 'Story not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to share story' });
  }
}
