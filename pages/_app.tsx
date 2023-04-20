import type { AppProps } from "next/app";
import { CacheProvider, EmotionCache } from '@emotion/react';
import { FC } from 'react';
import { Open_Sans } from "next/font/google";
import { makeStore, wrapper } from 'stores';
import createEmotionCache from 'lib/createEmotionCache';
import { Box, CircularProgress, CssBaseline, ThemeProvider } from '@mui/material';
import { WithGraphQL } from 'lib/api';
import theme from 'styles/theme';
import "styles/global.scss"
import { globalVariables } from 'styles/var';
import { Provider } from 'react-redux';
import Header from "layout/Header";
import InfoLine from "layout/InfoLine";
import CategoryNav from "layout/CategoryNav";
import Modal from "components/Modal";
import Danwer from "layout/Danwer";
import {persistStore} from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";

const openSans = Open_Sans({ subsets: ["latin", "cyrillic"] });


interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const MyApp: FC<MyAppProps> = ({ Component, ...rest }) => {

  const { store, props } = wrapper.useWrappedStore(rest);
  const persistor = persistStore(store);
  const clientSideEmotionCache = createEmotionCache();
  const { emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <div className={openSans.className}>
      <Provider store={store}>
        <PersistGate persistor={persistor} loading={<Box sx={{ 
            display: 'flex',
            justifyContent: "center",
            alignItems: 'center',
            height: '100vh'
          }}>
          <CircularProgress color="primary" />
        </Box>}>
          <CacheProvider value={emotionCache}>
            <ThemeProvider theme={{ ...theme, ...globalVariables }}>
              <CssBaseline />
              <WithGraphQL>
                <InfoLine />
                <Header />
                <CategoryNav />
                <Component {...pageProps} />
                {/* <Footer /> */}
                <Modal />
                <Danwer />
              </WithGraphQL>
            </ThemeProvider>
          </CacheProvider>
        </PersistGate>
      </Provider>
    </div>
  );
}

export default MyApp;
