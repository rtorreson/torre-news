import React from "react";
import Paper from "@mui/material/Paper";
import { useTheme } from "@mui/material";
import getNewsCategory from "./services-category";
import { setColorAlpha } from "@modules/general/libraries/utils";
import { PAPER_BG_ALPHA } from "@root/modules/general/libraries/constants";
import NewsCategoryCard from "@root/modules/news/components/news-category-card";

const NewsCategorySection = () => {
  const theme = useTheme();
  const { palette } = theme;
  const newsCategory = getNewsCategory();
  newsCategory.length = 4;
  return (
    <Paper
      sx={{
        mt: 3,
        pt: 2,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexWrap: "wrap",
        bgcolor: setColorAlpha(palette.primary.light, PAPER_BG_ALPHA),
      }}
    >
      {newsCategory.map(({ title, url, icon: Icon, id }) => (
        <NewsCategoryCard {...{ title, url, Icon, theme }} key={id} />
      ))}
    </Paper>
  );
};

export default NewsCategorySection;
