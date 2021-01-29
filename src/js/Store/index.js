import { createStore } from 'redux'
import reducer from '../dashBoard/reducer'
const store = createStore(
  reducer
  // window._REDUX_DEVTOOLS_EXTENSION_

)
export default store