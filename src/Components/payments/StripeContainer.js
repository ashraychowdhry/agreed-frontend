import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import React from "react"
import PaymentForm from "./PaymentForm"

const PUBLIC_KEY = "pk_test_51K1ZoeGwb0i41CKwBGF7XuFuVAZhTP1QlLNv5l6z917biXKAJQYTVy0K0V0lE2AqS9vDXDJUX2aTv1A4nmZpMz5w00wXoKVI6R"

const stripeTestPromise = loadStripe(PUBLIC_KEY)

export default function StripeContainer() {
	return (
            <Elements stripe={stripeTestPromise}>
			    <PaymentForm />
		    </Elements>
	)
}