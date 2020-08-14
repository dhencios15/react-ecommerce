import { connect } from 'react-redux';
import { compose } from 'redux';
import { createStructuredSelector } from 'reselect';

import { selectIsCollectionsLoaded } from '../../redux/shop/shop.selector';

import WithSpinner from '../../components/withSpinner';
import Collection from './Collection';

const mapStateToProps = createStructuredSelector({
  isLoading: (state) => !selectIsCollectionsLoaded(state),
});

const CollectionContainer = compose(
  connect(mapStateToProps),
  WithSpinner
)(Collection);

export default CollectionContainer;
