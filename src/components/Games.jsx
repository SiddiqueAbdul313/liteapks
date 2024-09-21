import { useState } from "react";
import { gamesData } from "../constants/dummyData";

function Games() {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  const visibleGames = viewAll ? gamesData : gamesData.slice(0, 6);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Games - Latest Updates</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleViewAll}
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleGames.map((game, index) => (
          <div
            key={index}
            className="border rounded p-4 flex flex-col sm:flex-row items-start gap-4"
          >
            <img
              src={game.image || "https://via.placeholder.com/150"}
              alt={game.name}
              className="w-full sm:w-32 h-20 object-cover rounded"
              draggable={false}
            />
            <div className="text-left flex-grow">
              <h3 className="font-semibold text-lg">{game.name}</h3>
              <p className="text-sm text-gray-600">
                Version: {game.version} - Size: {game.size}
              </p>
              <p className="text-sm text-red-500">{game.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Games;
