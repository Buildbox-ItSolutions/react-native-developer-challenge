import { createStore } from 'redux';
import { applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';

import reducers from './container/reducers'

const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

export default store;