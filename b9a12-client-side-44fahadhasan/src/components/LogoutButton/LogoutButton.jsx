import useLogout from "../../hooks/useLogout";

const LogoutButton = () => {
  const { toogleComponent, handleLogOut } = useLogout();

  return (
    <>
      {toogleComponent && (
        <button
          onClick={handleLogOut}
          className="px-4 py-2 text-sm rounded-full font-bold hover:text-white border-2 border-[#FB4C35] hover:bg-[#FB4C35] transition-all ease-in-out duration-300 hover:bg-transparent text-[#FB4C35]"
        >
          Logout
        </button>
      )}
    </>
  );
};

export default LogoutButton;
