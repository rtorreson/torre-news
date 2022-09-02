import { log } from "@root/modules/general/libraries/utils";
import {
  NewsState,
  PutErrorNewsListAction,
  PutNewsListAction,
  PutPendingNewsListAction,
} from "../../libraries/news-types";

export const initialState: NewsState = {
  top: { list: [], status: "" },
  business: { list: [], status: "" },
  entertainment: { list: [], status: "" },
  general: { list: [], status: "" },
  health: { list: [], status: "" },
  science: { list: [], status: "" },
  sports: { list: [], status: "" },
  technology: { list: [], status: "" },
};


export function setNewsList(
  state: NewsState,
  payload: PutNewsListAction
): NewsState {
  const { newsList, key } = payload;
  const result = {
    ...state,
    [key]: { list: [...newsList], status: "success" },
  };
  log("setNewsList", result);
  return result;
}

export function setPendingNewsList(
  state: NewsState,
  payload: PutPendingNewsListAction
): NewsState {
  const { key, pending } = payload;
  const result = {
    ...state,
    [key]: { list: [...state[key].list], status: pending ? "pending" : "" },
  };
  log("setPendingNewsList", result);
  return result;
}

export function setErrorNewsList(
  state: NewsState,
  payload: PutErrorNewsListAction
): NewsState {
  const { key, error } = payload;
  const result = { ...state, [key]: { list: [], status: "error", error } };
  log("setErrorNewsList", result);
  return result;
}
