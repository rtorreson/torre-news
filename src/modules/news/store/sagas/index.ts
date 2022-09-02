import { all } from "redux-saga/effects";
import newsListWatcher from "./news-list-saga";

function* newsSaga() {
  yield all([newsListWatcher()]);
}

export default newsSaga;
