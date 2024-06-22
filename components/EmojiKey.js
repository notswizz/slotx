import React from 'react';

const EmojiKey = ({ filters, toggleFilter }) => {
  const buttonClasses = (filter) =>
    `flex items-center space-x-2 cursor-pointer border p-2 rounded-lg transition duration-300 ease-in-out ${
      filter ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white border-gray-300'
    } hover:shadow-lg`;

  return (
    <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-8 p-4 border-2 border-gray-200 rounded-xl bg-gradient-to-r from-gray-100 to-gray-200">
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
  );
};

export default EmojiKey;
