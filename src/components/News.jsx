import { useState } from "react";
import NewsCard from "./NewsCard";
import { newsData } from "../constants/dummyData";

const News = () => {
  const [viewAll, setViewAll] = useState(false);
  const [selectedNews, setSelectedNews] = useState(null);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handleNewsClick = (news) => {
    setSelectedNews(news);
  };

  const handleCloseModal = () => {
    setSelectedNews(null);
  };

  const displayedNews = viewAll ? newsData : newsData.slice(0, 4);

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
          <div
            key={index}
            onClick={() => handleNewsClick(item)}
            className="cursor-pointer"
          >
            <NewsCard title={item.title} image={item.image} />
          </div>
        ))}
      </div>

      {selectedNews && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white p-6 rounded-md max-w-lg w-full mx-2">
            <h2 className="text-xl font-bold mb-4">{selectedNews.title}</h2>
            <img
              src={selectedNews.image || "https://via.placeholder.com/150"}
              alt={selectedNews.title}
              className="w-full h-64 object-contain mb-4"
            />
            <p>
              <strong>Category:</strong> {selectedNews.category}
            </p>
            <p>
              <strong>Date:</strong> {selectedNews.date}
            </p>
            <p className="mt-4">
              This is a detailed description about {selectedNews.title}. It can
              include more information, news body, or additional context about
              the topic.
            </p>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded float-left mt-2"
              onClick={handleCloseModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
