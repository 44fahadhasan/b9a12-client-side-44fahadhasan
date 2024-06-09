import { IoClose } from "react-icons/io5";
import { NavLink } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useLogout from "../../hooks/useLogout";
import SiteLogo from "../SiteLogo/SiteLogo";

const MenuListItems = ({ setToggleMenu }) => {
  const { admin: isAdmin, premiumUser: isPremiumUser } = useLogout();

  const { user } = useAuth();

  const registerUser = !user;
  const admin = isAdmin;
  const premium = isPremiumUser;

  // menu lists
  const ListItems = [
    {
      name: "Home",
      path: "/",
    },
    {
      name: "All Articles",
      path: "All-Articles",
    },
    {
      isPremium: premium,
      name: "Premium Articles",
      path: "Premium-Articles",
    },
    {
      isLogin: registerUser,
      name: "Subscription",
      path: "Subscription",
    },
    {
      isLogin: registerUser,
      name: "My Articles",
      path: "My-Articles",
    },
    {
      isLogin: registerUser,
      name: "Add Articles",
      path: "Add-Articles",
    },
    {
      isAdmin: admin,
      name: "Dashboard",
      path: "Dashboard",
    },
  ];

  const { handleLogOut, toogleComponent } = useLogout();

  return (
    <ul className="xl:flex xl:gap-x-10 max-xl:space-y-3 max-xl:fixed max-xl:bg-[#212121] max-xl:w-2/3 max-xl:min-w-full max-xl:top-0 max-xl:left-0 max-xl:p-4 max-xl:h-full max-xl:shadow-md max-xl:overflow-auto z-50">
      {/* website logo & other components for vertical menu start here */}
      <li className="mb-6 hidden max-xl:flex justify-between items-center">
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
        {toogleComponent && (
          <button
            onClick={() => handleLogOut()}
            className="px-4 py-2 text-sm rounded-full font-bold hover:text-white border-2 border-[#FB4C35] hover:bg-[#FB4C35] transition-all ease-in-out duration-300 hover:bg-transparent text-[#FB4C35]"
          >
            Logout
          </button>
        )}
      </li>
      {/* website logo & other components for vertical menu end here */}

      {/* list items */}
      {ListItems.map((listItem, idx) => (
        <li
          key={idx}
          className={`${
            (listItem?.isLogin ? "hidden" : undefined) ||
            (listItem?.isAdmin ? "hidden" : undefined) ||
            (listItem?.isPremium ? "hidden" : undefined)
          } max-xl:border-b max-xl:py-3 max-xl:px-3 relative xl:hover:after:absolute xl:after:bg-white xl:after:w-0 xl:hover:after:w-full xl:hover:after:h-[2px] xl:after:block xl:after:top-6 xl:after:transition-all xl:after:duration-300 text-[15px] text-white`}
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

export default MenuListItems;
