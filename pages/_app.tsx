import type { AppProps } from "next/app";
import "../styles/globals.css";
import { theme } from "@root/theme";
import { wrapper } from "@root/store";
import { GetStaticProps } from "next";
import { useSelector } from "react-redux";
import { CssBaseline } from "@mui/material";
import { ThemeProvider } from "@mui/material/styles";
import SiteLayout from "@root/layout/template/site-layout";
import { putNewsList, requestNewsList } from "@modules/news/store/actions";
import { useDeviceType } from "@root/modules/general/libraries/device-type";
import { REVALIDATION_TIME } from "@root/modules/general/libraries/constants";

function MyApp({ Component, pageProps }: AppProps) {
  const deviceType = useDeviceType();

  return (
    <ThemeProvider {...{ theme }}>
      <CssBaseline />
      <SiteLayout {...{ deviceType }}>
        <Component {...pageProps} />
      </SiteLayout>
    </ThemeProvider>
  );
}

export default wrapper.withRedux(MyApp);
