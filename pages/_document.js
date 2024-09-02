import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';
import Script from 'next/script';

const MyDocument = () => {
  // const GTM_ID = process.env.NEXT_PUBLIC_GTM_ID;
  return (
    <Html lang="en">
      <Head>
        {/* <script async src={`https://www.googletagmanager.com/gtag/js?id=${GTM_ID}`} />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GTM_ID}', {
              page_path: window.location.pathname
            });
          `,
          }}
        /> */}

        <title>대치 투에스에듀 아카데미 | SSEDU ACADEMY</title>
        <link rel="icon" href="/images/Sub_Symbol_R.png" />
        <meta name="description" content="SSEDU ACADEMY 투에스에듀 아카데미입니다." />

        <meta property="og:title" content="대치 투에스에듀 | SSEDU ACADEMY" />
        <meta
          property="og:description"
          content="대치 투에스에듀 아카데미는 학생들에게 &#39;성공DNA를 심어주는 집단&#39;입니다&#46; 대한민국 최고의 교육 전문가&#44; 입시 컨설턴트&#44; 그리고 일타 강사진이 제공하는 &#39;최적의 입시 로드맵&#39;을거쳐 명문대에서 인생2막을 시작하세요&#46;"
        />
        <meta property="og:url" content="https://ssedu-fe.vercel.app/" />
        <meta property="og:image" content="/images/Group_15867.png" />

        <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="author" content="Smartro" />
        <meta name="naver-site-verification" content="9de166486a878d7528ef3a2a70cc3607a3d60dbe" />

        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`} />
        <script
          id="google-analytics"
          dangerouslySetInnerHTML={{
            __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}', {
              page_path: window.location.pathname + window.location.search,
            });
          `,
          }}
        />
        {/* <script
          dangerouslySetInnerHTML={{
            __html: `
        // Your custom event code goes here
        insert_event_code_here;

        // Facebook Pixel code for 'CompleteRegistration' event
        fbq('track', 'CompleteRegistration');
      `,
          }}
        />

        <Script strategy="lazyOnload" id="lazyOnloadScript">
          {`
    !function(f,b,e,v,n,t,s)
    {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
    n.callMethod.apply(n,arguments):n.queue.push(arguments)};
    if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
    n.queue=[];t=b.createElement(e);t.async=!0;
    t.src=v;s=b.getElementsByTagName(e)[0];
    s.parentNode.insertBefore(t,s)}(window, document,'script',
    'https://connect.facebook.net/en_US/fbevents.js');
    fbq('init', '320167054180958');
    fbq('track', 'PageView');
  `}
        </Script> */}
        {/* <noscript>
          <img
            height="1"
            width="1"
            style={{ display: 'none', visibility: 'hidden' }}
            src="https://www.facebook.com/tr?id=320167054180958&ev=PageView&noscript=1"
          />
        </noscript> */}

        <link
          rel="stylesheet"
          as="style"
          crossorigin
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/static/pretendard.min.css"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
          (function (w, d, s, l, i) {
            w[l] = w[l] || [];
            w[l].push({ 'gtm.start': new Date().getTime(), event: 'gtm.js' });
            var f = d.getElementsByTagName(s)[0],
              j = d.createElement(s),
              dl = l != 'dataLayer' ? '&l=' + l : '';
            j.async = true;
            j.src = 'https://www.googletagmanager.com/gtm.js?id=' + i + dl;
            f.parentNode.insertBefore(j, f);
          })(window, document, 'script', 'dataLayer', 'GTM-NBH4VX68')
          `,
          }}
        ></script>
        <script
          src="https://t1.kakaocdn.net/kakao_js_sdk/2.5.0/kakao.min.js"
          integrity="sha384-kYPsUbBPlktXsY6/oNHSUDZoTX6+YI51f63jCPEIPFP09ttByAdxd2mEjKuhdqn4"
          crossorigin="anonymous"
          async
        ></script>
      </Head>
      <body>
        <Main />
        <NextScript />
        <script
          // 채널톡 연동
          dangerouslySetInnerHTML={{
            __html: `(function() {
                      var w = window;
                      if (w.ChannelIO) {
                        return (window.console.error || window.console.log || function(){})('ChannelIO script included twice.');
                      }
                      var ch = function() {
                        ch.c(arguments);
                      };
                      ch.q = [];
                      ch.c = function(args) {
                        ch.q.push(args);
                      };
                      w.ChannelIO = ch;
                      function l() {
                        if (w.ChannelIOInitialized) {
                          return;
                        }
                        w.ChannelIOInitialized = true;
                        var s = document.createElement('script');
                        s.type = 'text/javascript';
                        s.async = true;
                        s.src = 'https://cdn.channel.io/plugin/ch-plugin-web.js';
                        s.charset = 'UTF-8';
                        var x = document.getElementsByTagName('script')[0];
                        x.parentNode.insertBefore(s, x);
                      }
                      if (document.readyState === 'complete') {
                        l();
                      } else if (window.attachEvent) {
                        window.attachEvent('onload', l);
                      } else {
                        window.addEventListener('DOMContentLoaded', l, false);
                        window.addEventListener('load', l, false);
                      }
                    })();
                    ChannelIO('boot', {
                       "pluginKey": '${process.env.NEXT_PUBLIC_PLUGIN_KEY}',
                    });
                    `,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-NBH4VX68"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          ></iframe>
        </noscript>
      </body>
    </Html>
  );
};

MyDocument.getInitialProps = async (ctx) => {
  const sheet = new ServerStyleSheet();
  const originalRenderPage = ctx.renderPage;

  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    };
  } finally {
    sheet.seal();
  }
};

export default MyDocument;
