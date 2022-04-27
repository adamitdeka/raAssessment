// import { createStore } from "redux";
// import reducer from "../reducer/";

// // const sagaMiddleware = createSagaMiddleware();
// const store = createStore(reducer);
// // sagaMiddleware.run(rootSaga);
// export default store;



import { createStore, applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga'

import reducer from '../reducers'
import productsSaga from '../saga/products'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(
  reducer,
  applyMiddleware(sagaMiddleware)
)

sagaMiddleware.run(productsSaga)

export default store;
