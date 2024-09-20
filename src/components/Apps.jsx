import { useState } from "react";
import { appsData } from "../constants/dummyData";

function Apps() {
  const [viewAll, setViewAll] = useState(false); // State to track viewAll

  const handleViewAll = () => {
    setViewAll(!viewAll); // Toggle between showing all or fewer apps
  };

  // Limit the number of apps shown when viewAll is false
  const visibleApps = viewAll ? appsData : appsData.slice(0, 6);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-xl font-bold">Apps - Latest Updates</h2>
        <button
          className="bg-green-500 text-white px-4 py-2 rounded"
          onClick={handleViewAll}
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleApps.map((app, index) => (
          <div
            key={index}
            className="border rounded p-4 flex flex-col sm:flex-row items-start gap-4"
          >
            <img
              src={app.image || "https://via.placeholder.com/150"}
              alt={app.name}
              className="w-full sm:w-32 h-20 object-cover rounded"
            />
            <div className="text-left flex-grow">
              <h3 className="font-semibold text-lg">{app.name}</h3>
              <p className="text-sm text-gray-600">
                Version: {app.version} - Size: {app.size}
              </p>
              <p className="text-sm text-red-500">{app.status}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Apps;
