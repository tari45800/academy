import React, { useEffect, useState } from 'react';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import CategoryLayout from '@/components/DetailLayout/CategoryLayout';
import PageLayout from '@/components/DetailLayout/PageLayout';
import { winterSchoolForm } from '@/components/formobjects/winterSchoolForm';
import { SATForm } from '@/components/formobjects/SATForm';
import { ssnForm } from '@/components/formobjects/ssnForm';
// import { ssnRegularForm } from '@/components/formobjects/ssnRegularForm';

const title = '원서접수';
const text_1 = '대치 투에스에듀의 원서 접수 페이지를 통해 학원의 모든 프로그램을 손쉽고 빠르게 신청하세요. ';
const currentPage = 6;
const pageName = 'applicationBox';

// 접수 양식을 담고 있는 배열
const Apply = () => {
  const formArray = [winterSchoolForm, SATForm, ssnForm];
  // const formArray = [winterSchoolForm, SATForm, ssnForm, ssnRegularForm];
  const [isMobile, setIsMobile] = useState(false);
  const link = isMobile ? '/apply/mobileapplicationpage' : '/apply';
  const mode = 'page';
  // const mode = isMobile ? 'page' : 'popup';
  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 760);
    }
  };

  useEffect(() => {
    handleResize(); // 컴포넌트가 마운트될 때 초기 값 설정

    // resize 이벤트 리스너 추가
    window.addEventListener('resize', handleResize);

    // 컴포넌트가 언마운트될 때 이벤트 리스너 제거
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []); // 빈 배열은 컴포넌트가 처음 마운트될 때만 실행

  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} />
      <CategoryLayout pageName={pageName} rightContentItems={formArray} currentPage={6} mode={mode} link={link} />
    </PageLayout>
  );
};

export default Apply;
