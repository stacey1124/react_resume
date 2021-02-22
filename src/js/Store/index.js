import { createStore, applyMiddleware, compose } from 'redux'
import createSagaMiddleware from 'redux-saga'
import reducer from '../dashBoard/reducer'
import mySagas from './sagas'
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
  reducer,
  // window._REDUX_DEVTOOLS_EXTENSION_
  applyMiddleware(sagaMiddleware)
)
sagaMiddleware.run(mySagas)
export default store