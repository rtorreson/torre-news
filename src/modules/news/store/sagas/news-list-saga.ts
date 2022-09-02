import {
  NewsCriteria,
  NewsStateKey,
  NewsListEntity,
  GetNewsListAction,
} from "../../libraries/news-types";
import { REQUEST_NEWS_LIST } from "../constants";
import { put, call, takeEvery } from "redux-saga/effects";
import { fetchNewsList } from "@modules/news/store/api/news-api";
import { putPendingNewsList, putNewsList, putErrorNewsList } from "../actions";
import { log } from "@root/modules/general/libraries/utils";

// function* newsListFlow({ criteria, key }: GetNewsListAction) {
function* newsListFlow(action: { type: string; payload: GetNewsListAction }) {
  log("news List flow", "");
  const { key, criteria } = action.payload;
  try {
    yield put(putPendingNewsList(true, criteria, key));

    const newsListEntity: NewsListEntity = yield call(fetchNewsList, criteria);
    if (newsListEntity.status === "ok") {
      yield put(putNewsList(criteria, newsListEntity.articles, key));
    } else {
      yield put(
        putErrorNewsList(criteria, new Error("error fetching news list"), key)
      );
    }
  } catch (err) {
    yield put(
      putErrorNewsList(criteria, new Error("error fetching news list"), key)
    );
  }
}

function* newsListWatcher() {
  yield takeEvery(REQUEST_NEWS_LIST, newsListFlow);
}

export default newsListWatcher;
