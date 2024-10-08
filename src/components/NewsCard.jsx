/* eslint-disable react/prop-types */

const NewsCard = ({ title, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-72 p-2">
      <img src={image} alt={title} className="w-full h-48 object-contain" draggable={false} />
      <div className="p-4">
        <h3 className="text-lg font-semibold">{title}</h3>
      </div>
    </div>
  );
};

export default NewsCard;
