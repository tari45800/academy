import React, { useState } from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
// import RightTextContent from '@/components/DetailLayout/RightTextContent';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import TextContainer from '@/components/FormLayout/TextContainer';
import styled from 'styled-components';
import theme from '@/components/theme';
import Button from '@/components/Button';
import { winterSchoolForm } from '@/components/formobjects/winterSchoolForm';
import TabContainer from '@/components/FormLayout/TabContainer';
import Header from '../TSpages/Header';

const title = '시즌제 프로그램';
const text =
  '대치 투에스에듀의 시즌제 프로그램은 학기 중 부족했던 핵심 개념과  심화 내용을 방학 기간동안 집중적으로 학습하여 학업 성취도를 극대화할 수 있도록 설계되었습니다.<br>각 시즌 프로그램은 학생들의 개별 학습 목표와 수준을 고려한 맞춤형 시간표와 커리큘럼을 제작합니다.<br>소규모 그룹 학습과 1:1 멘토링 세션을 포함하여 학생들이 개별적인 질문과 문제에 대해 심도 깊게 탐구할 수 있는 기회를 제공합니다.';

const currentPage = 2;

const tabItems = ['썸머스쿨', '윈터스쿨', '[마감]'];

const formClass = 'intro';
const contents = [
  {
    leftTitle: '모집대상',
    content: '예비고1, 고2, 고3, N수',
  },
  {
    leftTitle: '수업기간',
    content: '2023년 12월 30일 (토) ~ 2024년 2월 18일 (일) [7주]',
  },
  {
    leftTitle: '접수기간',
    content: '선착순 마감',
  },
  {
    leftTitle: '수강료',
    content:
      '7주 과정 | 469만원 (4주 기준 268만원) \n*수업료/인강수강권/자습전용관/교재/컨텐츠 비용 포함. 급식비 별도.',
  },
  {
    leftTitle: '상담문의',
    content: '전화문의 | 010-3018-0370 \n빠른상담 | 대치투에스에듀 채널톡',
  },
  {
    leftTitle: '구비서류',
    content:
      '예비고1 | 중학교 3학년 중간고사 성적표\n예비고2,3 | 2023년 전국모의고사 성적표 \nN수 | 2024학년도 대학수학능력시험 성적표',
  },
  {
    leftTitle: '레벨테스트',
    content: '2023년 12월 16일 (토) 15시',
  },
];

const Season = () => {
  const [tab, setTab] = useState(2);

  return (
    <Container>
      <PageLayout currentPage={currentPage}>
        <LeftContentBox
          title={title}
          text={text}
          button_text="접수마감"
          form={winterSchoolForm}
          link="https://sseduacademy.com/winterschool"
        />
        <RightContentBox>
          <TabContainer tabItems={tabItems} tab={tab} setTab={setTab} />
          {tab == 2 && (
            <>
              <div className="right_title">모집요강</div>
              <TextContainer contents={contents} currentPage={currentPage} formClass={formClass} />
              {/* <div className="refund">
                * 환불규정 : 학원의 설립/운영 및 과외교습에 관한 조례에 준하여 수강료를 반환합니다.
              </div> */}
            </>
          )}
          {tab == 1 && (
            <>
              <Header currentPage={currentPage}></Header>
              <div className="not_yet">
                <p>
                  2024 썸머스쿨 모집 요강
                  <br />
                  3월 중순 공지 예정
                </p>
              </div>
            </>
          )}
          {/* <div className="button_box">{tab == 2 && <Button form={winterSchoolForm}>접수하기</Button>}</div> */}
          {/* <RightTabContent rightContentItems={rightContentItems} currentPage={currentPage} /> */}
        </RightContentBox>
      </PageLayout>
    </Container>
  );
};

const Container = styled.div`
  // 상단 박스
  .right_title {
    display: flex;
    width: calc(100% - 10px);
    padding: 13px 15px;
    align-items: center;
    gap: 10px;
    background: #701e1e;
    margin-left: 10px;

    color: #fff;
    font-family: Pretendard;
    font-size: 18px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    letter-spacing: 0.84px;

    @media ${theme.device.mobile} {
      margin-left: 0;
      display: flex;
      height: 27px;
      padding: 13px 15px;
      align-items: center;
      gap: 10px;

      color: #fff;
      font-family: Pretendard;
      font-size: 12px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
      letter-spacing: 0.84px;
      margin-top: 0.5rem;
    }
  }

  // 접수하기 박스
  .button_box {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: end;
  }

  // 환불
  .refund {
    margin-top: 30px;
    margin-left: 10px;

    color: #f20;
    font-family: Roboto;
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px; /* 166.667% */
    letter-spacing: 0.56px;
  }

  .intro {
    .img_box {
      margin-right: 85px;
    }
  }

  .intro {
    gap: 0;
    .total_box {
      gap: 0px;
      div {
        color: rgba(51, 51, 51, 0.8);
        font-feature-settings: 'liga' off;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%; /* 25.2px */
      }

      @media ${theme.device.tabletL} {
        background: none;
        flex-direction: row;
        padding: 0;
      }
    }
    .left_box,
    .text_box {
      align-items: start;

      background: none;
      border-radius: 0;
      padding: 13px 15px;
      border: 1px solid #bcbcbc;
      border-right: none;
      border-bottom: none;
      height: fit-content;
    }

    .text_box {
      div {
        @media ${theme.device.mobile} {
          color: #000;
          font-family: Pretendard;
          font-size: 10px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          letter-spacing: 0.68px;
        }
      }
    }

    .left_box {
      border-left: none;
    }

    .left_box {
      display: flex;
      flex-direction: column;
      min-width: 180px;
      @media ${theme.device.mobile} {
        min-width: 98px;
      }

      h2 {
        color: #000;
        font-family: Pretendard;
        font-size: 16px;
        font-style: normal;
        font-weight: 700;
        line-height: 26px; /* 162.5% */
        letter-spacing: 0.68px;

        @media ${theme.device.mobile} {
          color: #000;
          font-family: Pretendard;
          font-size: 12px;
          font-style: normal;
          font-weight: 700;
          line-height: 12px; /* 100% */
          letter-spacing: 0.68px;
        }
      }

      div {
        color: #000;
        font-family: Pretendard;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 26px; /* 185.714% */
        letter-spacing: 0.68px;
      }
    }
  }
  .not_yet {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;
    min-height: 400px;
    p {
      color: #701e1e;
      text-align: center;
      font-size: 1.1rem;
      font-weight: 400;
      font-style: normal;
      color: var(--tabs-color);
      @media ${theme.device.mobile} {
        font-size: 0.875rem;
      }
    }
  }
`;

export default Season;
