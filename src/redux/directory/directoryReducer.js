import DIRECTORIES from './directory.data';

const INITIAL_STATE = {
  sections: DIRECTORIES,
};

const directoryReducer = (state = INITIAL_STATE, action) => {
  const { type } = action;
  switch (type) {
    default:
      return state;
  }
};

export default directoryReducer;
