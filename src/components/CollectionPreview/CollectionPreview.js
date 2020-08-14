import React from 'react';

import CollectionItem from './CollectionItem';
import './CollectionPreview.style.scss';
import { withRouter } from 'react-router-dom';

const CollectionPreview = ({ title, items, history, match, routeName }) => (
  <div className='collection-preview'>
    <h1
      className='title'
      style={{ cursor: 'pointer' }}
      onClick={() => history.push(`${match.path}/${routeName}`)}
    >
      {title.toUpperCase()}
    </h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map((item) => (
          <CollectionItem key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default withRouter(CollectionPreview);
