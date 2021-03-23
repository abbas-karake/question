import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers/rootReducers";
import createSagaMiddleware from "redux-saga";
import mySaga from "./sagas";


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga);

export default store;