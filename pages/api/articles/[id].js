import clientPromise from '../../../lib/mongodb';
import { ObjectId } from 'mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('slotx');
  const { id } = req.query;

  try {
    const article = await db.collection('stories').findOne({ _id: new ObjectId(id) });
    if (article) {
      res.status(200).json({
        id: article._id.toString(),
        title: article.title,
        image: article.image,
        words: article.words,
      });
    } else {
      res.status(404).json({ message: 'Article not found' });
    }
  } catch (error) {
    res.status(500).json({ message: 'Error fetching article', error });
  }
}
