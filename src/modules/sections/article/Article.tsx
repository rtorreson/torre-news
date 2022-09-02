import React from "react";
import Link from "next/link";
import Box from "@mui/material/Box";
import { NextRouter } from "next/router";
import style from "./Article.module.scss";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { News } from "@root/modules/news/libraries/news-types";

const Article = ({ news, router }: { news: News; router: NextRouter }) => {
  return (
    <Box component="article" className="page" sx={{ p: 2 }}>
      {news?.urlToImage && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className={style["root__image"]}
          src={news.urlToImage}
          alt={news.title + " image"}
        />
      )}
      <Box sx={{ m: 3 }}>
        <Typography variant="h3" gutterBottom>
          {news.title}
        </Typography>
        <Typography variant="body1" gutterBottom>
          {news.description}
        </Typography>
        <Button sx={{ mx: 2 }} variant="outlined">
          <a
            target="_blank"
            rel="noreferrer"
            href={news.url}
          >
            more
          </a>
        </Button>
        {/* <Link passHref href=""> */}
        <Button onClick={() => router.back()}>back</Button>
        {/* </Link> */}
      </Box>
    </Box>
  );
};

export default Article;
