import {NEWS_CARD_ITEM_H} from "@modules/general/libraries/constants"
export const cardSX = {
  width: "90%",
  mx: "auto",
  height: NEWS_CARD_ITEM_H,
  overflow: "hidden",
  p: 1,
  transition: "all 0.2s ease-out",
  ":hover": {
    backgroundColor: "primary.dark",
    color: "white",
    cursor: "pointer",
    shadow: 4,
  },
};
