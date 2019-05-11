import React from 'react';
import { Provider } from 'react-redux';

import './config/ReactotronConfig';
import store from './store';
import Routes from './routes';
import { setNavigator } from './services/navigation';

// import { Container } from './styles';

const App = () => (
  <Provider store={store}>
    <Routes ref={setNavigator} />
  </Provider>
);

export default App;
