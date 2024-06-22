const EmojiKey = ({ filters, toggleFilter }) => {
    return (
      <div className="flex flex-col md:flex-row justify-center items-center mt-8 space-y-4 md:space-y-0 md:space-x-8">
        <div
          className={`flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-lg ${filters.vpn ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white'} hover:shadow-lg transition duration-300 ease-in-out`}
          onClick={() => toggleFilter('vpn')}
        >
          <span>🌐</span>
          <span className="text-gray-700">VPN Needed</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-lg ${filters.cryptoOnly ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white'} hover:shadow-lg transition duration-300 ease-in-out`}
          onClick={() => toggleFilter('cryptoOnly')}
        >
          <span>🔗</span>
          <span className="text-gray-700">Crypto Only</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-lg ${filters.sportsbook ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white'} hover:shadow-lg transition duration-300 ease-in-out`}
          onClick={() => toggleFilter('sportsbook')}
        >
          <span>🏅</span>
          <span className="text-gray-700">Sportsbook Available</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-lg ${filters.tableGames ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white'} hover:shadow-lg transition duration-300 ease-in-out`}
          onClick={() => toggleFilter('tableGames')}
        >
          <span>🎲</span>
          <span className="text-gray-700">Table Games</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-lg ${filters.welcomeBonus ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white'} hover:shadow-lg transition duration-300 ease-in-out`}
          onClick={() => toggleFilter('welcomeBonus')}
        >
          <span>🎁</span>
          <span className="text-gray-700">Welcome Bonus</span>
        </div>
        <div
          className={`flex items-center space-x-2 cursor-pointer border border-gray-300 p-2 rounded-lg ${filters.instantPayout ? 'bg-gradient-to-r from-blue-200 to-blue-400 text-blue-900' : 'bg-white'} hover:shadow-lg transition duration-300 ease-in-out`}
          onClick={() => toggleFilter('instantPayout')}
        >
          <span>⚡</span>
          <span className="text-gray-700">Instant Payout</span>
        </div>
      </div>
    );
  };
  
  export default EmojiKey;
  