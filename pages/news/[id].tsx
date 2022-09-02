import React, { useEffect } from 'react';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/router';
import { GetStaticProps, GetStaticPaths } from 'next';
import {
  News,
  NewsCategory,
  NewsCriteria,
  NewsStateKey,
} from '@modules/news/libraries/news-types';
import { identify, log } from '@root/modules/general/libraries/utils';
import { toUrl } from '@root/modules/general/libraries/utils';
import { fetchNewsList } from '@modules/news/store/api/news-api';
import { wrapper } from '@root/store';
import { putPendingNewsList } from '@root/modules/news/store/actions';
import {
  PAGE_SIZE,
  SERVICES_TITLE,
} from '@root/modules/general/libraries/constants';

const Article = dynamic(() => import('@modules/sections/article'));

const ArticlePage = ({ news }: { news: News }) => {
  const router = useRouter();
  useEffect(() => {
    if (!news) router.push('/404');
  });
  if (news) return <Article {...{ news, router }} />;
  else return <div></div>;
};

let data: any;

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async (context) => {
    const { params } = context;
    let newsId: string | undefined | null;
    let newsCtg: string | undefined | null;
    if (params) {
      if (Array.isArray(params.id)) {
        newsId = params.id[0].split(/_/)[1];
        newsCtg = params.id[0].split(/_/)[0];
      } else {
        newsId = params.id ? params.id.split(/_/)[1] : null;
        newsCtg = params.id ? params.id.split(/_/)[0] : null;
      }
    }
    let news: News | null | undefined;
    if (!newsId || !newsCtg)
      return {
        props: {
          news: null,
        },
      };
    const criteria: NewsCriteria =
      newsCtg === 'top'
        ? {
            type: 'top',
            headlinesOptions: {
              country: 'us',
              pageSize: PAGE_SIZE,
            },
          }
        : {
            type: 'top',
            headlinesOptions: {
              category: newsCtg as NewsCategory,
              country: 'us',
              pageSize: PAGE_SIZE,
            },
          };
    try {
      const newsListRes = await fetchNewsList(criteria);
      if (newsListRes.status === 'ok')
        news = newsListRes.articles.find(
          (item) =>
            identify(item, newsCtg as NewsStateKey).innerLink === params?.id
        );
    } catch (err) {
      console.log(err);
    }
    return {
      props: {
        news: news ? news : null,
      },
    };
  }
);

const getPath = (news: News[]) => {
  const ssss = news.map((item) => ({
    params: { id: item.innerLink },
  }));
  return ssss;
};

export const getStaticPaths: GetStaticPaths = async () => {
  const newsList: News[] = [];
  let topNewsList: News[] | [];
  let businessNewsList: News[] | [];
  let entertainmentNewsList: News[] | [];
  let generalNewsList: News[] | [];
  let healthNewsList: News[] | [];
  let sportsNewsList: News[] | [];
  let technologyNewsList: News[] | [];

  const serviceCriteriaList: { [key in NewsStateKey]?: NewsCriteria } =
    SERVICES_TITLE.reduce(
      (acc, curr) => ({
        ...acc,
        [curr]: {
          type: 'top',
          headlinesOptions: {
            category: curr,
            country: 'us',
            pageSize: PAGE_SIZE,
          },
        },
      }),
      {}
    );
  const criteriaList: { [key in NewsStateKey]?: NewsCriteria } = {
    top: {
      type: 'top',
      headlinesOptions: {
        country: 'us',
        pageSize: PAGE_SIZE,
      },
    },
    ...serviceCriteriaList,
  };

  try {
    // top ______________________________
    const topNewsListRes =
      criteriaList.top && (await fetchNewsList(criteriaList.top));
    if (topNewsListRes?.status === 'ok' && topNewsListRes.articles)
      topNewsList = topNewsListRes.articles.map((article) =>
        identify(article, 'top')
      );
    else topNewsList = [];

    // business ______________________________
    const businessNewsListRes =
      criteriaList.business && (await fetchNewsList(criteriaList.business));
    if (businessNewsListRes?.status === 'ok' && businessNewsListRes.articles)
      businessNewsList = businessNewsListRes.articles.map((article) =>
        identify(article, 'business')
      );
    else businessNewsList = [];

    // entertainment ______________________________
    const entertainmentNewsListRes =
      criteriaList.entertainment &&
      (await fetchNewsList(criteriaList.entertainment));
    if (
      entertainmentNewsListRes?.status === 'ok' &&
      entertainmentNewsListRes.articles
    )
      entertainmentNewsList = entertainmentNewsListRes.articles.map((article) =>
        identify(article, 'entertainment')
      );
    else entertainmentNewsList = [];

    // general ______________________________
    const generalNewsListRes =
      criteriaList.general && (await fetchNewsList(criteriaList.general));
    if (generalNewsListRes?.status === 'ok' && generalNewsListRes.articles)
      generalNewsList = generalNewsListRes.articles.map((article) =>
        identify(article, 'general')
      );
    else generalNewsList = [];

    // health ______________________________
    const healthNewsListRes =
      criteriaList.health && (await fetchNewsList(criteriaList.health));
    if (healthNewsListRes?.status === 'ok' && healthNewsListRes.articles)
      healthNewsList = healthNewsListRes.articles.map((article) =>
        identify(article, 'health')
      );
    else healthNewsList = [];

    // sport ______________________________
    const sportsNewsListRes =
      criteriaList.sports && (await fetchNewsList(criteriaList.sports));
    if (sportsNewsListRes?.status === 'ok' && sportsNewsListRes.articles)
      sportsNewsList = sportsNewsListRes.articles.map((article) =>
        identify(article, 'sports')
      );
    else sportsNewsList = [];

    // tech ______________________________
    const technologyNewsListRes =
      criteriaList.technology && (await fetchNewsList(criteriaList.technology));
    if (
      technologyNewsListRes?.status === 'ok' &&
      technologyNewsListRes.articles
    )
      technologyNewsList = technologyNewsListRes.articles.map((article) =>
        identify(article, 'technology')
      );
    else technologyNewsList = [];

    newsList.push(
      ...topNewsList,
      ...businessNewsList,
      ...entertainmentNewsList,
      ...generalNewsList,
      ...healthNewsList,
      ...sportsNewsList,
      ...technologyNewsList
    );
  } catch (err) {
    console.log(err);
  }
  return {
    paths: getPath(newsList),
    fallback: false,
  };
};

export default ArticlePage;
