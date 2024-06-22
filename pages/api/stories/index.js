import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('slotx');

  switch (req.method) {
    case 'GET':
      try {
        const stories = await db.collection('stories').find({}).toArray();
        const formattedStories = stories.map(story => {
          // Ensure shares is always returned as a number
          const shares = story.shares ? (story.shares.$numberInt || story.shares) : 0;

          return {
            id: story._id.toString(),
            title: story.title,
            image: story.image,
            words: story.words,
            shares: parseInt(shares, 10), // Ensure shares is a number
          };
        });
        console.log('Formatted Stories:', formattedStories); // Log the formatted stories
        res.json(formattedStories);
      } catch (error) {
        res.status(500).json({ message: 'Error fetching stories' });
      }
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
