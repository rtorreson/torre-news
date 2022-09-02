import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { Grid, Theme } from "@mui/material";
import style from "./NewsLiCard.module.scss";
import { News } from "../../libraries/news-types";
import Typography from "@mui/material/Typography";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import { DeviceType } from "@modules/general/libraries/device-type";
import { toUrl, trimText } from "@root/modules/general/libraries/utils";

const NewsLiCard = ({
  item,
  theme,
  trimAmount = 200,
  deviceType,
}: {
  item: News;
  theme: Theme;
  trimAmount?: number;
  deviceType: DeviceType;
}) => {
  const {
    source: { name },
    urlToImage,
    title,
    description,
    publishedAt,
  } = item;
  const clr = theme.palette.primary.main;
  return (
    <Link href={`/news/${item.innerLink}`} passHref>
      <Grid container spacing={2} sx={{ my: 1, cursor: "pointer" }}>
        <Grid item xs={12} md={7} lg={10} sx={{}}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
              m: 0,
            }}
          >
            <Typography gutterBottom variant="h5" sx={{ color: clr }}>
              {trimText(title, 20)}
            </Typography>
            <div>
              <Typography variant="caption" sx={{ color: clr, mx: 0.5 }}>
                {publishedAt}
              </Typography>
              <CalendarTodayIcon
                sx={{ color: clr, fontSize: theme.typography.caption }}
              />
            </div>
          </Box>
          <Box>
            <Typography>{trimText(description, trimAmount)}</Typography>
          </Box>
        </Grid>
        {deviceType.isNotMobile && (
          <Grid item md={5} lg={2}>
            <img
              className={`${style["root__image"]} brocken-img`}
              src={urlToImage}
              alt={trimText(title, 10) + " image"}
            />
          </Grid>
        )}
      </Grid>
    </Link>
  );
};

export default NewsLiCard;
