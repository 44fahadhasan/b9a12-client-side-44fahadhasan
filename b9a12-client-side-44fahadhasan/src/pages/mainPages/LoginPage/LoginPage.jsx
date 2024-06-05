import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Link, useLocation, useNavigate } from "react-router-dom";
import LoadingButtion from "../../../components/LoadingButtion/LoadingButtion";
import useAuth from "../../../hooks/useAuth";
import useCreateNewUser from "../../../hooks/useCreateNewUser";

const LoginPage = () => {
  const [togglePassword, setTogglePassword] = useState(true);
  const [loading, setLoading] = useState(false);

  const { userLoginEmailAndPassword, loginWithGoogle } = useAuth();

  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const newUserSaveInDb = useCreateNewUser;

  const {
    register,
    handleSubmit,
    resetField,
    formState: { errors },
  } = useForm();

  // from handler
  const onSubmit = (data) => {
    setLoading(true);
    const email = data.email;
    const password = data.password;

    userLoginEmailAndPassword(email, password)
      .then(() => {
        // Signed in
        toast.success("Login successful by email account");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error?.message);
        setLoading(false);
      });

    resetField("email");
    resetField("password");
  };

  // password view toggle
  const handlePasswordToggle = () => {
    setTogglePassword(!togglePassword);
  };

  // handle google login
  const handleGoogleLogin = () => {
    loginWithGoogle()
      .then((res) => {
        // new user data save to database start
        if (res?.user) {
          const userData = {
            email: res?.user?.email,
            name: res?.user?.displayName,
            image: res?.user?.photoURL,
          };
          newUserSaveInDb(userData);
        }
        // new user data save to database end

        toast.success("Login successful by google account");
        setLoading(false);
        navigate(from, { replace: true });
      })
      .catch((error) => {
        toast.error(error?.message);
        setLoading(false);
      });
  };

  return (
    <div className="flex justify-center items-center font-[sans-serif] h-full min-h-screen p-4 text-[#fff] bg-[#212121]">
      <div className="max-w-md w-full mx-auto">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="bg-opacity-70 bg-[#212121] rounded-2xl p-6 shadow-[0_2px_16px_-3px_rgba(6,81,237,0.3)] space-y-6"
        >
          <div className="mb-10">
            <h3 className="text-3xl font-extrabold">Login</h3>
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
                    <path d="M0 512h512V0H0Z" data-original="#000000"></path>
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
              <span className="text-[#FA4B35] text-xs">Email is required</span>
            )}
          </div>

          {/* password input */}
          <div>
            <label className="text-sm mb-2 block">Password</label>
            <div className="relative flex items-center">
              <input
                {...register("password", { required: true })}
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
          </div>

          {/* Remember me */}
          <div className="flex items-center justify-between gap-2 mt-6">
            <div className="flex items-center">
              <input
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 shrink-0 border-gray-300 rounded"
              />
              <label htmlFor="remember-me" className="ml-3 block text-sm">
                Remember me
              </label>
            </div>
            <div>
              <a href="" className="text-sm font-semibold hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>

          {/* sign in button */}
          <div className="mt-10">
            <button
              type="submit"
              className="w-full py-3 px-4 text-sm font-semibold rounded-full bg-[#333] hover:bg-[#FA4B35] text-white focus:outline-none transition-all duration-300"
            >
              {loading ? <LoadingButtion label={"loading"} /> : "Login"}
            </button>
            <p className="text-sm text-center mt-6">
              Don&apos;t have an account{" "}
              <Link
                to="/Register"
                className="text-[#FA4B35] font-semibold hover:underline ml-1 whitespace-nowrap"
              >
                Register here
              </Link>
            </p>
          </div>

          <hr className="my-6 border-gray-500" />

          {/* google button */}
          <div className="space-x-8 flex justify-center">
            <button
              onClick={handleGoogleLogin}
              type="button"
              className="border-none outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="30px"
                className="inline"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#fbbd00"
                  d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z"
                  data-original="#fbbd00"
                />
                <path
                  fill="#0f9d58"
                  d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z"
                  data-original="#0f9d58"
                />
                <path
                  fill="#31aa52"
                  d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z"
                  data-original="#31aa52"
                />
                <path
                  fill="#3c79e6"
                  d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z"
                  data-original="#3c79e6"
                />
                <path
                  fill="#cf2d48"
                  d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z"
                  data-original="#cf2d48"
                />
                <path
                  fill="#eb4132"
                  d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z"
                  data-original="#eb4132"
                />
              </svg>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
