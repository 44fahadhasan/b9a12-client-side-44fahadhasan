import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const PriceCard = ({
  badge,
  tittle,
  price,
  priceLabel,
  lists,
  bntTxt,
  footerTxt,
  border,
}) => {
  return (
    <div
      className={`bg-white hover:outline outline-[#F94B35]  rounded relative overflow-hidden transition-all flex flex-col ${
        border ? "border-[3px] outline-0" : ""
      } justify-between border-[#F94B35]`}
    >
      <div className="p-6 pb-20">
        <div className="text-left">
          {badge && (
            <span className="bg-[#F94B35] text-white inline-block text-center px-2 py-1 rounded text-md font-semibold mb-4">
              {badge}
            </span>
          )}
          <h4 className="text-2xl mb-4 font-semibold">{tittle}</h4>
          <h3 className="text-3xl font-semibold">{price}</h3>
          <h3 className="text-base font-medium mt-1">{priceLabel}</h3>
        </div>
        <div className="mt-8">
          <ul className="space-y-4">
            {lists?.map((list, idx) => (
              <li key={idx} className="flex items-center text-sm">
                <div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="17"
                    className="mr-4 bg-gray-200 fill-[#333] rounded-full p-[3px]"
                    viewBox="0 0 24 24"
                  >
                    <path
                      d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                      data-original="#000000"
                    />
                  </svg>
                </div>
                {list?.name}
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="">
        <div className="w-[90%]  mx-auto">
          <Link to="Subscription">
            <button className="w-full rounded-full px-2 h-12 text-sm font-semibold text-[#333] bg-gray-200">
              {bntTxt}
            </button>
          </Link>
        </div>

        <div className="pb-5 px-2">
          <p className="text-sm mt-4 text-center">{footerTxt}</p>
        </div>
      </div>
    </div>
  );
};

PriceCard.propTypes = {
  badge: PropTypes.string,
  tittle: PropTypes.string,
  price: PropTypes.string,
  priceLabel: PropTypes.string,
  lists: PropTypes.array,
  bntTxt: PropTypes.string,
  footerTxt: PropTypes.string,
  border: PropTypes.string,
};

export default PriceCard;
