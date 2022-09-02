import React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import { Theme } from "@mui/material";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Typography from "@mui/material/Typography";
import NewsLiCard from "@modules/news/components/news-li-card";
import { News } from "@root/modules/news/libraries/news-types";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { DeviceType } from "@root/modules/general/libraries/device-type";

const TopNewsSection = ({
  news,
  theme,
  deviceType,
}: {
  news: News[];
  theme: Theme;
  deviceType: DeviceType;
}) => {
  return (
    <div>
      <Divider variant="middle" sx={{ mt: 3, mb: 4 }} />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          mb: 1.5,
        }}
      >
        <Typography variant="h4">Top news</Typography>
      </Box>
      <Paper sx={{ display: "flex", flexDirection: "column", p:2 }}>
        {news &&
          news.map((item) => (
            <NewsLiCard deviceType={deviceType} item={item} theme={theme} key={item.source.id} />
          ))}
      </Paper>
    </div>
  );
};

export default TopNewsSection;
