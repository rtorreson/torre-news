import { Country, Lan } from "./helper";
import { actionTypes } from "../store/constants";

export interface News {
  source: { id: any; name: string; category: NewsStateKey };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
  innerLink: string;
}

export interface NewsCriteria {
  type: "every" | "top";
  searchOptions?: NewsSearchOptions;
  headlinesOptions?: NewsHeadlinesOptions;
  sourceOptions?: NewsSourceOptions;
  getSource?: boolean;
  keyword?: string;
  top?: boolean;
}
export interface NewsListEntity {
  status: string;
  totalResults: number;
  articles: News[];
}

export type NewsCategory =
  | "business"
  | "entertainment"
  | "general"
  | "health"
  | "science"
  | "sports"
  | "technology";

export type NewsLanguage = Lan;

export type NewsCountry = Country;

export type SortBy = "relevancy" | "popularity" | "publishedAt" | "relevancy";

export interface NewsSearchOptions {
  exact: boolean;
  keywords: string | [string, string];
  rule?: "AND" | "OR" | "NOT";
  domains?: string[];
  exDomains?: string[];
  from?: string;
  to?: string;
  lan?: NewsLanguage;
  sortBy?: SortBy;
  pageSize?: number;
  page?: number;
}

export interface NewsHeadlinesOptions {
  country?: NewsCountry;
  category?: NewsCategory;
  source?: string;
  keyword?: string;
  pageSize?: number;
  page?: number;
}

export interface NewsSourceOptions {
  category?: NewsCategory;
  lan?: NewsLanguage;
  country?: NewsCountry;
}

export type NewsStateKey = NewsCategory | "top";

export interface NewsCategoryState {
  list: News[];
  status: "pending" | "success" | "error" | "";
  error?: Error;
}

export type NewsState = {
  [key in NewsStateKey]: NewsCategoryState;
};

interface NewsPayloads {
  criteria: NewsCriteria;
  key: NewsStateKey;
}

export interface PutNewsListAction extends NewsPayloads {
  newsList: News[];
}
export interface GetNewsListAction extends NewsPayloads {}
export interface PutPendingNewsListAction extends NewsPayloads {
  pending: boolean;
}
export interface PutErrorNewsListAction extends NewsPayloads {
  error: Error;
}
