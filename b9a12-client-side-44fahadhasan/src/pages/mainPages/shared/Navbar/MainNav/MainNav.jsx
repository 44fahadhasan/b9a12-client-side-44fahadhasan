import { useState } from "react";

import DrawerVerticalMenu from "../../../../../components/DrawerVerticalMenu/DrawerVerticalMenu";
import LogoutButton from "../../../../../components/LogoutButton/LogoutButton";
import MenuListItems from "../../../../../components/MenuListItems/MenuListItems";
import SiteLogo from "../../../../../components/SiteLogo/SiteLogo";

const MainNav = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <section className="flex shadow-sm py-3 px-4 sm:px-10 bg-[#212121] font-[sans-serif] min-h-[70px] tracking-wide relative ">
      <div className="flex flex-wrap items-center justify-between lg:gap-y-4 gap-y-6 gap-x-4 w-full">
        {/* website logo */}
        <SiteLogo />

        {/* horizontal drawer menu for small device start here */}
        <DrawerVerticalMenu
          setToggleMenu={setToggleMenu}
          toggleMenu={toggleMenu}
        />
        {/* horizontal drawer menu for small device end here */}

        {/* vertical menu for large device start here */}
        <div className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-40 max-lg:before:inset-0 max-lg:before:z-50">
          {/* menu list for small and large device */}
          <MenuListItems />
        </div>
        {/* vertical menu for large device end here */}

        {/* right side part of navbar */}
        <div className="flex items-center max-sm:ml-auto">
          {/* logout button */}
          <div className="hidden lg:block">
            <LogoutButton />
          </div>

          {/* toggle menu button for small device */}
          <button
            onClick={() => {
              setToggleMenu(true);
            }}
            className="lg:hidden ml-7"
          >
            <svg
              className="w-7 h-7"
              fill="#fff"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default MainNav;
