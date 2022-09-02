import { all } from "redux-saga/effects";
import newsSaga from "./news/store/sagas";

function* rootSaga() {
  yield all([newsSaga()]);
}

export default rootSaga;
