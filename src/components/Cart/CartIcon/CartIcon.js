import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping.svg';
import './CartIcon.style.scss';

import { toggleCartHidden } from '../../../redux/cart/cartActions';

const CartIcon = () => {
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
