import React from "react";
import Grid from "@mui/material/Grid";
import NewsCardItem  from "../news-card-item";
import { News } from "../../libraries/news-types";
import {NEWS_CARD_ITEM_H} from "@modules/general/libraries/constants"

const NewsHeadline = ({ list }: { list: News[] }) => {
  return (
    <Grid sx={{maxHeight: NEWS_CARD_ITEM_H + 10, overflow: "hidden"}} container spacing={0}>
      {list.map((newsItem) => (
        <Grid  item xs={"auto"} sm={12} md={6} lg={4} key={newsItem.source.id}>
          <NewsCardItem item={newsItem} />
        </Grid>
      ))}
    </Grid>
  );
};

export default NewsHeadline;
