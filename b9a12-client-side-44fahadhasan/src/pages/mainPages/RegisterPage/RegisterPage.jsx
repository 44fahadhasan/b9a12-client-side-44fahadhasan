import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingButtion from "../../../components/LoadingButtion/LoadingButtion";
import SiteLogo from "../../../components/SiteLogo/SiteLogo";
import useAuth from "../../../hooks/useAuth";
import imgFileToUrl from "../../../utils/urlConverter";

const RegisterPage = () => {
  const [togglePassword, setTogglePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const { createUserEmailAndPassword, updateUserProfile } = useAuth();

  // react hook from
  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  // register from handle
  const onSubmit = async (data) => {
    setLoading(true);
    // input field data
    const fullName = data.fullName;
    const imageFile = data?.image[0];
    const email = data.email;
    const password = data.password;

    try {
      // get img url form img hosting api
      const imageUrl = await imgFileToUrl(imageFile);

      // create a new user with email & password
      createUserEmailAndPassword(email, password)
        .then(() => {
          // user profile info
          updateUserProfile(fullName, imageUrl);
          toast.success("Created an new account successfully");
          setLoading(false);
          navigate(from, { replace: true });
        })
        .catch((error) => {
          toast.error(error?.message);
          setLoading(false);
        });

      // clear input
      resetField("fullName");
      resetField("email");
      resetField("image");
      resetField("password");
    } catch (error) {
      toast.error(error?.message);
      setLoading(false);
    }
  };

  // toggle password
  const handlePasswordToggle = () => {
    setTogglePassword(!togglePassword);
  };

  return (
    <div className="font-[sans-serif] text-[#fff] bg-[#212121] flex items-center  p-4">
      <div className="w-full max-w-5xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 bg-[#212121] w-full sm:p-8 p-6 rounded relative">
          {/* left side */}
          <div className="space-y-6 w-full">
            <div className="md:mb-16 mb-12">
              {/* logo */}
              <SiteLogo />
            </div>
            <div className="space-y-10">
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-7 sm:h-7 w-5 h-5 bg-[#FA4B35] fill-white rounded-full p-1 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 className="sm:text-lg text-base font-semibold">
                  Create Your Account
                </h4>
              </div>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-7 sm:h-7 w-5 h-5 bg-[#FA4B35] fill-white rounded-full p-1 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 className="sm:text-lg text-base font-semibold">
                  Simple & Secure Registration
                </h4>
              </div>
              <div className="flex gap-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="sm:w-7 sm:h-7 w-5 h-5 bg-[#FA4B35] fill-white rounded-full p-1 shrink-0"
                  viewBox="0 0 24 24"
                >
                  <path
                    d="M9.707 19.121a.997.997 0 0 1-1.414 0l-5.646-5.647a1.5 1.5 0 0 1 0-2.121l.707-.707a1.5 1.5 0 0 1 2.121 0L9 14.171l9.525-9.525a1.5 1.5 0 0 1 2.121 0l.707.707a1.5 1.5 0 0 1 0 2.121z"
                    data-original="#000000"
                  ></path>
                </svg>
                <h4 className="sm:text-lg text-base font-semibold">
                  Terms and Conditions Agreement
                </h4>
              </div>
            </div>
          </div>

          {/* singup form start */}
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="md:max-w-sm w-full mx-auto"
          >
            <div className="mb-8">
              <h3 className="text-2xl font-extrabold">Register</h3>
            </div>
            <div className="space-y-6">
              {/* name input */}
              <div>
                <label className="text-sm mb-2 block">Name</label>
                <div className="relative flex items-center">
                  <input
                    {...register("fullName", { required: true })}
                    type="text"
                    className="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]"
                    placeholder="Enter name"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      cx="10"
                      cy="7"
                      r="6"
                      data-original="#000000"
                    ></circle>
                    <path
                      d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                      data-original="#000000"
                    ></path>
                  </svg>
                </div>
                {errors.fullName && (
                  <span className="text-[#FA4B35] text-xs">
                    Name is required
                  </span>
                )}
              </div>

              {/* email input */}
              <div>
                <label className="text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    {...register("email", { required: true })}
                    type="email"
                    className="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]"
                    placeholder="Enter email"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#bbb"
                    stroke="#bbb"
                    className="w-4 h-4 absolute right-4"
                    viewBox="0 0 682.667 682.667"
                  >
                    <defs>
                      <clipPath id="a" clipPathUnits="userSpaceOnUse">
                        <path
                          d="M0 512h512V0H0Z"
                          data-original="#000000"
                        ></path>
                      </clipPath>
                    </defs>
                    <g
                      clipPath="url(#a)"
                      transform="matrix(1.33 0 0 -1.33 0 682.667)"
                    >
                      <path
                        fill="none"
                        strokeMiterlimit="10"
                        strokeWidth="40"
                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                        data-original="#000000"
                      ></path>
                    </g>
                  </svg>
                </div>
                {errors.email && (
                  <span className="text-[#FA4B35] text-xs">
                    Email is required
                  </span>
                )}
              </div>

              {/* image input */}
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    {...register("image", { required: true })}
                    type="file"
                    className="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]"
                    placeholder="Enter password"
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-4 h-4 absolute right-4 cursor-pointer"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                    />
                  </svg>
                </div>
                {errors.image && (
                  <span className="text-[#FA4B35] text-xs">
                    Image is required
                  </span>
                )}
              </div>

              {/* password input */}
              <div>
                <label className="text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    {...register("password", {
                      required: true,
                      pattern:
                        /^(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*(),.?":{}|<>])[A-Za-z\d!@#$%^&*(),.?":{}|<>]{6,}$/,
                    })}
                    type={togglePassword ? "password" : "text"}
                    className="bg-transparent border border-gray-400 w-full text-sm pl-4 pr-10 py-2.5 rounded outline-[#333]"
                    placeholder="Enter password"
                  />
                  <span
                    className="absolute right-2 cursor-pointer"
                    onClick={handlePasswordToggle}
                  >
                    {(!togglePassword && (
                      <svg
                        className="w-6 h-6 text-[#9CA3AF]"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z"
                        />
                        <path
                          stroke="currentColor"
                          strokeWidth="2"
                          d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )) || (
                      <svg
                        className="w-6 h-6 text-[#9CA3AF] "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M3.933 13.909A4.357 4.357 0 0 1 3 12c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 21 12c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M5 19 19 5m-4 7a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                        />
                      </svg>
                    )}
                  </span>
                </div>
                {errors?.password?.type === "required" && (
                  <span className="text-[#FA4B35] text-xs">
                    Password is required
                  </span>
                )}
                {errors?.password?.type === "pattern" && (
                  <span className="text-[#FA4B35] text-xs">
                    Password pattern must be special,capital,numeric and length
                    6
                  </span>
                )}
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  className="h-4 w-4 shrink-0 text-[#FA4B35] focus:text-[#FA4B35]border-gray-300 rounded"
                />
                <label htmlFor="remember-me" className="ml-3 block text-sm">
                  I accept the{" "}
                  <Link
                    to=""
                    className="text-white font-semibold hover:underline ml-1"
                  >
                    Terms and Conditions
                  </Link>
                </label>
              </div>
            </div>
            <div className="!mt-10">
              <button
                disabled={loading}
                type="submit"
                className="w-full py-3 px-4 text-sm font-semibold rounded-full bg-[#333] hover:bg-[#FA4B35] text-white focus:outline-none transition-all duration-300"
              >
                {loading ? (
                  <LoadingButtion label={"loading"} />
                ) : (
                  "Create Account"
                )}
              </button>
            </div>
            <p className="text-sm mt-6 text-center">
              Already have an account?{" "}
              <Link
                to="/Login"
                className="text-[#FA4B35] font-semibold hover:underline ml-1"
              >
                Login here
              </Link>
            </p>
          </form>
          {/* singup form end */}

          <div className="divider absolute left-0 right-0 mx-auto w-1 h-full border-l border-[#333] max-md:hidden"></div>
        </div>
      </div>
    </div>
  );
};

export default RegisterPage;
