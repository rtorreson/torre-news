import { NewsCategory } from "@modules/news/libraries/news-types";
import { News } from "@root/modules/news/libraries/news-types";
import { Action } from "redux";
export function trimText(input: string, length: number) {
  if (input)
    return input.length > length ? `${input.substring(0, length)} ...` : input;
  return "";
}

export function setColorAlpha(clrInRgb: string, alpha: number) {
  const rgb = clrInRgb.match(/\d{1,3}/g);
  if (rgb?.length !== 3) return;
  const [r, g, b] = rgb;
  return `rgba(${r},${g},${b},${alpha})`;
}

export function toUrl(txt: string) {
  return txt.replace(/\s/g, "-");
}

export interface AppAction<T = string, P = any> extends Action {
  type: T;
  payload: P;
}

export const log = (name?: string, ...args: any[]) => {
  console.log(`${name} ______________________________`);
  args.forEach((arg) => console.log(arg, "\n"));
};

export const identify = function (news: News, category: NewsCategory | "top") {
  const date = new Date(news.publishedAt);
  const nameQ = news.title
    .toLowerCase()
    .split(" ")
    .map((char) => char[0])
    .join("")
    .slice(0, 4);
  const id = `${nameQ}_${date.getMonth()}_${date.getHours()}`;
  const innerLink = `${category}_${id}`;
  return {
    ...news,
    source: { name: news.source.name, id, category },
    innerLink,
  };
};

export function shuffle(array: any[]) {
  let currentIndex = array.length,
    randomIndex;

  while (currentIndex != 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex--;

    [array[currentIndex], array[randomIndex]] = [
      array[randomIndex],
      array[currentIndex],
    ];
  }

  return array;
}
