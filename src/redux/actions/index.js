/*
 * action types
 */

export const RETRIEVE_PLACES = 'RETRIEVE_PLACES';

/*
 * action creators
 */

export const retrievePlaces = (payload) => {
  return { type: RETRIEVE_PLACES, payload };
};
