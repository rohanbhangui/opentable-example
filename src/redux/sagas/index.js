import { put, takeLatest, all, call } from 'redux-saga/effects';
import { API_URL } from '../../utility/variables';

function* fetchData(payload) {

  const { payload: query } = payload;
  const concat = Object.keys(query).map(key => `${encodeURIComponent(key)}=${encodeURIComponent(query[key])}` ).join('&');
  const response = yield call(fetch, `${API_URL}?${concat}`);
  const data = yield call([response, 'json']);

  yield put({ type: 'DATA_RECEIVED', payload: data });
}

function* actionWatcher() {
  yield takeLatest('DATA_REQUESTED', fetchData);
}

export default function* rootSaga() {
  yield all([
    actionWatcher(),
  ]);
}
