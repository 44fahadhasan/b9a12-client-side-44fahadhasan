import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const PremiumArticleCard = ({ premiumArticle }) => {
  const { _id, title, image, publisher, description } = premiumArticle || {};

  const navigate = useNavigate();
  return (
    <div className="bg-white rounded overflow-hidden group relative before:absolute before:inset-0 before:z-10 before:bg-black before:opacity-50">
      <img
        src={
          image ||
          "https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
        }
        className="w-full h-96 object-cover group-hover:scale-110 transition-all duration-300"
      />
      <div className="p-6 absolute bottom-0 left-0 right-0 z-20">
        <div className="w-full text-gray-300 h-10 text-sm gap-1 flex items-center justify-start  p-1 mb-2">
          <span className="text-sm block  text-[#FB4C35] font-semibold uppercase">
            {publisher} |
          </span>

          <button onClick={() => navigate(`/Article-Details/${_id}`)}>
            <p className="flex items-center justify-center text-white gap-1 w-0 border-0 group-hover:border border-[#FB4C35]  rounded-md group-hover:bg-[#FB4C35] group-hover:w-16 transition-all duration-500">
              <span className="hidden group-hover:flex">Details</span>
            </p>
          </button>
        </div>

        <h3 className="text-xl font-bold text-white">{title?.slice(0, 27)}</h3>
        <div className="mt-4">
          <p className="text-gray-200 text-sm">
            {description?.slice(0, 100)}...
          </p>
        </div>
      </div>
    </div>
  );
};

PremiumArticleCard.propTypes = {
  premiumArticle: PropTypes.object,
};

export default PremiumArticleCard;
