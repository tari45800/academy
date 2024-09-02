import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import RightTextContent from '@/components/DetailLayout/RightTextContent';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import { infosessionForm } from '@/components/formobjects/infosessionForm';
const title = '입시 설명회';
const text_1 =
  '대치 투에스에듀에서는 28년 경력의 대한민국 최고의 교육 전문가와 입시 컨설턴트가 함께하는 입시 설명회를 정기적으로 개최합니다.<br>입시 트렌드의 최전선에서 얻은 심층적인 분석과 정보를 바탕으로 입시 전략 수립에 필요한 인사이트를 받아보세요.';
const currentPage = 3;

const Infosession = () => {
  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} button_text="접수마감" form={infosessionForm} />
      {/* <RightTextContent rightContentItems={rightContentItems} currentPage={currentPage} /> */}
      <RightContentBox>
        <RightTabContent currentPage={currentPage} />
      </RightContentBox>
    </PageLayout>
  );
};

export default Infosession;
