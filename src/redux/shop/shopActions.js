import { UPDATE_COLLECTIONS } from '../../helpers/constants';

export const updateCollections = (collectionsMap) => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionsMap,
});
