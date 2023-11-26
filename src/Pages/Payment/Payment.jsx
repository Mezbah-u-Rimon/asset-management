import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_Gateway_PK)

const Payment = () => {
    return (
        <div className="h-screen mt-20 max-w-5xl mx-auto">
            <Helmet>
                <title> Asset Management || Payment </title>
            </Helmet>
            <Elements stripe={stripePromise}>
                <CheckoutForm></CheckoutForm>
            </Elements>
        </div>
    );
};

export default Payment;