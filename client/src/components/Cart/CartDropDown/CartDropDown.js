import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { selectCartItems } from '../../../redux/cart/cart.selector';
import { toggleCartHidden } from '../../../redux/cart/cartActions';
import './CartDropDown.style.scss';

import CustomButton from '../../CustomButton';
import CartItem from '../CartItem';

const CartDropDown = ({ history }) => {
  const cartItems = useSelector((state) => selectCartItems(state));
  const dispatch = useDispatch();

  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {cartItems.length ? (
          cartItems.map((cartItem) => (
            <CartItem key={cartItem.id} item={cartItem} />
          ))
        ) : (
          <span className='empty-message'>Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          history.push('/checkout');
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropDown);
