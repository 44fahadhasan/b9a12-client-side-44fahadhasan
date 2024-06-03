import PropTypes from "prop-types";

const FilterDropdown = ({ options, disabledValue }) => {
  return (
    <select
      defaultValue={""}
      className="mt-2 block w-full rounded-md border border-gray-100 bg-gray-100 px-2 py-2 shadow-sm outline-none focus:border-none focus:ring focus:ring-blue-200 focus:ring-opacity-50"
    >
      <option disabled value={""}>
        {disabledValue}
      </option>
      {options?.map((option, idx) => (
        <option key={idx}>{option?.name}</option>
      ))}
    </select>
  );
};

FilterDropdown.propTypes = {
  options: PropTypes.array,
  disabledValue: PropTypes.string,
};

export default FilterDropdown;
