import React from 'react';
import { useSelector } from 'react-redux';

import {
  selectCartItems,
  selectCartTotal,
} from '../../redux/cart/cart.selector';
import './CheckOut.style.scss';

import CheckOutItem from '../../components/CheckOutItem';
import StripeButton from '../../components/StripeButton';

const CheckOut = () => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const totalPrice = useSelector((state) => selectCartTotal(state));

  return (
    <div className='checkout-page'>
      <div className='checkout-header'>
        <div className='header-block'>
          <span>Product</span>
        </div>
        <div className='header-block'>
          <span>Description</span>
        </div>
        <div className='header-block'>
          <span>Quantity</span>
        </div>
        <div className='header-block'>
          <span>Price</span>
        </div>
        <div className='header-block'>
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem) => (
        <CheckOutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <div className='total'>
        <span>TOTAL: ₱{totalPrice}</span>
      </div>
      <div className='test-warning'>
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - EXP: 08/20 - CVV: 123
      </div>
      <StripeButton price={totalPrice} />
    </div>
  );
};

export default CheckOut;
