import { NewsCategory } from "@modules/news/libraries/news-types";
export const CONTAINER_WIDTH = "min(1200px, 90vw)";
export const SITE_NAME = "TorreNews";
export const FOOTER_HEIGHT = 150;
export const DOMAIN =
  process.env.NODE_ENV === "production" ? "http://localhost:3000" : "...";
export const CARD_IMAGE_W = 300;
export const CARD_IMAGE_H = 150;
export const NEWS_CARD_ITEM_H = 350;
export const PAPER_BG_ALPHA = 0.075;
export const REVALIDATION_TIME = 600;
export const PAGE_SIZE = 10;
export const SERVICES_TITLE: NewsCategory[] = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
];

export const AVAILABLE_COLORS = [
  "black_and_white",
  "black",
  "white",
  "yellow",
  "orange",
  "red",
  "purple",
  "magenta",
  "green",
  "teal",
  "blue",
  "any_color",
];
