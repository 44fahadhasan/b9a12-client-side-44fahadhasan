const TrendingArticlesCard = () => {
  return (
    <div className="bg-white cursor-pointer rounded overflow-hidden group">
      <div className="relative overflow-hidden">
        <img
          src="https://readymadeui.com/Imagination.webp"
          alt="Blog Post 1"
          className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300"
        />
        <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-[#FB4C35] absolute bottom-0 right-0">
          June 10, 2023
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#333]">
          A Guide to Igniting Your Imagination
        </h3>
        <button
          type="button"
          className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-[#FB4C35] hover:bg-orange-600"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

export default TrendingArticlesCard;
