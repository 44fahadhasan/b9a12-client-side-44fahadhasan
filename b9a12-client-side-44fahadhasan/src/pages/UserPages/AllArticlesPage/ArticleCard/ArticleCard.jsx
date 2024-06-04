import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import "./style.css";

const ArticleCard = ({ article }) => {
  const isPremiun = !true;

  const { _id, title, image, publisher, description } = article || {};

  const navigate = useNavigate();

  return (
    <div
      className={`bg-white grid sm:grid-cols-1 hover:shadow-xl shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)] w-full max-w-xl  font-[sans-serif] mx-auto mt-4 transform  transition-transform duration-300  rounded-md ${
        isPremiun ? "premium_card hover:scale-105" : undefined
      }`}
    >
      <img
        src={
          image ||
          "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        }
        className="w-full h-[244px] px-[5px] z-10 pt-[5px] rounded-md object-cover"
      />

      <div className="group overflow-hidden">
        <div
          className={`before:duration-700 before:absolute before:border-[#FB4C35] before:w-28 before:h-28 before:bg-transparent before:blur-none  before:opacity-50 before:rounded-full before:-left-4 before:-top-12 flex flex-col justify-between relative z-10 group-hover:before:top-28 group-hover:before:left-44 group-hover:before:scale-125 group-hover:before:blur ${
            isPremiun ? "before:border-8" : undefined
          }`}
        >
          <div className="px-4 py-6 z-10">
            <h3 className="text-xl font-semibold">{title?.slice(0, 27)}</h3>
            <p className="mt-2 text-sm text-gray-400">
              {description?.slice(0, 100)}...
            </p>
            <div className="flex flex-wrap items-center  border  w-full px-4 py-2 mt-6">
              <p className="text-base text-[#FB4C35] font-semibold">
                Publisher:
              </p>
              <div className="ml-1 flex-1">
                <p className="text-sm text-black font-semibold">{publisher}</p>
              </div>
              {isPremiun ? (
                <>
                  <button
                    onClick={() => navigate(`/Article-Details/${_id}`)}
                    disabled={!isPremiun}
                    className={`${
                      isPremiun ? "bg-[#F94B35]" : "bg-[#444444ca]"
                    } text-white inline-block text-center px-2 py-1 rounded text-md font-medium `}
                  >
                    details
                  </button>
                </>
              ) : (
                <>
                  <button
                    onClick={() => navigate(`/Article-Details/${_id}`)}
                    className="bg-[#F94B35] text-white inline-block text-center px-2 py-1 rounded text-md font-medium"
                  >
                    details
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

ArticleCard.propTypes = {
  article: PropTypes.object,
};

export default ArticleCard;
