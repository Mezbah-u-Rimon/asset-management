import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import CheckoutForm from "./CheckoutForm";
import { Helmet } from "react-helmet-async";
import Packages from "../Home/Packages/Packages";


const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_Gateway_PK)

const Payment = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <Helmet>
                <title> Asset Management || Payment </title>
            </Helmet>

            <Packages></Packages>
            <div className="h-screen mt-20 max-w-5xl mx-auto ">
                <h1 className=" text-4xl font-bold text-center">Bay The <span className="text-indigo-500">Packages </span> </h1>
                <p className="md:w-2/4 text-gray-500 pt-3 text-center mx-auto pb-10">Comprehensive services and enhanced features for bigger organizations.Offers expanded services and support for growing businesses.</p>

                <Elements stripe={stripePromise}>
                    <CheckoutForm></CheckoutForm>
                </Elements>
            </div>
        </div>

    );
};

export default Payment;