import { PayPalButtons, PayPalScriptProvider, usePayPalScriptReducer } from "@paypal/react-paypal-js";
export const Checkout = () => {
    return(
        <PayPalScriptProvider
            options={{
                "client-id": "AeF5ltxo74d2kKMGqkm_5E8Cc7dq4ZngtTCLMDuezf0Wd1FE4lOlTYXXVgDGET3ebZyRELl3lLaVAFRq"
            }}
        >
            <PayPalButtons
                createOrder={(data, actions) => {
                    return actions.order.create({
                        purchase_units: [
                            {
                                amount: {
                                    value: "1.99",
                                },
                            },
                        ],
                    });
                }}
                onApprove={(data, actions) => {
                    return actions.order.capture().then((details) => {
                        const name = details.payer.name.given_name;
                        alert(`Transaction completed by ${name}`);
                    });
                }}
            />
        </PayPalScriptProvider>
    )
}