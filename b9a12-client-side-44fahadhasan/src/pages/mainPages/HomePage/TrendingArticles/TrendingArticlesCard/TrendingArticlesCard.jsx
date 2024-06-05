import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const TrendingArticlesCard = ({ trendingArticle }) => {
  const { _id, title, image, time } = trendingArticle || {};

  const navigate = useNavigate();
  return (
    <div className="bg-white  rounded overflow-hidden group">
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
        <button
          onClick={() => navigate(`/Article-Details/${_id}`)}
          type="button"
          className="px-4 py-2 mt-6 rounded text-white text-sm tracking-wider border-none outline-none bg-[#FB4C35] hover:bg-orange-600"
        >
          Read More
        </button>
      </div>
    </div>
  );
};

TrendingArticlesCard.propTypes = {
  trendingArticle: PropTypes.object,
};
export default TrendingArticlesCard;
