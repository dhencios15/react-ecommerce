import React, { memo } from 'react';
import { useSelector } from 'react-redux';

import { selectCollectionsForPreview } from '../../redux/shop/shop.selector';
import './CollectionOverview.style.scss';

import CollectionPreview from '../CollectionPreview';

const CollectionOverview = () => {
  const collections = useSelector((state) =>
    selectCollectionsForPreview(state)
  );
  return (
    <div className='collections-overview'>
      {collections.map(({ id, ...otherProps }) => (
        <CollectionPreview key={id} {...otherProps} />
      ))}
    </div>
  );
};

export default memo(CollectionOverview);
