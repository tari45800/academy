import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import styled from 'styled-components';
import TextContainer from '@/components/FormLayout/TextContainer';
import theme from '@/components/theme';
import RightContentBox from '@/components/DetailLayout/RightContentBox';

const title = '대치 투에스에듀';
const text =
  '대치 투에스에듀는 학생들의 숨겨진 "성공 DNA"를 깨우는 교육 집단입니다.<br>대한민국 최정상의 교육 전문가, 입시 컨설턴트, 그리고 일타 강사진이 학생의 입시 여정을 함께 시작하고 성공적인 마무리까지 동행합니다.<br>대치 투에스에듀와 명문대 진학을 위한 최적화된 입시 로드맵을 거쳐 꿈을 현실로 만드는 인생 제2막을 시작하세요.';

const currentPage = 1;
const formClass = 'intro';
const contents = [
  {
    leftTitle: '컨설팅',
    leftContent: 'Consulting',
    mark: '•',
    contents: ['전문 입시 컨설턴트와 1:1 대면 상담', '학습 목표 설정, 학습 방향성 전략 및 중장기 입시 로드맵 제시'],
  },
  {
    leftTitle: '코칭',
    leftContent: 'Coaching',
    mark: '•',
    contents: [
      'SKY 출신 담당 멘토 1:1 과외식 질의응답 제공',
      '학습 동기부여, 맞춤형 학습 지도, 학습 진도 현황 리포트 제공',
    ],
  },
  {
    leftTitle: '수업',
    leftContent: 'Teaching',
    mark: '•',
    contents: ['온/오프라인 블렌디드 학습 환경 제공', '입시 트렌드 반영한 고품질 콘텐츠 및 모의고사 제공'],
  },
  {
    leftTitle: '관리',
    leftContent: 'Managing',
    mark: '•',
    contents: [
      '생활 관리 및 학습 관리 전담 스태프 상주하여 면학 분위기 관리',
      '올바른 면학 분위기 형성을 위한 학생생활규범 및 벌점제도 운영',
    ],
  },
  {
    leftTitle: '소통',
    leftContent: 'Communication',
    mark: '•',
    contents: ['학습 진도 현황, 성적 변화 추이 관련 정기 상담 진행', '학부모-학생-원장 방향성 관련 정기 상담 진행'],
  },
];

const Intro = () => {
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
  /* @media ${theme.device.tabletL} {
    .intro {
      .total_box {
        background: rgba(255, 255, 255, 0.5);
        padding: 25px;
        flex-direction: column;
      }
    }
  }
  @media ${theme.device.mobile} {
    .intro {
      .total_box {
        display: flex;
        padding: 0.625rem 1.25rem;
        align-items: flex-start;
        gap: 0.325rem;
        background: #efefef;
        border-radius: 0.5rem;
      }
    }
  } */

  .intro {
    gap: 20px;

    .total_box {
      align-items: center;

      @media ${theme.device.tabletL} {
        align-items: start;
      }

      @media ${theme.device.mobile} {
        background: #efefef;
      }

      div {
        color: rgba(51, 51, 51, 0.8);
        font-feature-settings: 'liga' off;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 25.2px */

        @media ${theme.device.mobile} {
          color: #0b0b0b;
          font-size: 0.625rem;
          font-style: normal;
          font-weight: 400;
          line-height: 170%;
        }
      }
    }

    .text_box,
    .left_box {
      background: rgba(255, 255, 255, 0.5);
      border-radius: 10px;
      height: 108px;

      @media ${theme.device.tabletL} {
        height: fit-content;
        background: none;
      }
    }

    .text_box {
      div {
        font-size: 14px;
      }
    }

    .left_box {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      min-width: 180px;

      @media ${theme.device.tabletL} {
        flex-direction: row;
        justify-content: start;
        align-items: end;
        gap: 5px;
        margin: 0 0 8px 14px;
      }

      @media ${theme.device.tabletL} {
        margin: 0;
      }
      h2 {
        color: #333;
        text-align: center;
        font-feature-settings: 'liga' off;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        @media ${theme.device.mobile} {
          color: #0b0b0b;
          /* font-feature-settings: 'liga' off; */
          /* font-family: Pretendard; */
          font-size: 0.725rem;
          font-style: normal;
          font-weight: 700;
          line-height: 170%;
        }
      }

      div {
        color: #333;
        font-feature-settings: 'liga' off;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

        @media ${theme.device.mobile} {
          color: #0b0b0b;
          /* font-feature-settings: 'liga' off; */
          /* font-family: Pretendard; */
          font-size: 0.625rem;
          font-style: normal;
          font-weight: 700;
          line-height: 170%;
        }
      }
    }
  }
`;

export default Intro;
