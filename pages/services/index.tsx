import React from "react";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import NewsCategoryCard from "@modules/news/components/news-category-card";
import getNewsCategory from "@modules/sections/services-section/services-category";

const ServicesPage = () => {
  const services = getNewsCategory();
  const theme = useTheme();
  return (
    <Grid
      container
      spacing={3}
      className="page"
      justifyContent={"center"}
      alignItems={"center"}
    >
      {services.map(({ icon: Icon, title, id, url }) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={id}>
          <NewsCategoryCard {...{ Icon, title, url, theme }} />
        </Grid>
      ))}
    </Grid>
  );
};

export default ServicesPage;
