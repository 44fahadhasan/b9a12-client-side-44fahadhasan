import PropTypes from "prop-types";

import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import LoadingButtion from "../LoadingButtion/LoadingButtion";

const CheckoutForm = ({ subcsubscriptionInfo }) => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [clientSecret, setClientSecret] = useState("");

  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  useEffect(() => {
    if (subcsubscriptionInfo?.price) {
      axiosSecure
        .post("/create-payment-intent", {
          price: subcsubscriptionInfo?.price,
        })
        .then((res) => {
          setClientSecret(res?.data?.clientSecret);
        });
    }
  }, [axiosSecure, subcsubscriptionInfo]);

  //

  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setLoading(true);

    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card == null) {
      return;
    }

    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    if (error) {
      setError(error?.message);
      setLoading(false);
    }

    // last steap payment confirm
    const { paymentIntent, error: paymentConfirmError } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: card,
          billing_details: {
            email: user?.email,
          },
        },
      });

    if (paymentIntent) {
      // when payment succesfull then if block execute
      if (paymentIntent?.status === "succeeded") {
        //

        const data = {
          subcsubscriptionEndTime:
            subcsubscriptionInfo?.subcsubscriptionEndDate,
          email: user?.email,
        };

        axiosSecure
          .patch(`/make-user-premium`, data)
          .then((res) => {
            //
            if (res.data.acknowledged) {
              Swal.fire({
                title: "Subscribed!",
                text: "Subscription Successful",
                icon: "success",
              });
            }
            //
          })
          .catch((error) => {
            toast.error(error?.message);
            setLoading(false);
          });
        //

        setLoading(false);
        return toast.success("Payment Successfull");

        //
      }

      // when have a error then else if block execute
    } else if (paymentConfirmError) {
      //
      toast.error(paymentConfirmError?.message);
      //
    }

    // from handler end
  };

  return (
    <div>
      {error && <p className="text-red-500 text-center pb-6">{error}</p>}

      <form onSubmit={handleSubmit}>
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#212121",
                "::placeholder": {
                  color: "#212121",
                },
              },
              invalid: {
                color: "#FA4B35",
              },
            },
          }}
        />
        <button
          className="bg-[#FA4B35] hover:bg-[#212121] transition-all duration-300  text-[#fff] py-1 px-3 font-semibold rounded-full w-max mt-8"
          type="submit"
          disabled={!stripe || loading || !clientSecret}
        >
          {loading ? <LoadingButtion label={"loading"} /> : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

CheckoutForm.propTypes = {
  subcsubscriptionInfo: PropTypes.object,
};

export default CheckoutForm;
