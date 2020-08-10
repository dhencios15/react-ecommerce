import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ReactComponent as ShoppingIcon } from '../../../assets/shopping.svg';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../../redux/cart/cartActions';
import './CartIcon.style.scss';

const CartIcon = () => {
  const cartCount = useSelector((state) => selectCartItemsCount(state));
  const dispatch = useDispatch();
  return (
    <div className='cart-icon' onClick={() => dispatch(toggleCartHidden())}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;
