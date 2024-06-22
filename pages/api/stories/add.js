import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('slotx');

  switch (req.method) {
    case 'POST':
      const { title, image, words } = req.body;
      const newStory = { title, image, words };

      const result = await db.collection('stories').insertOne(newStory);
      res.status(201).json({
        id: result.insertedId.toString(),
        title: newStory.title,
        image: newStory.image,
        words: newStory.words,
      });
      break;
    default:
      res.setHeader('Allow', ['POST']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
