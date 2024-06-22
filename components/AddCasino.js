import { useState } from 'react';

const AddCasino = ({ addCasino }) => {
  const [name, setName] = useState('');
  const [vpn, setVpn] = useState(false);
  const [cryptoOnly, setCryptoOnly] = useState(false);
  const [sportsbook, setSportsbook] = useState(false);
  const [tableGames, setTableGames] = useState(false);
  const [welcomeBonus, setWelcomeBonus] = useState(false);
  const [instantPayout, setInstantPayout] = useState(false);
  const [referralLink, setReferralLink] = useState('');
  const [logo, setLogo] = useState('');
  const [recommendation, setRecommendation] = useState('green'); // New state for recommendation

  const handleSubmit = (e) => {
    e.preventDefault();
    const newCasino = {
      name,
      vpn,
      cryptoOnly,
      sportsbook,
      tableGames,
      welcomeBonus,
      instantPayout,
      referralLink,
      logo,
      recommendation, // Include recommendation in the new casino data
      comments: [],
      upvotes: 0,
    };
    addCasino(newCasino);
    setName('');
    setVpn(false);
    setCryptoOnly(false);
    setSportsbook(false);
    setTableGames(false);
    setWelcomeBonus(false);
    setInstantPayout(false);
    setReferralLink('');
    setLogo('');
    setRecommendation('green'); // Reset recommendation
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className="block text-gray-700">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-2 border rounded"
          required
        />
      </div>
      <div>
        <label className="block text-gray-700">VPN</label>
        <input
          type="checkbox"
          checked={vpn}
          onChange={(e) => setVpn(e.target.checked)}
          className="mr-2"
        />
        🌐
      </div>
      <div>
        <label className="block text-gray-700">Crypto Only</label>
        <input
          type="checkbox"
          checked={cryptoOnly}
          onChange={(e) => setCryptoOnly(e.target.checked)}
          className="mr-2"
        />
        🔗
      </div>
      <div>
        <label className="block text-gray-700">Sportsbook</label>
        <input
          type="checkbox"
          checked={sportsbook}
          onChange={(e) => setSportsbook(e.target.checked)}
          className="mr-2"
        />
        🏅
      </div>
      <div>
        <label className="block text-gray-700">Table Games</label>
        <input
          type="checkbox"
          checked={tableGames}
          onChange={(e) => setTableGames(e.target.checked)}
          className="mr-2"
        />
        🎲
      </div>
      <div>
        <label className="block text-gray-700">Welcome Bonus</label>
        <input
          type="checkbox"
          checked={welcomeBonus}
          onChange={(e) => setWelcomeBonus(e.target.checked)}
          className="mr-2"
        />
        🎁
      </div>
      <div>
        <label className="block text-gray-700">Instant Payout</label>
        <input
          type="checkbox"
          checked={instantPayout}
          onChange={(e) => setInstantPayout(e.target.checked)}
          className="mr-2"
        />
        ⚡
      </div>
      <div>
        <label className="block text-gray-700">Referral Link</label>
        <input
          type="text"
          value={referralLink}
          onChange={(e) => setReferralLink(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Logo URL</label>
        <input
          type="text"
          value={logo}
          onChange={(e) => setLogo(e.target.value)}
          className="w-full p-2 border rounded"
        />
      </div>
      <div>
        <label className="block text-gray-700">Recommendation</label>
        <select
          value={recommendation}
          onChange={(e) => setRecommendation(e.target.value)}
          className="w-full p-2 border rounded"
        >
          <option value="green">Green</option>
          <option value="yellow">Yellow</option>
          <option value="red">Red</option>
        </select>
      </div>
      <button type="submit" className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
        Add Casino
      </button>
    </form>
  );
};

export default AddCasino;
