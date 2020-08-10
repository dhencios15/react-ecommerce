import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_CwzbTc8IpQF13fbnh25dMeEe00qb7TWFb7';

  const onToken = (token) => {
    console.log(token);
    alert('Payment Success');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='Dhencio Clothing Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is ₱${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeButton;
