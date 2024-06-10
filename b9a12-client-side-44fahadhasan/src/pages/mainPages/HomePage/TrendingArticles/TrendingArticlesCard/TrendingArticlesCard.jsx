import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import useLogout from "../../../../../hooks/useLogout";

const TrendingArticlesCard = ({ trendingArticle }) => {
  const { _id, title, image, time, isPremium } = trendingArticle || {};

  const navigate = useNavigate();

  const { premiumUser } = useLogout();

  return (
    <div
      className={`${
        isPremium && "hover:bg-[#fb4c353a]  transition-all duration-300"
      } bg-white  rounded overflow-hidden group`}
    >
      <div className="relative overflow-hidden">
        <img
          src={image}
          className="w-full h-60 object-cover group-hover:scale-125 transition-all duration-300 "
        />
        <div className="px-4 py-2.5 text-white text-sm tracking-wider bg-[#FB4C35] absolute bottom-0 right-0">
          {new Date(time).toLocaleDateString("en-US")}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-[#333]">{title?.slice(0, 25)}</h3>

        {/* premium button  start */}
        {(isPremium && !premiumUser && (
          <button
            onClick={() => navigate(`/Article-Details/${_id}`)}
            className="text-white inline-block text-center px-3 py-1 rounded text-sm font-medium mt-6 tracking-wider border-none outline-none transition-all duration-300 bg-[#F94B35] hover:bg-[#f94c35e8]"
          >
            View
          </button>
        )) ||
          (isPremium && (
            <button
              disabled={premiumUser}
              className="text-white inline-block text-center px-3 py-1 rounded text-sm font-medium mt-6 tracking-wider border-none outline-none transition-all duration-300 bg-[#444444ca]"
            >
              View
            </button>
          ))}
        {/* premium button  end */}

        {/*  normal button start */}
        <button
          onClick={() => navigate(`/Article-Details/${_id}`)}
          className={`text-white inline-block text-center px-3 py-1 rounded text-sm font-medium mt-6 tracking-wider border-none outline-none transition-all duration-300 bg-[#F94B35] hover:bg-[#f94c35e8] ${
            isPremium ? "hidden" : undefined
          }`}
        >
          View
        </button>
        {/* normal button end */}
      </div>
    </div>
  );
};

TrendingArticlesCard.propTypes = {
  trendingArticle: PropTypes.object,
};
export default TrendingArticlesCard;
