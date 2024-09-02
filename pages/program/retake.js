import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
// import RightTextContent from '@/components/DetailLayout/RightTextContent';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import { ssnForm } from '@/components/formobjects/ssnForm';
const title = '투에스N';
const text_1 =
  '투에스N은 대치동 일타강사 김재하 선생님이 직접 이끄는 수학, 국어, 영어 전문 재수 학원입니다. 기존의 재수 종합학원 시스템의 한계를 넘어서, 일타 강사진의 수준 높은 강의와 개별 학습 진도에 맞춘 맞춤형 자습시간을 제공합니다.<br>투에스N은 단순히 상위권 학생만을 선별해 입시 성적을 높이는 것이 아닙니다.<br>모든 학생들이 최고의 대학에 진학할 수 있도록 원장과 강사진이 직접 학생 관리와 지도를 맡고 있습니다.';

const currentPage = 2;

const rightContentItems = ['국어, 수학 단과 선택 시간표', '수학 단과 선택 시간표'];

const Retake = () => {
  return (
    <>
      <PageLayout currentPage={currentPage} background={false}>
        <LeftContentBox
          title={title}
          text={text_1}
          button_text="접수하기"
          form={ssnForm}
          // link="https://sseduacademy.com/ssn"
          link="/ssn"
        />
        <RightContentBox>
          <Title>{/* <div className="title">투에스N 하루 일과표 예시</div> */}</Title>
          <RightTabContent rightContentItems={rightContentItems} currentPage={currentPage} />
        </RightContentBox>
      </PageLayout>
    </>
  );
};

const Title = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  padding-left: 1rem;
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

export default Retake;
