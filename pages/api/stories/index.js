import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('slotx');

  switch (req.method) {
    case 'GET':
      const stories = await db.collection('stories').find({}).toArray();
      res.json(stories.map(story => ({
        id: story._id.toString(),
        title: story.title,
        image: story.image,
        words: story.words,
      })));
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
