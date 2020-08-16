import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionFetcing } from '../../redux/shop/shop.selector';

import WithSpinner from '../withSpinner';
import CollectionOverview from './CollectionOverview';
import { compose } from 'redux';

const mapStateToProps = createStructuredSelector({
  isLoading: selectIsCollectionFetcing,
});

const CollectionOverviewContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(CollectionOverview);

export default CollectionOverviewContainer;
