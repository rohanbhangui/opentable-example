import { combineReducers } from 'redux';
import { API_URL } from '../../utility/variables';

import {
  RETRIEVE_PLACES,
} from '../actions';

const pages = (state = {}, action) => {
  switch (action.type) {
    case RETRIEVE_PLACES:
      const { searchObject } = this.action;

      const concat = Object.keys(searchObject).map(key => encodeURIComponent(key) + '=' + encodeURIComponent(params[key])).join('&');

      fetch(`${API_URL}?${concat}`)
        .then((response) => {
          response.json()
            .then(data => data);
        });
      break;
    default:
      return state;
  }
};

const evolveApp = combineReducers({
  pages,
});

export default evolveApp;
