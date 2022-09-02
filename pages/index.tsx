import dynamic from "next/dynamic";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material";
import { News, NewsCriteria } from "@modules/news/libraries/news-types";
import { Note } from "@modules/notes/libraries/notes-types";
import { fetchNewsList } from "@modules/news/store/api/news-api";
import * as ownerData from "@modules/general/libraries/owner-data";
import { fetchNotesList } from "@modules/notes/store/api/notes-api";
import { useDeviceType } from "@modules/general/libraries/device-type";
import { REVALIDATION_TIME } from "@modules/general/libraries/constants";
import { PAGE_SIZE, SITE_NAME } from "@modules/general/libraries/constants";

import { wrapper } from "@root/store";
import { putNewsList } from "@root/modules/news/store/actions";
import { identify } from "@root/modules/general/libraries/utils";

const MetaTags = dynamic(() => import("@modules/general/libraries/meta-tags")),
  NewsHeadline = dynamic(
    () => import("@modules/news/components/news-headline")
  ),
  SocialMediaSection = dynamic(
    () => import("@modules/sections/social-media-section")
  ),
  ServicesSection = dynamic(() => import("@modules/sections/services-section")),
  NotesSection = dynamic(() => import("@modules/sections/notes-section")),
  TopNewsSection = dynamic(() => import("@modules/sections/top-news"));

const HomePage = ({
  headlineNewsItems,
  noteList,
}: {
  headlineNewsItems: News[];
  noteList: Note[];
}) => {
  const deviceType = useDeviceType();
  const theme = useTheme();

  return (
    <div className="page">
      <MetaTags
        title="home page"
        description={`${SITE_NAME} main page`}
        url="/"
      />
      <Grid container spacing={3}>
        {deviceType.isScreen && (
          <Grid item sm={5} md={4} lg={4}>
            <SocialMediaSection ownerData={ownerData} />
            <NotesSection notes={noteList} />
          </Grid>
        )}
        <Grid item xs={12} md={8} lg={8}>
          {headlineNewsItems && (
            <NewsHeadline list={headlineNewsItems.slice(0, 3)} />
          )}
          <ServicesSection />
          {headlineNewsItems && (
            <TopNewsSection
              deviceType={deviceType}
              theme={theme}
              news={headlineNewsItems.slice(3)}
            />
          )}
        </Grid>
      </Grid>
    </div>
  );
};

export const getStaticProps = wrapper.getStaticProps(() => async () => {
  let headlineNewsItems: News[] | null | undefined;
  let noteList: Note[] | null | undefined;

  const newsCriteria: NewsCriteria = {
    type: "top",
    headlinesOptions: {
      pageSize: PAGE_SIZE,
      category: "general",
    },
  };
  try {
    const headlineNewsRes = await fetchNewsList(newsCriteria);
    if (headlineNewsRes.status === "ok") {
      headlineNewsItems = headlineNewsRes.articles.map((article) =>
        identify(article, "top")
      );
    }

    // note list ______________________________
    const noteListRes = await fetchNotesList();
    if (noteListRes) noteList = noteListRes;
  } catch (err) {
    console.log(err);
  }

  return {
    props: {
      headlineNewsItems: headlineNewsItems ? headlineNewsItems : null,
      noteList: noteList ? noteList : null,
    },
    revalidate: REVALIDATION_TIME,
  };
});

export default HomePage;
