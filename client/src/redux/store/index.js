import { createStore } from "redux";
import reducer from "../reducer/";

// const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer);
// sagaMiddleware.run(rootSaga);
export default store;
