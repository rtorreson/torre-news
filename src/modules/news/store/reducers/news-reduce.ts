import { NewsCategoryState, NewsStateKey } from "./../../libraries/news-types";
import { Reducer } from "redux";
import { HYDRATE } from "next-redux-wrapper";
import { NewsState } from "../../libraries/news-types";
import { AppAction, log } from "./../../../general/libraries/utils";
import {
  PUT_NEWS_LIST,
  PUT_PENDING_NEWS_LIST,
  PUT_ERROR_NEWS_LIST,
} from "../constants";
import {
  initialState,
  setErrorNewsList,
  setNewsList,
  setPendingNewsList,
} from "./helper";

const newsReducer: Reducer<NewsState, AppAction> = (
  state: NewsState = initialState,
  action: AppAction
): NewsState => {
  switch (action.type) {
    case HYDRATE:
      Object.entries(action.payload.news as NewsState).forEach(
        ([key, value]) => {
          if (
            initialState.hasOwnProperty(key) &&
            JSON.stringify(value) ===
              JSON.stringify(initialState[key as NewsStateKey])
          )
            delete action.payload.news[key];
        }
      );
      log("action.payload", action.payload);
      return { ...state, ...action.payload.news };

    case PUT_NEWS_LIST:
      return setNewsList(state, action.payload);

    case PUT_PENDING_NEWS_LIST:
      return setPendingNewsList(state, action.payload);

    case PUT_ERROR_NEWS_LIST:
      return setErrorNewsList(state, action.payload);

    default:
      return { ...state };
  }
};

export default newsReducer;
