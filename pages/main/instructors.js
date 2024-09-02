import React, { useState } from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import LeftTxetColumnContent from '@/components/DetailLayout/LeftTxetColumnContent';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import TabContainer from '@/components/FormLayout/TabContainer';

const title = '대표 강사';
const text =
  '대치 투에스에듀는 대한민국의 최고 수준의 일타 강사진과 함께합니다.<br>단순히 지식을 전달하는 것을 넘어, 학생들에게 동기를 부여하고 잠재력을 이끌어내어 최종 목표를 달성할 수 있도록 지도합니다.';
const columnText = [
  '탁월한 전문 지식과 실제 입시 경험을 가지며, 학생 개개인의 잠재력을 최대한 이끌어내는 데 전문적인 능력을 보유하고 있습니다.',
  '단순히 지식을 전달하는 것을 넘어, 학생들에게 영감을 주고 동기를 부여하여, 그들이 자신의 목표를 달성할 수 있도록 지원합니다.',
  '학생들의 학습 스타일과 필요에 맞춰 개별적으로 접근하여, 학생들이 최상의 학업 성과를 거둘 수 있도록 돕습니다.',
];
const currentPage = 1;
// const tabItems = ['국어 이상수 T', '수학 김재하 T'];
// const tabItems = ['수학 김재하 T'];

const Instructors = () => {
  // const [tab, setTab] = useState(1);
  return (
    <PageLayout currentPage={currentPage} background={false}>
      <LeftContentBox title={title} text={text} />
      {/* <LeftTxetColumnContent title={title} text={text} columnText={columnText} /> */}
      <RightContentBox>
        {/* <TabContainer tabItems={tabItems} tab={tab} setTab={setTab} /> */}
        <RightTabContent currentPage={currentPage} />
      </RightContentBox>
    </PageLayout>
  );
};

export default Instructors;
