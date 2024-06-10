import { Dialog, Transition } from "@headlessui/react";
import { Drawer, Sidebar } from "flowbite-react";
import PropTypes from "prop-types";
import { CgProfile } from "react-icons/cg";
import { FaUsers } from "react-icons/fa";
import { IoClose, IoHome } from "react-icons/io5";
import {
  MdDashboardCustomize,
  MdOutlineMenuOpen,
  MdOutlinePublishedWithChanges,
} from "react-icons/md";
import { RiArticleFill, RiLogoutBoxFill } from "react-icons/ri";
import { NavLink } from "react-router-dom";
import SiteLogo from "../../../../components/SiteLogo/SiteLogo";
import useLogout from "../../../../hooks/useLogout";

const DashboardNavbar = ({ isOpen, setIsOpen }) => {
  const { handleLogOut, toogleComponent } = useLogout();

  return (
    <>
      <Transition show={isOpen}>
        <Dialog className="relative z-20" onClose={setIsOpen}>
          <Drawer className="bg-[#212121] w-[288px] lg:min-h-[100vh]">
            {/* website logo */}

            <div className="flex justify-center items-center">
              <div>
                <SiteLogo />
              </div>
              <button
                className="text-4xl text-white absolute right-0 mr-2 max-lg:hidden"
                onClick={() => setIsOpen(!isOpen)}
              >
                {isOpen ? <IoClose /> : <MdOutlineMenuOpen />}
              </button>
            </div>

            {/* dashboard menu */}
            <Drawer.Items>
              <Sidebar className="[&>div]:bg-transparent [&>div]:p-0">
                <div className="flex h-full flex-col justify-between py-2">
                  <div>
                    <Sidebar.Items>
                      {/* top menu */}
                      <Sidebar.ItemGroup>
                        <NavLink to="/Dashboard">
                          <Sidebar.Item
                            icon={MdDashboardCustomize}
                            className="text-white hover:text-[#111827]"
                          >
                            Dashboard
                          </Sidebar.Item>
                        </NavLink>

                        <NavLink to="All-Users">
                          <Sidebar.Item
                            icon={FaUsers}
                            className="text-white hover:text-[#111827]"
                          >
                            All Users
                          </Sidebar.Item>
                        </NavLink>

                        <NavLink to="All-Articles">
                          <Sidebar.Item
                            icon={RiArticleFill}
                            className="text-white hover:text-[#111827]"
                          >
                            All Articles
                          </Sidebar.Item>
                        </NavLink>

                        <NavLink to="Add-Publisher">
                          <Sidebar.Item
                            href="/authentication/sign-in"
                            icon={MdOutlinePublishedWithChanges}
                            className="text-white hover:text-[#111827]"
                          >
                            Add Publisher
                          </Sidebar.Item>
                        </NavLink>
                      </Sidebar.ItemGroup>

                      {/* botom menu */}
                      <Sidebar.ItemGroup>
                        <NavLink to="/">
                          <Sidebar.Item
                            icon={IoHome}
                            className="text-white hover:text-[#111827]"
                          >
                            Home
                          </Sidebar.Item>
                        </NavLink>

                        <NavLink to="/My-Profile">
                          <Sidebar.Item
                            icon={CgProfile}
                            className="text-white hover:text-[#111827]"
                          >
                            Profile
                          </Sidebar.Item>
                        </NavLink>

                        {toogleComponent && (
                          <Sidebar.Item
                            onClick={handleLogOut}
                            icon={RiLogoutBoxFill}
                            className="text-white cursor-pointer hover:text-[#111827]"
                          >
                            Logout
                          </Sidebar.Item>
                        )}
                      </Sidebar.ItemGroup>
                    </Sidebar.Items>
                  </div>
                </div>
              </Sidebar>
            </Drawer.Items>
          </Drawer>
        </Dialog>
      </Transition>
    </>
  );
};

DashboardNavbar.propTypes = {
  isOpen: PropTypes.bool,
  setIsOpen: PropTypes.func,
};
export default DashboardNavbar;
