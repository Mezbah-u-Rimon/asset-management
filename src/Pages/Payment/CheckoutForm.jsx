import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import useAxiosAdmin from "../../Hooks/useAxiosAdmin";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";


const CheckoutForm = () => {
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState("")
    const [clientSecret, setClientSecret] = useState("")
    const [transactionId, setTransactionId] = useState("")
    const axiosAdmin = useAxiosAdmin()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth();
    const navigate = useNavigate();


    const { isPending, data: packagePrice = {} } = useQuery({
        queryKey: ['packagePrice', 'packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/adminUsers');
            const users = await res.data;
            const usersPrice = await users.find(user => user)
            return usersPrice.packages
        }
    })


    useEffect(() => {
        if (packagePrice > 0) {
            axiosAdmin.post("/create-payment-intent", { price: packagePrice })
                .then(res => {
                    setClientSecret(res.data.clientSecret)
                })
        }
    }, [axiosAdmin, packagePrice])


    if (isPending) {
        return <p>loading </p>;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        })

        if (error) {
            console.log("error method", error);
            setError(error.message)
        }
        else {
            console.log('payment method', paymentMethod);
            setError("")
        }

        //confirm payment
        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: user?.email || 'anonymous',
                    name: user?.displayName || 'anonymous',
                }
            }
        })

        if (confirmError) {
            console.log('confirm error');
        }
        else {
            if (paymentIntent.status === 'succeeded') {
                setTransactionId(paymentIntent.id)

                Swal.fire({
                    position: "top-end",
                    icon: "success",
                    title: "Thank you for the payment",
                    showConfirmButton: false,
                    timer: 1500
                });

                navigate('/')
            }
        }
    }


    return (
        <form onSubmit={handleSubmit}>
            <CardElement className="border-2 border-double py-3 px-3 border-blue-400 md:w-2/4 w-9/12 mx-auto"
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },

                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            <button className="mx-auto block py-2 px-5 border-2 border-double text-blue-500 border-blue-500 mt-4" type="submit"
                disabled={!stripe || !clientSecret} >
                Bay Package
            </button>
            <p className="text-red-600 text-center mt-5">
                {error}
            </p>
            {
                transactionId && <p className="text-green-600 text-center mt-5">
                    your transaction id: {transactionId}
                </p>
            }
        </form>
    );
};

export default CheckoutForm;