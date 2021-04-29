import React from 'react';
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';
import SimpleCardForm from '../SimpleCardForm/SimpleCardForm';

const stripePromise = loadStripe('pk_test_51IfzmnKRZ3F8kA0JY1O7FCD3FYQOzifhqYeSN7BTrgpCyUsJDZqBGckoTUiJHlLts4DpJUmfVEqCTS8V7Di4koFy00znK14lug');

const PaymentProcess = ({handlePaymentSuccess}) => {
    return (
        <div>
            <Elements stripe={stripePromise}>
                <SimpleCardForm handlePaymentSuccess={handlePaymentSuccess}></SimpleCardForm>
            </Elements>
        </div>
    );
};

export default PaymentProcess;