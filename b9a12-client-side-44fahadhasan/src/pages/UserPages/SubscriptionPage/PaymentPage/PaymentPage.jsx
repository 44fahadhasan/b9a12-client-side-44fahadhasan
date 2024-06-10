import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useLocation } from "react-router-dom";
import CheckoutForm from "../../../../components/CheckoutForm/CheckoutForm";

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PK_KEY);

const PaymentPage = () => {
  const location = useLocation();

  const { subscriptionEndTime, price } = location.state || {};

  return (
    <div className="flex flex-col justify-center items-center min-h-screen font-medium text-[#212121] space-y-3">
      <h1 className="font-bold sm:text-4xl text-2xl text-[#212121] text-center ">
        Payment Page
      </h1>
      <p>Expired Subscription Date: {subscriptionEndTime.toLocaleString()}</p>
      <p>Payment Amount: {price}.00$</p>

      {/* payment from */}
      <>
        <Elements stripe={stripePromise}>
          <CheckoutForm data={location.state} />
        </Elements>
      </>
    </div>
  );
};

export default PaymentPage;
