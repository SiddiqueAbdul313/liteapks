import { useState } from "react";
import { appsData } from "../constants/dummyData";
import Categories from "./Categories";

function Apps() {
  const [viewAll, setViewAll] = useState(false);
  const [selectedApp, setSelectedApp] = useState(null);

  const handleViewAll = () => {
    setViewAll(!viewAll);
  };

  const handleAppClick = (app) => {
    setSelectedApp(app);
  };

  const handleCloseDetails = () => {
    setSelectedApp(null);
  };
  const handleInstall = () => {
    alert("File not available");
  };

  const visibleApps = viewAll ? appsData : appsData.slice(0, 6);

  return (
    <div className="p-3">
      <div className="flex items-center justify-between mb-5">
        <h2 className="text-md font-bold">Apps - Latest Updates</h2>
        <button
          className="bg-green-500 text-white p-1 px-3 rounded text-md"
          onClick={handleViewAll}
        >
          {viewAll ? "Show Less" : "View All"}
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {visibleApps.map((app, index) => (
          <div
            key={index}
            className="border rounded p-4 flex flex-col sm:flex-row items-start gap-4 cursor-pointer"
            onClick={() => handleAppClick(app)}
          >
            <img
              src={app.image || "https://via.placeholder.com/150"}
              alt={app.name}
              className="w-full sm:w-32 h-20 object-cover rounded"
              draggable={false}
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
      {viewAll && <Categories />}

      {selectedApp && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-md w-full m-2">
            <h2 className="text-xl font-bold mb-4">{selectedApp.name}</h2>
            <img
              src={selectedApp.image}
              alt={selectedApp.name}
              className="w-full h-40 object-contain rounded mb-4"
            />
            <p className="text-lg">Version: {selectedApp.version}</p>
            <p className="text-lg">Size: {selectedApp.size}</p>
            <p className="text-sm text-red-500 mb-4">{selectedApp.status}</p>
            <p className="text-gray-600">
              This is a detailed description of the app {selectedApp.name}.
              Explore its features, version updates, and more.
            </p>
            <div className="flex items-center justify-between">
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded outline-none"
                onClick={handleCloseDetails}
              >
                Close
              </button>
              <button
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded outline-none"
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

export default Apps;
