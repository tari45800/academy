import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';
import styled from 'styled-components';
import theme from '../components/theme';
import { app } from '@/components/Firebase';
import changeRouteGtag from '@/components/changeRouteGtag';
import { useEffect } from 'react';
import router, { useRouter } from 'next/router';
import Head from 'next/head';

export default function App({ Component, pageProps }) {
  const router = useRouter();
  useEffect(() => {
    router.events.on('routeChangeComplete', pageViewHandler);
    router.events.on('hashChangeComplete', pageViewHandler);
    return () => {
      router.events.off('routeChangeComplete', pageViewHandler);
      router.events.off('hashChangeComplete', pageViewHandler);
    };
  }, [router.events]);

  // const handleRouteChange = (url) => {
  //   changeRouteGtag(url);
  // };

  // useEffect(() => {
  //   router.events.on('routeChangeComplete', handleRouteChange);
  //   return () => {
  //     router.events.off('routeChangeComplete', handleRouteChange);
  //   };
  // }, []);

  return (
    <>
      {/* <Head>
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_TRACKING_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
			function gtag(){dataLayer.push(arguments);}
			gtag('js', new Date());
      
			gtag('config', '${process.env.GA_TRACKING_ID}', {
			page_path: window.location.pathname,
		  });`,
          }}
        />
      </Head> */}

      <Head>
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.GA_MEASUREMENT_ID}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        
        gtag('config', '${process.env.GA_MEASUREMENT_ID}', {
          page_path: window.location.pathname,
        });
      `,
          }}
        /> */}
      </Head>
      <RecoilRoot>
        <AppContainer
        // className={`${work_sans.variable} ${poppins.variable} ${roboto.variable} ${prompt.variable}`}
        >
          <Component {...pageProps} />
        </AppContainer>
      </RecoilRoot>
    </>
  );
}

function pageViewHandler() {
  if (window.gtag) {
    window.gtag('config', process.env.GA_TRACKING_ID, {
      page_path: window.location.pathname,
    });
  }
}

const AppContainer = styled.div`
  @media ${theme.device.mobile} {
    .mobile-none {
      display: none;
    }
  }
`;
