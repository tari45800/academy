import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import TextContainer from '@/components/FormLayout/TextContainer';
import styled from 'styled-components';
import theme from '@/components/theme';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import Link from 'next/link';
import Button from '@/components/Button';

const title = '온라인 수업';
const text =
  '대치 투에스에듀 재원생들에게 에브리데이매쓰 온라인 강의를 제공합니다.<br>추가적인 온라인 수업은 교육 품질을 높이고, 학생들의 학습 만족도 및 학업 성취도를 향상시키는 데 기여합니다.';

const currentPage = 2;
const formClass = 'online';
const contents = [
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '학습의 유연성',
    content: '수업 참석 불가시 온라인 강의 및 1:1 온라인 질의응답으로 수업 대체',
  },
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '반복 학습',
    content: '심화 개념 등 어려운 수업은 온라인 강의로 반복 학습 진행하여 학습 효과 극대화',
  },
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '맞춤 학습',
    content: '학생 별 학습 수준에 따른 강의 및 학습 콘텐츠 제공, 취약 단원 집중 학습',
  },
];

const Online = () => {
  return (
    <Container>
      <PageLayout currentPage={currentPage} background={false}>
        <LeftContentBox
          title={title}
          text={text}
          button_text="애브리데이매쓰 구경하기"
          url="https://everydaymath.kr/"
          form="edm"
        />
        <RightContentBox>
          <Title>
            <div className="title">투에스N 하루 일과표 예시</div>
          </Title>
          <TextContainer contents={contents} currentPage={currentPage} formClass={formClass} />
        </RightContentBox>
      </PageLayout>
    </Container>
  );
};

const Container = styled.div`
  .button_box {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: end;
  }
  .edm_button {
    display: inline-flex;
    padding: 7px 52px 7px 54px;
    justify-content: center;
    align-items: center;
    background: #711e1e;
    color: #fff;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Work Sans;
    font-size: 18px;
    font-style: normal;
    font-weight: 600;
    line-height: 41.5px; /* 230.556% */
    border: none;
    cursor: pointer;
    @media ${theme.device.mobile} {
      display: flex;
      width: 23.125rem;
      height: 3.375rem;
      padding: 0.6875rem 4.25rem;
      justify-content: center;
      align-items: center;
      gap: 0.625rem;
      flex-shrink: 0;
      border-radius: 0.9375rem;
      border: 1px solid #701e1e;
      background: #701e1e;
      color: #fff;
      text-align: center;
      font-size: 1rem;
      font-style: normal;
      font-weight: 600;
      line-height: 1.3375rem;
      text-transform: capitalize;
    }
  }

  .right_title {
    color: #0b0b0b;
    font-feature-settings: 'clig' off, 'liga' off;
    font-family: Pretendard;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 56px; /* 175% */
    margin-bottom: 20px;
    padding-left: 10px;
  }
  .online {
  }
`;

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  padding-left: 10px;
  .title {
    color: #0b0b0b;
    font-family: Pretendard;
    font-size: 25px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
  }
  @media ${theme.device.mobile} {
    padding-left: 0rem;
    margin-bottom: 5px;
    .title {
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 600;
      line-height: 2rem;
    }
  }
`;
export default Online;
