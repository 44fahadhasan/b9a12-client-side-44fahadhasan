import PropTypes from "prop-types";

const ContainerBox = ({ children }) => {
  return <section className="container w-[87%] mx-auto">{children}</section>;
};

ContainerBox.propTypes = {
  children: PropTypes.node,
};

export default ContainerBox;
