import React from "react";
import Head from "next/head";
import { DOMAIN, SITE_NAME } from "@modules/general/libraries/constants";

const MetaTags = ({
  title,
  url,
  description,
  image,
}: {
  title: string;
  url?: string;
  description?: string;
  image?: string;
}) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="og:title" content={title} />
      <meta name="og:url" content={`${DOMAIN}/${url}`} />
      <meta name="og:site_name" content={SITE_NAME} />
      <meta name="og:description" content={description} />
      <meta name="og:type" content="article" />
      <meta name="og:article:author" content={SITE_NAME} />
      <meta content={title} itemProp="name" />
      <meta content={description} itemProp="description" />
      <meta content={"theme_color"} itemProp="#005246" />
      {image && (
        <>
          <meta name="og:image" content={`${image}`} />
          <meta name="og:image:type" content="image/jpeg" />
          <meta name="og:image:width" content="250" />
          <meta name="og:image:height" content="250" />
        </>
      )}
    </Head>
  );
};

export default MetaTags;
