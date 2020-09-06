import React from 'react';
import { createStore, combineReducers, applyMiddleware } from 'redux'; //applyMiddleware is if we also need to use redux thunk for asynchronus actions
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import Layout from './containers/Layout';

import timerReducer from './store/reducers/timer';
import gamePhaseReducer from './store/reducers/gamePhase';

const rootReducer = combineReducers({
  timer: timerReducer,
  gamePhase: gamePhaseReducer
});

const store = createStore(rootReducer, applyMiddleware(ReduxThunk));

function App() {
  return (
    <Provider store={store}>
      <Layout />
    </Provider>
  );
}

export default App;
