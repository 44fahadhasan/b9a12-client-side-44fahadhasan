import PropTypes from "prop-types";

const SectionContent = ({ title }) => {
  return (
    <>
      <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl text-center">
        {title}
      </h2>
    </>
  );
};

SectionContent.propTypes = {
  title: PropTypes.string,
};

export default SectionContent;
