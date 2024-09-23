import { useState } from "react";
import { gamesData } from "../constants/dummyData";

function Games() {
  const [viewAll, setViewAll] = useState(false);
  const [selectedGame, setSelectedGame] = useState(null);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handleGameClick = (game) => {
    setSelectedGame(game);
  };

  const handleCloseModal = () => {
    setSelectedGame(null);
  };
  const handleInstall = () => {
    alert("File not available.");
  };

  const visibleGames = viewAll ? gamesData : gamesData.slice(0, 6);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-sm sm:text-xl font-bold">Games - Latest Updates</h2>
        <button
          className="bg-green-500 text-white p-2 rounded text-sm"
          onClick={handleViewAll}
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleGames.map((game, index) => (
          <div
            key={index}
            className="border rounded p-4 flex flex-col sm:flex-row items-start gap-4 cursor-pointer"
            onClick={() => handleGameClick(game)}
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

      {selectedGame && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-md max-w-lg w-full mx-2">
            <h2 className="text-xl font-bold mb-4">{selectedGame.name}</h2>
            <img
              src={selectedGame.image || "https://via.placeholder.com/150"}
              alt={selectedGame.name}
              className="w-full h-64 object-cover mb-4 rounded-lg"
            />
            <p>
              <strong>Version:</strong> {selectedGame.version}
            </p>
            <p>
              <strong>Size:</strong> {selectedGame.size}
            </p>
            <p className="text-red-500">
              <strong className="text-black">Status:</strong>{" "}
              {selectedGame.status}
            </p>
            <p className="mt-4">
              This is a detailed description about {selectedGame.name}. It can
              include game features, updates, and other relevant information.
            </p>
            <div className="flex items-center justify-between">
              <button
                className="bg-green-500 text-white px-4 py-2 rounded float-left mt-2"
                onClick={handleCloseModal}
              >
                Close
              </button>
              <button
                className="bg-green-500 text-white px-4 py-2 rounded float-left mt-2"
                onClick={handleInstall}
              >
                Install
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Games;
