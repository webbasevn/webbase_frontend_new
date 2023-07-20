import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import theme from '@/ultils/theme';
import createEmotionCache from '@/ultils/createEmotionCache';

import { SWRConfig } from 'swr'

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

import MainLayout from '@/layouts/main';

import '@/styles/globals.css';
import axiosClient from '@/api-client/axiosClient';

import { Provider } from "react-redux";
import store from "@/store";

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;
  const Layout = Component.Layout ?? MainLayout

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Webbase CRM</title>
        <meta
          name='viewport'
          content='minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover'
        />
      </Head>
      <ThemeProvider theme={theme}>
        <SWRConfig value={{fetcher: url => axiosClient.get(url), shouldRetryOnError: true}}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            <Provider store={store}>
              <Component {...pageProps} />
            </Provider>
          </Layout>
        </SWRConfig>
      </ThemeProvider>
    </CacheProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};