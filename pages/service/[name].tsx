import React from "react";
import dynamic from "next/dynamic";
import { wrapper } from "@root/store";
import { useTheme } from "@mui/material";
import { GetStaticPaths, GetStaticProps } from "next";
import { fetchNewsList } from "@modules/news/store/api/news-api";
import { identify } from "@root/modules/general/libraries/utils";
import { useDeviceType } from "@modules/general/libraries/device-type";
import {
  News,
  NewsCategory,
  NewsStateKey,
} from "@modules/news/libraries/news-types";
import {
  PAGE_SIZE,
  REVALIDATION_TIME,
  SERVICES_TITLE,
} from "@modules/general/libraries/constants";
import getNewsCategory, {
  Category,
} from "@root/modules/sections/services-section/services-category";

const NewsListSection = dynamic(() => import("@modules/sections/top-news"));

const ServicePage = ({ newsList }: { newsList: News[] | null }) => {
  const deviceType = useDeviceType();
  const theme = useTheme();
  return (
    <div className="page">
      {newsList && (
        <NewsListSection
          news={newsList}
          deviceType={deviceType}
          theme={theme}
        />
      )}
    </div>
  );
};



export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const { params } = context;
    let serviceTitle = params ? params.name || "" : "";
    serviceTitle = `${serviceTitle}`.trim();
    let newsList: News[] | null | undefined;

    if (serviceTitle && SERVICES_TITLE.some((s) => s === serviceTitle)) {
      try {
        const newsListRes = await fetchNewsList({
          type: "top",
          headlinesOptions: {
            category: serviceTitle as NewsCategory,
            country: "us",
            pageSize: PAGE_SIZE,
          },
        });
        if (newsListRes.status === "ok") {
          newsList = newsListRes.articles.map((article) =>
            identify(article, serviceTitle as NewsStateKey)
          );
        }
      } catch (err) {
        console.log(err);
      }
      return {
        props: {
          newsList: newsList ? newsList : null,
        },
        redirect: REVALIDATION_TIME,
      };
    }
    return {
      props: {
        newsList: null,
      },
      redirect: REVALIDATION_TIME,
    };
  }
);

function getPath(serviceList: Category[]) {
  return serviceList.map((service: Category) => ({
    params: { name: service.title },
  }));
}

export const getStaticPaths: GetStaticPaths = async () => {
  let list = getNewsCategory();

  return {
    paths: getPath(list),
    fallback: false,
  };
};

export default ServicePage;
