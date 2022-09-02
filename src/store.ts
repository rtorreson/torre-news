import rootSaga from "./modules/root-saga";
import rootReducer from "./modules/root-reducer";
import { createWrapper } from "next-redux-wrapper";
import createSagaMiddleware, { Task } from "redux-saga";
import { createStore, applyMiddleware, Store } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export interface SagaStore extends Store {
  sagaTask?: Task;
}

const saga = createSagaMiddleware();

function configureStore() {
  const store = createStore(
    rootReducer,
    {},
    composeWithDevTools(applyMiddleware(saga))
  );

  (store as any).sagaTask = saga.run(rootSaga);

  return store;
}
export default configureStore;
export const wrapper = createWrapper(configureStore as any, { debug: false });
