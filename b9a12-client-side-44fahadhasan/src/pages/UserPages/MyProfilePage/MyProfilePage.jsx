import { useRef, useState } from "react";
import toast from "react-hot-toast";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import LoadingButtion from "../../../components/LoadingButtion/LoadingButtion";
import useAuth from "../../../hooks/useAuth";
import useUserInfo from "../../../hooks/useUserInfo";
import imgFileToUrl from "../../../utils/urlConverter";

const MyProfilePage = () => {
  const [loading, setLoading] = useState(false);
  const [editInput, setEditInput] = useState(true);

  const { activeUserInfo, isLoading } = useUserInfo();

  const { user, updateUserProfile } = useAuth();

  const textInputRef = useRef(null);

  // handleProfileEdit
  const handleProfileEdit = () => {
    setEditInput(!editInput);
    textInputRef.current.focus();
  };

  // from handler
  const handleFromSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const fullName = e.target.fullName.value;
    const imageFile = e.target.imageFile.files[0];

    try {
      // get img url form img hosting api
      const imageUrl = await imgFileToUrl(imageFile);
      // update profile
      updateUserProfile(fullName, imageUrl)
        .then(() => {
          // Profile updated!
          setEditInput(true);
          setLoading(false);
          return toast.success(
            "Profile updated successfull.Please page reload now."
          );
        })
        .catch((error) => {
          // An error occurred
          toast.error(error.message);
          setLoading(false);
        });
    } catch (error) {
      toast.error(error?.message);
      setLoading(false);
    }
  };

  return (
    <div className="font-sans antialiased text-gray-900 leading-normal tracking-wider bg-cover bg-[url('https://source.unsplash.com/1L71sPT5XKc')]">
      <div className="max-w-4xl flex items-center h-auto flex-wrap mx-auto">
        {/* <!--Main Col--> */}
        <div className="w-full lg:w-3/5 rounded-lg lg:rounded-l-lg lg:rounded-r-none shadow-2xl bg-white opacity-100 mx-6 lg:mx-0">
          <div className="p-4 md:p-12 text-center lg:text-left ">
            {/* <!-- Image for mobile view--> */}
            <div className="lg:hidden rounded-full  shadow-md mx-auto x-mt-16 h-48 w-48">
              <img
                src={user?.photoURL}
                className="lg:rounded-lg object-cover rounded-full"
                referrerPolicy="no-referrer"
              />
            </div>

            <h1 className="text-3xl font-bold pt-8 lg:pt-0">
              {user?.displayName}
            </h1>

            <div className="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-[#FB4C35] opacity-25"></div>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-[#FB4C35]">
              <MdOutlineWorkspacePremium className="text-2xl " />
              Premium :{" "}
              {(isLoading && <LoadingButtion />) || (
                <span className="text-[#111827] ml-2">
                  {activeUserInfo?.premium ? "Subscribe" : "Unsubscribe"}
                </span>
              )}
            </p>
            <p className="pt-4 text-base font-bold flex items-center justify-center lg:justify-start text-[#FB4C35]">
              <MdOutlineWorkspacePremium className="text-2xl " />
              Role :{" "}
              {(isLoading && <LoadingButtion />) || (
                <span className="text-[#111827] ml-2">
                  {activeUserInfo?.role}
                </span>
              )}
            </p>

            <div className="pt-12 pb-8">
              <button
                onClick={handleProfileEdit}
                className="bg-[#212121] hover:bg-[#FB4C35] transition-all duration-300 text-white font-bold py-1 px-2 rounded-full"
              >
                Update Profile
              </button>
            </div>

            {/* user form */}
            <div className="pt-8">
              <form
                onSubmit={handleFromSubmit}
                className="space-y-6 pb-8 text-left"
              >
                <div className="space-y-1 text-base ">
                  <label className="block ">Full Name</label>
                  <input
                    readOnly={editInput ? true : false}
                    ref={textInputRef}
                    type="text"
                    defaultValue={user.displayName || "Name not available"}
                    name="fullName"
                    className={`${
                      editInput && "focus:outline-none"
                    } w-full px-4 py-3 rounded-md    focus:border-default-400 bg-[#FAFAFA]`}
                  />
                </div>

                <div className="space-y-1  text-base">
                  <label className="block ">Email</label>
                  <input
                    disabled
                    type="email"
                    title="Read Only"
                    defaultValue={user.email || "Email not available"}
                    name="email"
                    className="w-full px-4 py-3 rounded-md cursor-not-allowed"
                  />
                </div>

                <div className="space-y-1  text-base">
                  <label className="block ">Image</label>
                  <input
                    accept="image/*"
                    required
                    disabled={editInput ? true : false}
                    type="file"
                    name="imageFile"
                    className={`${
                      editInput && "focus:outline-none"
                    } w-full px-4 py-3 rounded-md    focus:border-default-400 bg-[#FAFAFA]`}
                  />
                </div>

                {/* button */}
                <button
                  disabled={(editInput && true) || false}
                  className={`${
                    (editInput && "cursor-not-allowed bg-[#212121] ") ||
                    "transition-all duration-300 hover:scale-95 hover:bg-primary bg-[#FB4C35]"
                  } text-base text-center px-2 rounded-full text-white `}
                >
                  {loading ? <LoadingButtion label={"loading"} /> : "Save"}
                </button>
              </form>
            </div>
            {/* user form */}

            <div className="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between">
              <a
                className="link"
                href="#"
                data-tippy-content="@facebook_handle"
              >
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-[#FB4C35]"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Facebook</title>
                  <path d="M22.676 0H1.324C.593 0 0 .593 0 1.324v21.352C0 23.408.593 24 1.324 24h11.494v-9.294H9.689v-3.621h3.129V8.41c0-3.099 1.894-4.785 4.659-4.785 1.325 0 2.464.097 2.796.141v3.24h-1.921c-1.5 0-1.792.721-1.792 1.771v2.311h3.584l-.465 3.63H16.56V24h6.115c.733 0 1.325-.592 1.325-1.324V1.324C24 .593 23.408 0 22.676 0" />
                </svg>
              </a>
              <a className="link" href="#" data-tippy-content="@twitter_handle">
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-[#FB4C35]"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>Twitter</title>
                  <path d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z" />
                </svg>
              </a>
              <a className="link" href="#" data-tippy-content="@github_handle">
                <svg
                  className="h-6 fill-current text-gray-600 hover:text-[#FB4C35]"
                  role="img"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <title>GitHub</title>
                  <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* <!--Img Col--> */}
        <div className="w-full lg:w-2/5">
          {/* <!-- Big profile image for side bar (desktop) --> */}
          <img
            src={user?.photoURL}
            className="rounded-none lg:rounded-lg shadow-2xl hidden lg:block object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
      </div>
    </div>
  );
};

export default MyProfilePage;
