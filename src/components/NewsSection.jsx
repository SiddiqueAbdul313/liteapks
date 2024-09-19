import { useState } from "react";
import NewsCard from "./NewsCard";
import { newsData } from "../constants/dummyData";

const NewsSection = () => {
  const [viewAll, setViewAll] = useState(false);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  const displayedNews = viewAll ? newsData : newsData.slice(0, 3);

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">News</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleViewAll}
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayedNews.map((item, index) => (
          <NewsCard key={index} title={item.title} image={item.image} />
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
