import { combineReducers } from "redux";
import { NewsState } from "./news/libraries/news-types";
import newsReducer from "./news/store/reducers/news-reduce";

export interface state {
  news: NewsState;
}

const rootReducer = combineReducers({
  news: newsReducer,
});

export default rootReducer
