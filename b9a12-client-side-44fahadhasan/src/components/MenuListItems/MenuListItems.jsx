import PropTypes from "prop-types";
import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useLogout from "../../hooks/useLogout";
import SiteLogo from "../SiteLogo/SiteLogo";

const MenuListItems = ({ setToggleMenu }) => {
  const admin = !true;
  const premium = !true;

  // menu lists
  const ListItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "Add Articles",
      path: "Add-Articles",
    },
    {
      name: "All Articles",
      path: "All-Articles",
    },
    {
      name: "Subscription",
      path: "Subscription",
    },
    {
      isAdmin: admin,
      name: "Dashboard",
      path: "Dashboard",
    },
    {
      name: "My Articles",
      path: "My-Articles",
    },
    {
      isPremium: premium,
      name: "Premium Articles",
      path: "Premium-Articles",
    },
  ];

  const { handleLogOut } = useLogout();

  return (
    <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-[#212121] max-lg:w-2/3 max-lg:min-w-full max-lg:top-0 max-lg:left-0 max-lg:p-4 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
      {/* website logo & other components for vertical menu start here */}
      <li className="mb-6 hidden max-lg:flex justify-between items-center">
        {/* menu close button */}
        <button
          type="button"
          className="p-2 text-white hover:text-[#FB4C35]"
          onClick={() => setToggleMenu(false)}
        >
          <IoClose className="h-6 w-6" />
        </button>

        {/* website logo */}
        <SiteLogo />

        {/* logout button for small device */}
        <button
          onClick={() => handleLogOut()}
          className="px-4 py-2 text-sm rounded-full font-bold hover:text-white border-2 border-[#FB4C35] hover:bg-[#FB4C35] transition-all ease-in-out duration-300 hover:bg-transparent text-[#FB4C35]"
        >
          Logout
        </button>
      </li>
      {/* website logo & other components for vertical menu end here */}

      {/* list items */}
      {ListItems.map((listItem, idx) => (
        <li
          key={idx}
          className={`${
            (listItem?.isAdmin ? "hidden" : undefined) ||
            (listItem?.isPremium ? "hidden" : undefined)
          } max-lg:border-b max-lg:py-3 max-lg:px-3 relative lg:hover:after:absolute lg:after:bg-white lg:after:w-0 lg:hover:after:w-full lg:hover:after:h-[2px] lg:after:block lg:after:top-6 lg:after:transition-all lg:after:duration-300 text-[15px] text-white`}
        >
          <NavLink
            to={listItem?.path}
            className={({ isActive }) =>
              isActive ? "text-[#FB4C35]" : undefined
            }
          >
            {listItem?.name}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};

MenuListItems.propTypes = {
  setToggleMenu: PropTypes.func,
};

export default MenuListItems;
