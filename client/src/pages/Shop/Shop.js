import React, { useEffect, lazy, Suspense } from 'react';
import { Route } from 'react-router-dom';
import { connect } from 'react-redux';

import { fetchCollectionStart } from '../../redux/shop/shopActions';

import Spinner from '../../components/withSpinner/Spinner';
// import CollectionOverviewContainer from '../../components/CollectionOverview/CollectionOverviewContainer';
// import CollectionContainer from '../Collection/CollectionContainer';

const CollectionOverviewContainer = lazy(() =>
  import('../../components/CollectionOverview/CollectionOverviewContainer')
);
const CollectionContainer = lazy(() =>
  import('../Collection/CollectionContainer')
);

const Shop = ({ fetchCollectionStart, match }) => {
  useEffect(() => {
    fetchCollectionStart();
  }, [fetchCollectionStart]);

  return (
    <div className='shop-page'>
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionContainer}
        />
      </Suspense>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  fetchCollectionStart: () => dispatch(fetchCollectionStart()),
});

export default connect(null, mapDispatchToProps)(Shop);
