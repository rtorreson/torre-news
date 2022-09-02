import { News } from '@root/modules/news/libraries/news-types';
import {
  REQUEST_NEWS_LIST,
  PUT_PENDING_NEWS_LIST,
  PUT_NEWS_LIST,
  PUT_ERROR_NEWS_LIST,
} from "../constants";

import {
  NewsCriteria,
  NewsListEntity,
  NewsStateKey,
} from "../../libraries/news-types";

export const requestNewsList = (criteria: NewsCriteria, key:NewsStateKey) => ({
  type: REQUEST_NEWS_LIST,
  payload: { criteria, key },
});

export const putPendingNewsList = (
  pending: boolean,
  criteria: NewsCriteria,
  key: NewsStateKey
) => ({ type: PUT_PENDING_NEWS_LIST, payload: { pending, criteria, key } });

export const putNewsList = (
  criteria: NewsCriteria,
  newsList: News[],
  key: NewsStateKey
) => ({ type: PUT_NEWS_LIST, payload: { criteria, newsList, key } });

export const putErrorNewsList = (
  criteria: NewsCriteria,
  error: Error,
  key: NewsStateKey
) => ({
  type: PUT_ERROR_NEWS_LIST,
  payload: { criteria, error, key },
});
