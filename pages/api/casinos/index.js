import clientPromise from '../../../lib/mongodb';

export default async function handler(req, res) {
  const client = await clientPromise;
  const db = client.db('slotx');

  switch (req.method) {
    case 'GET':
      const casinos = await db.collection('casinos').find({}).toArray();
      // Simplify data structure and initialize all fields
      const simplifiedCasinos = casinos.map(casino => ({
        id: casino._id.toString(),
        name: casino.name,
        vpn: casino.vpn || false,
        cryptoOnly: casino.cryptoOnly || false,
        sportsbook: casino.sportsbook || false,
        tableGames: casino.tableGames || false,
        welcomeBonus: casino.welcomeBonus || false,
        instantPayout: casino.instantPayout || false,
        upvotes: casino.upvotes ? parseInt(casino.upvotes.$numberInt || casino.upvotes) : 0,
        referralLink: casino.referralLink,
        logo: casino.logo,
        comments: casino.comments || []
      }));
      res.json(simplifiedCasinos);
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${req.method} Not Allowed`);
      break;
  }
}
