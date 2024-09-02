import styled from 'styled-components';
import Main from './Main';
import Head from 'next/head';

const HomeContainer = styled.div`
  position: relative;
  height: 100vh;
`;

export default function Home() {
  return (
    <>
      <Head>
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
      </Head>

      <HomeContainer>
        <Main></Main>
      </HomeContainer>
    </>
  );
}
