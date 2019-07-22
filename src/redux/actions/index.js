/*
 * action types
 */

export const DATA_REQUESTED = 'DATA_REQUESTED';
export const DATA_RECEIVED = 'DATA_RECEIVED';

/*
 * action creators
 */

export const dataRequested = (payload) => {
  return { type: DATA_REQUESTED, payload };
};

export const dataReceived = (payload) => {
  return { type: DATA_RECEIVED, payload };
};
