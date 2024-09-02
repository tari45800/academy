import React, { useState, useEffect } from 'react';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import CategoryLayout from '@/components/DetailLayout/CategoryLayout';
import PageLayout from '@/components/DetailLayout/PageLayout';
import { getData2 } from '@/components/FBSubmit';

const title = '공지사항';
// const text = '';

const currentPage = 5;
const pageName = 'communityBox';

const Notice = () => {
  const [dbData, setDbData] = useState([]);
  const [isMobile, setIsMobile] = useState(false);
  const mode = isMobile ? 'page' : 'popup';
  const link = isMobile ? '/communitypage' : '/community/notice';

  const handleResize = () => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 920);
    }
  };

  useEffect(() => {
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  useEffect(() => {
    const data = {
      dBsetter: setDbData,
      dBcollection: 'WritingForm',
      dBwhere: 'category',
      dBequal: '공지사항',
      dBorderBy: null,
      dBdesc: null,
    };
    getData2(data);
  }, []);

  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} />
      <CategoryLayout
        pageName={pageName}
        rightContentItems={dbData}
        currentPage={currentPage}
        mode={mode}
        link={link}
      />
    </PageLayout>
  );
};

export default Notice;
