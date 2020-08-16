import React from 'react';
import { useDispatch } from 'react-redux';

import CustomButton from '../../CustomButton';
import './CollectionItem.style.scss';

import { addItem } from '../../../redux/cart/cartActions';

const CollectionItem = ({ item }) => {
  const dispatch = useDispatch();
  const { name, price, imageUrl } = item;
  return (
    <div className='collection-item'>
      <div className='image' style={{ backgroundImage: `url(${imageUrl})` }} />
      <div className='collection-footer'>
        <span className='name'>{name}</span>
        <span className='price'>{price}</span>
      </div>
      <CustomButton onClick={() => dispatch(addItem(item))} inverted>
        ADD TO CART
      </CustomButton>
    </div>
  );
};

export default CollectionItem;
