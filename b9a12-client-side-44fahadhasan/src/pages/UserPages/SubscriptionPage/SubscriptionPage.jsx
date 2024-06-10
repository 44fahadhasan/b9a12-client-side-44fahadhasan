import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import ContainerBox from "../../../components/ContainerBox/ContainerBox";

const SubscriptionPage = () => {
  const [subscriptionPeriod, setSubscriptionPeriod] = useState("");

  const navigate = useNavigate();

  const subscriptionPrice = {
    "1 Minute": 10,
    "5 Days": 500,
    "10 Days": 1000,
  };

  const handleSubscribe = () => {
    const subscriptionEndTime = new Date();

    if (subscriptionPeriod === "1 Minute") {
      subscriptionEndTime.setMinutes(subscriptionEndTime.getMinutes() + 1);
    } else if (subscriptionPeriod === "5 Days") {
      subscriptionEndTime.setDate(subscriptionEndTime.getDate() + 5);
    } else if (subscriptionPeriod === "10 Days") {
      subscriptionEndTime.setDate(subscriptionEndTime.getDate() + 10);
    } else {
      return toast.error("Please Select Subscription Period");
    }

    // data send to payment page
    navigate("/Payment", {
      state: {
        subscriptionEndTime,
        price: subscriptionPrice[subscriptionPeriod],
      },
    });
    // end navigate
  };

  // handle period for subscription
  const handlePeriodChange = (e) => {
    const periodData = e.target.value;

    setSubscriptionPeriod(periodData);
  };

  return (
    <ContainerBox>
      <div className="bg-[#212121] font-sans min-h-[350px] relative  mx-auto rounded overflow-hidden">
        <div className="grid lg:grid-cols-2 w-full h-full absolute inset-0">
          <div className="p-4 max-lg:hidden">
            <img
              src="https://readymadeui.com/image-1.webp"
              className="object-cover w-full h-full"
              alt="img"
            />
          </div>

          <div className="flex flex-col items-end justify-center text-right px-8 relative bg-[#262464] rounded-tl-[206px] z-20 before:absolute before:inset-0 before:!left-auto before:bg-[#293587] before:w-2/3 before:rounded-bl-[206px] before:-z-10">
            <h3 className="font-bold sm:text-4xl text-2xl text-[#fff]">
              Invest in Knowledge – Navigate the Depths of Truth
            </h3>
            <p className="text-sm text-gray-300 mt-4">
              Elevate your understanding with exclusive insights and expert
              analysis. Subscribe today and transform every read into a profound
              exploration.
            </p>

            <button
              onClick={handleSubscribe}
              type="button"
              className="bg-[#FA4B35] hover:bg-[#212121] transition-all duration-300  text-[#fff] py-3 px-8 font-semibold rounded-full w-max mt-8"
            >
              Unlock Premium Access
            </button>
          </div>
        </div>
      </div>
      {/* banner end */}

      {/* subscription start here */}
      <div className="mt-14">
        <h3 className="font-bold sm:text-4xl text-2xl text-[#212121] text-center ">
          Choose Subscription Period
        </h3>

        {/* subscription */}
        <div className="max-w-sm mx-auto mt-6">
          <select
            defaultValue={subscriptionPeriod}
            onChange={handlePeriodChange}
            className="block py-2.5 px-0 w-full text-sm text-[#212121] font-medium bg-transparent border-0 border-b-2 cursor-pointer border-[#FA4B35] appearance-none focus:outline-none focus:ring-0 focus:border-gray-200"
          >
            <option value={""}>Select Period</option>
            <option value="1 Minute">1 Minute</option>
            <option value="5 Days">5 Days</option>
            <option value="10 Days">10 Days</option>
          </select>

          {subscriptionPrice[subscriptionPeriod] && (
            <p className="mt-3 font-medium">
              Price: {subscriptionPrice[subscriptionPeriod]}.00$
            </p>
          )}

          {/* button  */}
          <div className="flex justify-center">
            <button
              onClick={handleSubscribe}
              className="bg-[#FA4B35] hover:bg-[#212121] transition-all duration-300  text-[#fff] py-2 px-5 font-semibold rounded-full w-max mt-8"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </ContainerBox>
  );
};

export default SubscriptionPage;
