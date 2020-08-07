import React from 'react';

import CollectionPreview from '../../components/CollectionPreview';
import SHOP_DATA from './Shop.data';

const Shop = () => {
  const collections = SHOP_DATA;
  return (
    <div className='shop-page'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default Shop;
