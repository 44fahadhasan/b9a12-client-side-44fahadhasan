import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";
import PropTypes from "prop-types";

const FeedbackCard = ({ feedback }) => {
  const { image, name, ratings, premium, text } = feedback || {};

  return (
    <div className="swiper-slide group bg-white border border-solid border-gray-300 rounded-2xl max-sm:max-w-sm max-sm:mx-auto p-6 transition-all duration-500 hover:border-indigo-600">
      <div className="flex items-center gap-5 mb-5 sm:mb-9">
        <img src={image} alt="avatar" />
        <div className="grid gap-1">
          <h5 className="text-gray-900 font-medium transition-all duration-500  ">
            {name}
          </h5>
          <span className="text-sm leading-6 text-gray-500">
            {premium ? "Premium User" : "Normal User"}
          </span>
        </div>
      </div>
      <div className="flex items-center mb-5 sm:mb-9 gap-2 text-amber-500 transition-all duration-500  ">
        <Rating style={{ maxWidth: 110 }} value={ratings} readOnly />
      </div>
      <p className="text-sm text-gray-500 leading-6 transition-all duration-500 min-h-24  group-hover:text-gray-800">
        {text}
      </p>
    </div>
  );
};

FeedbackCard.propTypes = {
  feedback: PropTypes.object,
};

export default FeedbackCard;
