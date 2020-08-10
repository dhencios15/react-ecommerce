import React from 'react';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../../redux/cart/cart.selector';
import './CartDropDown.style.scss';

import CustomButton from '../../CustomButton';
import CartItem from '../CartItem';

const CartDropDown = () => {
  const cartItems = useSelector((state) => selectCartItems(state));

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropDown;
