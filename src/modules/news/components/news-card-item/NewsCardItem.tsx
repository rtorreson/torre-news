import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cardSX } from "./helper";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import style from "./NewsCardItem.module.scss";
import CardMedia from "@mui/material/CardMedia";
import { News } from "../../libraries/news-types";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import { toUrl } from "@modules/general/libraries/utils";
import { trimText } from "@modules/general/libraries/utils";
import {
  CARD_IMAGE_H,
  CARD_IMAGE_W,
} from "@root/modules/general/libraries/constants";

const NewsCardItem = ({ item }: { item: News }) => {
  return (
    <Box sx={{ width: `min(260px, 90vh)`, padding: 0.5, mx: 0 }}>
      <Link href={`/news/${item.innerLink}`} passHref>
        <Card sx={cardSX}>
          <CardMedia
            component="img"
            alt={item.title + " image"}
            height={CARD_IMAGE_H}
            image={item.urlToImage}
          />
          <CardContent>
            <Typography gutterBottom variant="h5">
              {trimText(item.title, 20)}
            </Typography>
            <Typography variant="body2">
              {trimText(item.description, 90)}
            </Typography>
          </CardContent>
        </Card>
      </Link>
    </Box>
  );
};

export default NewsCardItem;
