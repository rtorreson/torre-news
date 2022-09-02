import { MenuItem } from "@modules/general/libraries/generalTypes";

const newsChildren = [
  "business",
  "entertainment",
  "general",
  "health",
  "science",
  "sports",
  "technology",
].map((item, i) => ({ id: 1 + i / 10, title: item, url: `/service/${item}` }));

function GetMenuItems(): MenuItem[] {
  return [
    {
      id: 1,
      title: "news",
      url: "/",
      children: newsChildren,
    },
  ];
};

export { GetMenuItems };
