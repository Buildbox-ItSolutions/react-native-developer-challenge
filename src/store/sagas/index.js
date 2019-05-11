import {
  all, takeLatest, call, put,
} from 'redux-saga/effects';
import api from '~/services/api';
import { Creators } from '~/store/ducks';
import { navigate } from '~/services/navigation';

const key = '3e3394c9';
// const key = '9d213aef';

function* request(action) {
  try {
    const { text } = action.payload;
    console.log(action);

    console.log('aoba');
    const movies = yield call(api.get, `/?apikey=${key}&s=${text}`);
    console.log('filhada puta coda');
    // const movies = yield call(api.get, '/?apikey=3e3394c9&s=guardians');

    yield put(Creators.success({ array: movies.data.Search }));

    navigate('Results');
  } catch (err) {
    console.log(err);
  }
}

function* setReq(action) {
  try {
    const { text } = action.payload;

    const movie = yield call(api.get, `/?apikey=${key}&i=${text}`);

    yield put(Creators.setSuc({ obj: movie.data }));

    yield put(Creators.toggle());
    // navigate('Results');
  } catch (err) {
    console.log(err);
  }
}

export default function* rootSaga() {
  return yield all([
    takeLatest('REQUEST_DATA', request),
    takeLatest('SET_REQUEST', setReq),
  ]);
}
