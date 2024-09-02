import React from 'react';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import CategoryLayout from '@/components/DetailLayout/CategoryLayout';
import PageLayout from '@/components/DetailLayout/PageLayout';
import RightContentBox from '@/components/DetailLayout/RightContentBox';

const title = '강사채용';
const text_1 =
  '대치 투에스에듀에서는 열정적이고 전문적인 강사진을 모집하고 있습니다. \n학생들의 학업 성취와 개인적 성장을 지원하기 위해 뛰어난 교육적 능력과 심층적인 학문적 지식을 갖춘 강사를 찾고 있습니다.<br>학생들의 성공적인 미래를 함께 만들어가실 열정적인 교육자들을 기다립니다.';
const currentPage = 4;
const pageName = 'ManagementBox';

const rightContentItems = [
  {
    title: '수능 수학 강사 채용',
    subTitle: '00년 이상 | 영입 종료시 | 강남구',
    contents: [
      {
        title: '[지원자격]',
        text: '해당 분야의 전문 지식 및 교육 경험을 갖춘 인재',
      },
      {
        title: '[역할과 책임]',
        text: '학생들의 학업 성취를 돕고, 학습 목표 달성을 위한 지속적인 지원 제공',
      },
      {
        title: '[개발 기회]',
        text: '정기적인 교육 연수 및 워크숍을 통한 전문성 강화',
      },
    ],
  },
  {
    title: '수능 국어 강사 채용',
    subTitle: '00년 이상 | 영입 종료시 | 강남구',
    contents: [
      {
        title: '[지원자격]',
        text: '해당 분야의 전문 지식 및 교육 경험을 갖춘 인재',
      },
      {
        title: '[역할과 책임]',
        text: '학생들의 학업 성취를 돕고, 학습 목표 달성을 위한 지속적인 지원 제공',
      },
      {
        title: '[개발 기회]',
        text: '정기적인 교육 연수 및 워크숍을 통한 전문성 강화',
      },
    ],
  },
];

const Hiring = () => {
  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} />

      <CategoryLayout pageName={pageName} rightContentItems={rightContentItems} currentPage={currentPage} />
    </PageLayout>
  );
};

export default Hiring;
