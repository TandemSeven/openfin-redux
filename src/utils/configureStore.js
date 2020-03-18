import { applyMiddleware, createStore, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { createReactOpenfinMiddleware } from 'react-openfin';

// Redux content
import rootReducer from '../reduxs';
import rootSaga from '../reduxs/sagas';

export const configureStore = (parentState) => {
  const sagaMiddleware = createSagaMiddleware();
  // !!!README!!!
  // use the built-in middleware to communicate with react-openfin for advanced features
  const reactOpenfinMiddleware = createReactOpenfinMiddleware();

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  const enhancers = composeEnhancers(
    applyMiddleware(
      sagaMiddleware,
      reactOpenfinMiddleware,
    ),
  );

  const store = createStore(
    rootReducer(parentState),
    enhancers,
  );

  sagaMiddleware.run(rootSaga);

  return store;

};
