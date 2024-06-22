import React, { useState } from 'react';

const EmojiKey = ({ filters, toggleFilter }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const buttonClasses = (filter) =>
    `flex items-center space-x-2 cursor-pointer border p-2 rounded-lg transition duration-300 ease-in-out ${
      filter ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white border-gray-300'
    } hover:shadow-lg`;

  return (
    <div className="relative mt-4 md:mt-8 p-4 border-2 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200 animate-glow">
      <button
        className="md:hidden w-full text-center py-2 px-4 border border-gray-300 rounded-lg bg-white hover:shadow-lg transition duration-300 ease-in-out"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        Filters
      </button>
      <div className={`grid grid-cols-1 gap-4 ${isMenuOpen ? 'block' : 'hidden'} md:grid md:grid-cols-3 md:gap-6 md:block`}>
        <div className={buttonClasses(filters.vpn)} onClick={() => toggleFilter('vpn')}>
          <span>🌐</span>
          <span className="text-gray-700">VPN Needed</span>
        </div>
        <div className={buttonClasses(filters.cryptoOnly)} onClick={() => toggleFilter('cryptoOnly')}>
          <span>🔗</span>
          <span className="text-gray-700">Crypto Only</span>
        </div>
        <div className={buttonClasses(filters.sportsbook)} onClick={() => toggleFilter('sportsbook')}>
          <span>🏅</span>
          <span className="text-gray-700">Sportsbook Available</span>
        </div>
        <div className={buttonClasses(filters.tableGames)} onClick={() => toggleFilter('tableGames')}>
          <span>🎲</span>
          <span className="text-gray-700">Table Games</span>
        </div>
        <div className={buttonClasses(filters.welcomeBonus)} onClick={() => toggleFilter('welcomeBonus')}>
          <span>🎁</span>
          <span className="text-gray-700">Welcome Bonus</span>
        </div>
        <div className={buttonClasses(filters.instantPayout)} onClick={() => toggleFilter('instantPayout')}>
          <span>⚡</span>
          <span className="text-gray-700">Instant Payout</span>
        </div>
      </div>
    </div>
  );
};

export default EmojiKey;
