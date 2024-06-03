import { FiSearch } from "react-icons/fi";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";
import SectionContent from "../../../components/SectionContent/SectionContent";
import ArticleCard from "./ArticleCard/ArticleCard";

const AllArticlesPage = () => {
  const articles = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1];

  return (
    <div className="bg-[#E6E7E8] font-[sans-serif]">
      <ContainerBox>
        {/* card area */}
        <div>
          <div className="text-center">
            <SectionContent title={"All Articles Available"} />
          </div>

          <div className="w-[70%] sm:max-w-72 mx-auto mt-10">
            {/* search area */}
            <div className="relative w-full flex items-center justify-between">
              <form className="relative mx-auto flex  sm:w-full items-center justify-between">
                {/* icon */}
                <FiSearch className="absolute left-2 block h-5 w-5 text-gray-400" />

                {/* search input */}
                <input
                  type="text"
                  className="w-full rounded-full py-2 pl-8  outline-none"
                />

                {/* search button */}
                <button
                  type="submit"
                  className="absolute right-0 mr-1 inline-flex items-center justify-center  bg-gray-900 px-2 rounded-full py-1 font-medium text-white hover:bg-gray-700"
                >
                  Search
                </button>
              </form>
            </div>

            {/* filter area */}
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 justify-items-center	items-center mt-10">
              {/* publisher filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-stone-600">
                  Filter by Publisher
                </label>

                <select
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Cadberry</option>
                  <option>Starbucks</option>
                  <option>Hilti</option>
                </select>
              </div>

              {/* tags filter */}
              <div className="flex flex-col">
                <label className="text-sm font-medium text-stone-600">
                  Filter by Tags
                </label>

                <select
                  id="manufacturer"
                  className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-blue-500 focus:ring focus:ring-blue-200 focus:ring-opacity-50"
                >
                  <option>Cadberry</option>
                  <option>Starbucks</option>
                  <option>Hilti</option>
                </select>
              </div>
            </div>
          </div>

          {/* card container */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-16  mx-auto">
            {/* single card */}
            {articles?.map((article, idx) => (
              <ArticleCard key={idx} article={article} />
            ))}
          </div>
        </div>
      </ContainerBox>
    </div>
  );
};

export default AllArticlesPage;
