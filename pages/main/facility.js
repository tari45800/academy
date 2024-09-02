import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';

const title = '시설안내';
const text_1 =
  '대치 투에스에듀 아카데미의 프리미엄 시설은 공부에 몰입할 수 있는 최적의 학습 환경을 제공합니다.<br>개인 전용 사물함이 마련된 독서실형 학습 공간, 최신 기술이 적용된 강의실, 다기능 휴게실은 학습과 휴식을 조화롭게 이룰 수 있도록 설계되었습니다.';

const currentPage = 1;
//

const Facility = () => {
  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} />
      {/* <RightImageTextContent rightContentItems={rightContentItems} currentPage={currentPage} /> */}
      <RightContentBox>
        <RightTabContent currentPage={currentPage} />
      </RightContentBox>
    </PageLayout>
  );
};

export default Facility;
