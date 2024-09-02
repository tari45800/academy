import React from 'react';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import CategoryLayout from '@/components/DetailLayout/CategoryLayout';
import PageLayout from '@/components/DetailLayout/PageLayout';
const title = '조교채용';
const text_1 = '학원 운영을 지원하고 학생들의 학습 경험을 향상시키는 역량 있는 조교를 채용하고 있습니다.';
const currentPage = 4;
const pageName = 'ManagementBox';

const rightContentItems = [
  {
    title: '수능 수학 조교 채용',
    subTitle: '00년 이상 | 영입 종료시 | 강남구',
    contents: [
      {
        title: '[지원자격]',
        text: '조직적이고 효율적인 업무 수행 능력, 학생 지원에 대한 열정',
      },
      {
        title: '[역할과 책임]',
        text: '학원 운영 지원, 학습 자료 준비 및 관리, 학생들의 학습 진행 지원',
      },
      {
        title: '[개발 기회]',
        text: '교육 관리 및 학생 지원 분야에서의 경력 개발',
      },
    ],
  },
  {
    title: '수능 국어 조교 채용',
    subTitle: '00년 이상 | 영입 종료시 | 강남구',
    contents: [
      {
        title: '[지원자격]',
        text: '조직적이고 효율적인 업무 수행 능력, 학생 지원에 대한 열정',
      },
      {
        title: '[역할과 책임]',
        text: '학원 운영 지원, 학습 자료 준비 및 관리, 학생들의 학습 진행 지원',
      },
      {
        title: '[개발 기회]',
        text: '교육 관리 및 학생 지원 분야에서의 경력 개발',
      },
    ],
  },
];

const HiringAssist = () => {
  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} />
      <CategoryLayout pageName={pageName} rightContentItems={rightContentItems} currentPage={currentPage} />
    </PageLayout>
  );
};

export default HiringAssist;
