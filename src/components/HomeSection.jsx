import { useState } from "react";
import NewsCard from "./NewsCard";
import { newsData, appsData, gamesData } from "../constants/dummyData";

const HomeSection = () => {
  const [viewAllNews, setViewAllNews] = useState(false);
  const [viewAllApps, setViewAllApps] = useState(false);
  const [viewAllGames, setViewAllGames] = useState(false);

  const handleViewAllNews = () => setViewAllNews(!viewAllNews);
  const handleViewAllApps = () => setViewAllApps(!viewAllApps);
  const handleViewAllGames = () => setViewAllGames(!viewAllGames);

  const displayedNews = viewAllNews ? newsData : newsData.slice(0, 4);
  const displayedApps = viewAllApps ? appsData : appsData.slice(0, 4);
  const displayedGames = viewAllGames ? gamesData : gamesData.slice(0, 4);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">News</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleViewAllNews}
        >
          <a href="/news">View All</a>
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedNews.map((item, index) => (
          <NewsCard key={index} title={item.title} image={item.image} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 mb-4">
        <h2 className="text-2xl font-bold">Apps</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleViewAllApps}
        >
         <a href="/apps">View All</a>
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedApps.map((app, index) => (
          <NewsCard key={index} title={app.name} image={app.image} />
        ))}
      </div>

      <div className="flex justify-between items-center mt-8 mb-4">
        <h2 className="text-2xl font-bold">Games</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleViewAllGames}
        >
          <a href="/games">View All</a>
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedGames.map((game, index) => (
          <NewsCard key={index} title={game.name} image={game.image} />
        ))}
      </div>
    </div>
  );
};

export default HomeSection;
