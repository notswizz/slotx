import { useEffect, useState } from 'react';
import CommentModal from './CommentModal';
import EmojiKey from './EmojiKey';

const Casino = () => {
  const [casinos, setCasinos] = useState([]);
  const [filters, setFilters] = useState({
    vpn: false,
    cryptoOnly: false,
    sportsbook: false,
    tableGames: false,
    welcomeBonus: false,
    instantPayout: false,
  });
  const [vouchedCasinos, setVouchedCasinos] = useState(new Set());
  const [selectedCasino, setSelectedCasino] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    fetch('/api/casinos')
      .then((res) => {
        if (!res.ok) throw new Error('Network response was not ok');
        return res.json();
      })
      .then((data) => {
        const initializedCasinos = data.map((casino) => ({
          ...casino,
          upvotes: casino.upvotes || 0,
          comments: casino.comments || [],
        }));
        setCasinos(initializedCasinos);
      })
      .catch((error) => console.error('Error fetching casinos:', error));
  }, []);

  const toggleFilter = (filter) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filter]: !prevFilters[filter],
    }));
  };

  const handleVouch = async (id) => {
    if (vouchedCasinos.has(id)) return;

    const res = await fetch('/api/casinos/vouch', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id }),
    });

    if (res.ok) {
      const updatedCasino = await res.json();
      setCasinos((prevCasinos) =>
        prevCasinos.map((casino) =>
          casino.id === updatedCasino._id ? { ...casino, upvotes: updatedCasino.upvotes } : casino
        )
      );
      setVouchedCasinos((prevVouched) => new Set(prevVouched).add(id));
    }
  };

  const openModal = (casino) => {
    setSelectedCasino(casino);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedCasino(null);
    setIsModalOpen(false);
  };

  const addComment = async (id, comment) => {
    const res = await fetch('/api/casinos/addComment', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id, comment }),
    });

    if (res.ok) {
      const updatedCasino = await res.json();
      setCasinos((prevCasinos) =>
        prevCasinos.map((casino) =>
          casino.id === updatedCasino._id ? updatedCasino : casino
        )
      );
    }
  };

  const filteredCasinos = casinos.filter((casino) => {
    return (
      (!filters.vpn || casino.vpn) &&
      (!filters.cryptoOnly || casino.cryptoOnly) &&
      (!filters.sportsbook || casino.sportsbook) &&
      (!filters.tableGames || casino.tableGames) &&
      (!filters.welcomeBonus || casino.welcomeBonus) &&
      (!filters.instantPayout || casino.instantPayout)
    );
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-5xl font-extrabold text-center mb-10 text-gray-800">
        Online Casino Options
      </h1>
  
      <EmojiKey filters={filters} toggleFilter={toggleFilter} />
  
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8 max-h-screen overflow-y-auto">
        {filteredCasinos.map((casino) => (
          <div
            key={casino.id}
            className="bg-white border border-gray-300 rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105"
          >
            <div className="p-6">
              <a
                href={casino.referralLink}
                target="_blank"
                rel="noopener noreferrer"
                className="text-2xl font-semibold mb-2 text-gray-800 hover:text-blue-500"
              >
                {casino.name}
              </a>
              {casino.logo && (
                <img
                  src={casino.logo}
                  alt={`${casino.name} logo`}
                  className="mb-4 w-full h-32 object-cover rounded"
                />
              )}
              <div className="flex space-x-4 text-lg">
                {casino.vpn && <span className="text-blue-600">🌐</span>}
                {casino.cryptoOnly && <span className="text-green-600">🔗</span>}
                {casino.sportsbook && <span className="text-yellow-600">🏅</span>}
                {casino.tableGames && <span className="text-red-600">🎲</span>}
                {casino.welcomeBonus && <span className="text-purple-600">🎁</span>}
                {casino.instantPayout && <span className="text-teal-600">⚡</span>}
              </div>
              <div className="flex items-center justify-between mt-4">
                <button
                  onClick={() => handleVouch(casino.id)}
                  className={`relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium rounded-lg group ${vouchedCasinos.has(casino.id) ? 'bg-gray-500 text-gray-200 cursor-not-allowed' : 'bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800'}`}
                  disabled={vouchedCasinos.has(casino.id)}
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    {vouchedCasinos.has(casino.id) ? 'Vouched' : 'Vouch'} ({casino.upvotes})
                  </span>
                </button>
                <button
                  onClick={() => openModal(casino)}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800"
                >
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Comments ({casino.comments.length})
                  </span>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
  
      {selectedCasino && (
        <CommentModal
          isOpen={isModalOpen}
          onClose={closeModal}
          casino={selectedCasino}
          addComment={addComment}
        />
      )}
    </div>
  );
  
  
};

export default Casino;
