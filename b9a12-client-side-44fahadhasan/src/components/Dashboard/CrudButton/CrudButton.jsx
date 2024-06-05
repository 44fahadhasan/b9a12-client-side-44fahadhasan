import PropTypes from "prop-types";

const CrudButton = ({ label }) => {
  return (
    <span className="px-3 py-2 text-xs font-medium text-center text-white bg-[#FB4C35] rounded-lg hover:bg-[#fb4c35ca] transition-all duration-300">
      {label}
    </span>
  );
};

CrudButton.propTypes = {
  label: PropTypes.string,
};

export default CrudButton;
