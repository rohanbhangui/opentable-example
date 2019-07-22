import { combineReducers } from 'redux';

import {
  DATA_REQUESTED,
  DATA_RECEIVED
} from '../actions';

const pages = (state = {}, action) => {
  switch (action.type) {
    case DATA_REQUESTED:
      return state;
    case DATA_RECEIVED:
      return { ...state, ...action.payload };
    default:
      return state;
  }
};

const combinedStore = combineReducers({
  pages,
});

export default combinedStore;
