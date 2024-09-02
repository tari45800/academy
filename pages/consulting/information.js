import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import TextContainer from '@/components/FormLayout/TextContainer';
import styled from 'styled-components';
import theme from '@/components/theme';
import RightContentBox from '@/components/DetailLayout/RightContentBox';

const title = '입시 정보';
const text =
  '변화하는 입시 환경에 가장 먼저 대비하여 성공의 지름길로 나아가세요.<br>대치 투에스에듀는 최신 입시 정보와 동향을 제공하여, 학생들과 학부모님들이 항상 최신의 입시 상황에 대비할 수 있도록 돕습니다.';

const currentPage = 3;
const formClass = 'information';
const contents = [
  {
    link: 'https://blog.naver.com/PostView.naver?blogId=2s_edu&logNo=223303758190&categoryNo=&parentCategoryNo=27&from=thumbnailList',
    imageSrc: '/images/svg/1.jpeg',
    title: '의대정시컷 낮아진다? 불수능에 추합인원 증가',
    content:
      '안녕하세요 대치 투에스에듀 아카데미입니다. 역대급 표준점수와 난이도로 화제를 모았던 올해 2024학년도 수능을 기억하시나요?...',
    contents: ['2s_edu', '2023.12.26'],
    arrowImg: '/images/svg/arrow.svg',
  },
  {
    link: 'https://blog.naver.com/PostView.naver?blogId=2s_edu&logNo=223297601232&categoryNo=&parentCategoryNo=27&from=thumbnailList',
    imageSrc: '/images/svg/2.jpeg',
    title: '국어·수학 1등급 비율, 지방은 전부 감소',
    content:
      '안녕하세요 대치 투에스에듀 아카데미입니다. 지난 7일 발표된 수능 성적 분석 결과, 지방을 포함한 대다수 시·도에서 공통적인 특징이 확인되었습니다...',
    contents: ['2s_edu', '2023.12.19'],
    arrowImg: '/images/svg/arrow.svg',
  },
  {
    link: 'https://blog.naver.com/PostView.naver?blogId=2s_edu&logNo=223289383301&categoryNo=&parentCategoryNo=27&from=thumbnailList',
    imageSrc: '/images/svg/3.jpeg',
    title: '불수능, 2024 수능 등급컷 원점수',
    content: '안녕하세요 대치 투에스에듀 아카데미입니다. 8일 오전 9시, 드디어 2024학년도 수능 성적이 발표되었습니다...',
    contents: ['2s_edu', '2023.12.11'],
    arrowImg: '/images/svg/arrow.svg',
  },
  {
    link: 'https://blog.naver.com/PostView.naver?blogId=2s_edu&logNo=223277041072&categoryNo=&parentCategoryNo=27&from=thumbnailList',
    imageSrc: '/images/svg/4.jpeg',
    title: '2024 수능수학 총평 & 공부법',
    content:
      '안녕하세요 대치동 입시의 표준, 교육 전문가 대치 투에스에듀 아카데미입니다. 16일 시행된 2024학년도 대학수학능력시험 이후 가채점표를....',
    contents: ['2s_edu', '2023.11.28'],
    arrowImg: '/images/svg/arrow.svg',
  },
];

const Information = () => {
  return (
    <Container>
      <PageLayout currentPage={currentPage} background={false}>
        <LeftContentBox title={title} text={text} />
        <RightContentBox>
          <TextContainer contents={contents} currentPage={currentPage} formClass={formClass} />
        </RightContentBox>
      </PageLayout>
    </Container>
  );
};

const Container = styled.div`
  .information {
    .total_box {
      cursor: pointer;
      padding: 20px;
      border: 1.5px solid rgba(177, 177, 177, 0.26);

      filter: drop-shadow(0px 4px 29px rgba(255, 255, 255, 0.16));
      background-color: rgba(255, 255, 255, 0.16);

      @media ${theme.device.tabletL} {
        flex-direction: row;
      }

      @media ${theme.device.mobile} {
        padding: 5px 5px 5px 10px;
        border: 1px solid rgba(177, 177, 177 0.26);
        width: calc(100vw - 40px);
        height: 110px;
        justify-content: center;
        align-items: center;
      }
    }

    .img_box {
      margin-right: 16px;
      @media ${theme.device.mobile} {
        order: 2;
        margin-right: 0;
        margin-left: 15px;

        min-width: 100px;
        max-width: 100px;
        min-height: 100px;
        max-height: 100px;
      }
    }

    .text_box {
      align-items: start;
      background: none;
      gap: 0;

      @media ${theme.device.mobile} {
        justify-content: space-between;
        height: 100%;
        padding: 10px 0 5px 0;
      }

      .contents_box {
        display: none;
        @media ${theme.device.mobile} {
          display: block;

          div {
            margin: 0;
            color: #a8a8a8;
            font-feature-settings: 'clig' off, 'liga' off;
            font-family: Pretendard;
            font-size: 10px;
            font-style: normal;
            font-weight: 500;
            line-height: 143.8%;
          }
        }
      }

      h2 {
        color: #0b0b0b;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Pretendard;
        font-size: 24px;
        font-style: normal;
        font-weight: 500;
        line-height: 41.5px; /* 172.917% */

        max-width: 16vw;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;

        @media ${theme.device.mobile} {
          color: #0b0b0b;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Pretendard;
          font-size: 14px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          margin-bottom: 0;

          max-width: 30vw;
        }
      }

      .content {
        @media ${theme.device.mobile} {
          display: none;
        }
      }

      div {
        color: #0b0b0b;
        font-feature-settings: 'clig' off, 'liga' off;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 28px; /* 200% */

        @media ${theme.device.mobile} {
          color: #0b0b0b;
          font-feature-settings: 'clig' off, 'liga' off;
          font-family: Pretendard;
          font-size: 8px;
          font-style: normal;
          font-weight: 500;
          line-height: 10px;
        }
      }
    }

    .arrow {
      display: flex;
      align-items: end;
      min-width: 21px;
      margin-left: 16px;

      img {
        max-height: 21px;
      }

      @media ${theme.device.mobile} {
        display: none;
      }
    }
  }
`;

export default Information;
