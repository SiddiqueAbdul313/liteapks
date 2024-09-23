import { categoriesData } from "../constants/dummyData";

export default function Categories() {
  return (
    <div className="translate-y-10 flex-col m-auto items-center justify-center">
      <h2 className="text-sm sm:text-xl font-bold mx-2">Categories</h2>
      {categoriesData.map((item, index) => (
        <button
          className="bg-green-500 text-white px-4 py-1 rounded-lg m-2"
          key={index}
        >
          {item.category}
        </button>
      ))}
    </div>
  );
}
