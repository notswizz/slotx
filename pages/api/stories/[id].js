import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('slotx');

  switch (req.method) {
    case 'GET':
      try {
        const { id } = req.query;
        const story = await db.collection('stories').findOne({ _id: new ObjectId(id) });
        if (!story) {
          return res.status(404).json({ message: 'Story not found' });
        }

        // Ensure shares is always returned as a number
        const shares = story.shares ? (story.shares.$numberInt || story.shares) : 0;

        res.json({
          id: story._id.toString(),
          title: story.title,
          image: story.image,
          words: story.words,
          description: story.description, // Assuming you have a description field
          shares: parseInt(shares, 10), // Ensure shares is a number
        });
      } catch (error) {
        res.status(500).json({ message: 'Error fetching story' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
