import {
  NewsSearchOptions,
  NewsHeadlinesOptions,
  NewsSourceOptions,
  NewsCriteria,
} from "./../../libraries/news-types";
import { EVERYTHING_URL, TOP_HEADLINES_URL } from "../../libraries/constants";
import { API_KEY } from "../../libraries/constants";

function getHeadlineQuery(options: NewsHeadlinesOptions) {
  const { country, category, source, keyword, pageSize, page } = options;
  return `?${country ? `&country=${country}` : ""}${
    category ? `&category=${category}`: ""
  }${source ? `&source=${source}`: ""}${keyword ? `&q=${keyword}` : ""}${
    pageSize ? `&pageSize=${pageSize}`: ""
  }${page ? `&page=${page}` : ""}`.replace("?&", "?");
}

function getSourceQuery({ category, lan, country }: NewsSourceOptions) {
  return `/sources?${category ? `category=${category}` : ""}${
    lan ? `language=${lan}` : ""
  }${country ? `country=${country}` : ""}`;
}

function getSearchQuery(options: NewsSearchOptions) {
  const {
    keywords,
    exact,
    domains,
    rule,
    exDomains,
    from,
    to,
    lan,
    sortBy,
    page,
    pageSize,
  } = options;
  const keywordQuery = Array.isArray(keywords)
    ? keywords.map((word) => (exact ? `"${word}"` : word)).join(` ${rule} `)
    : exact
    ? `"${keywords}"`
    : keywords;
  return `?q=${keywordQuery}${domains ? `&domains=${domains.join(",")}` : ""}${
    exDomains ? `&excludeDomains=${exDomains.join(",")}` : ""
  }${from ? `$from=${from}` : ""}${to ? `&to=${to}` : ""}${lan ? `&language=${lan}` : ""}${
    sortBy ? `&sortBy=${sortBy}` : ""
  }${pageSize ? `&pageSize=${pageSize}` : ""}${page ? `&page=${page}` : ""}`;
}

const getApiKey = () => `&apikey=${API_KEY}`;

export function getNewsUrl(criteria: NewsCriteria) {
  const { type, searchOptions, getSource, headlinesOptions, sourceOptions } =
  criteria;
  let url = "";
  if (type === "every" && searchOptions)
    url = EVERYTHING_URL + getSearchQuery({ ...searchOptions }) + getApiKey();
  if (type === "top" && getSource)
    url =
      TOP_HEADLINES_URL + getSourceQuery({ ...sourceOptions }) + getApiKey();
  if (type === "top" && !getSource)
    url =
      TOP_HEADLINES_URL +
      getHeadlineQuery({ ...headlinesOptions }) +
      getApiKey();
  return url;
}
