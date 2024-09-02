import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftColumnContent from '@/components/DetailLayout/LeftColumnContent';
import styled from 'styled-components';
import TextContainer from '@/components/FormLayout/TextContainer';
import Image from 'next/image';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';

const title = '강사 매니지먼트 소개';
// const columnText = [
//   '엄선된 전문 강사진: <br>우리는 엄격한 선발 과정을 통해 최고의 강사진을 구성합니다. 각 강사는 해당 분야의 전문 지식과 경험을 바탕으로 학생들을 지도합니다.',
//   '지속적인 전문성 개발: <br>강사진의 교육 기술과 지식을 지속적으로 업데이트하고 발전시키기 위해 정기적인 연수와 워크숍을 실시합니다.',
//   '학생 중심의 교육 방식: <br>강사진은 학생 개개인의 학습 스타일과 필요를 이해하고, 이에 맞춘 맞춤형 교육을 제공합니다.',
//   '성공적인 입시 결과: <br>우리의 강사진은 학생들의 입시 준비뿐만 아니라, 전반적인 학습 과정에서 학생들이 최고의 성과를 이룰 수 있도록 지원합니다.',
//   // ''
// ];
const text =
  '학생들의 "성공 DNA" 깨워줄 수 있는 최고의 강사진을 모집하고 육성합니다.<br>대치 투에스에듀는 새로운 입시 표준을 세우기 위해 끊임없이 노력하며, 이를 위해 강사진의 전문성과 열정에 중점을 둡니다.<br>대치 투에스에듀의 강사진은 학생들의 가능성을 최대한으로 이끌어내어 학생들이 성공의 길로 나아갈 수 있도록 함께합니다.';
const currentPage = 4;
const formClass = 'intro';
const contents = [
  {
    leftTitle: '엄선된\n 전문 강사진',
    content:
      '우리는 엄격한 선발 과정을 통해 최고의 강사진을 구성합니다.\n각 강사는 해당 분야의 전문 지식과 경험을 바탕으로 학생들을 지도합니다.',
  },
  {
    leftTitle: '지속적인\n 전문성 개발',
    content: '강사진의 교육 기술과 지식을 지속적으로 업데이트하고 발전시키기 위해 정기적인 연수와 워크숍을 실시합니다.',
  },
  {
    leftTitle: '학생 중심의\n 교육 방식',
    content:
      '대치 투에스에듀 강사진은 학생 개개인의 학습 스타일과 필요를 이해하고, 이에 맞춘 맞춤형 교육을 제공합니다.',
  },
  {
    leftTitle: '성공적인\n 입시 결과',
    content: '학생들의 입시 준비뿐만 아니라 전반적인 학습 과정에서 학생들이 최고의 성과를 이룰 수 있도록 지원합니다.',
  },
];

const Intro = () => {
  return (
    <Container>
      <PageLayout currentPage={currentPage} img="/images/svg/image367.svg">
        {/* <LeftColumnContent title={title} columnText={columnText} /> */}
        <LeftContentBox title={title} text={text} />
        <RightContentBox>
          <TextContainer contents={contents} currentPage={currentPage} formClass={formClass} />
        </RightContentBox>
      </PageLayout>
    </Container>
  );
};
const Container = styled.div`
  .padding {
    padding-left: 10px;
  }

  .RightContentBox {
    height: 100%;
  }

  .intro {
    gap: 20px;
  }
`;

export default Intro;
