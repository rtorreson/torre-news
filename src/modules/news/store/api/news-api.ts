import axios from "axios";
import { NewsCriteria, NewsListEntity } from "../../libraries/news-types";
import { getNewsUrl } from "./helper";

export async function fetchNewsList(
  criteria: NewsCriteria
): Promise<NewsListEntity> {
  const url = getNewsUrl(criteria);
  try {
    const response = await axios.get<any>(url, {
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (response?.data) {
      const list = response.data;
      return list;
    }
  } catch (err: any) {
    return Promise.reject(err.message);
  }
  return Promise.reject();
}
