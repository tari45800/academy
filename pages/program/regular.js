import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import { SATForm } from '@/components/formobjects/SATForm';

const title = '수능 단과반';
const text_1 =
  '대치 투에스에듀의 수능 단과반은 정시를 통한 명문대 진학을 목표로 하는 학생들에게 최적화되어 있습니다.<br>수능 국어와 수능 수학 커리큘럼은 학생들이 수능의 핵심 요소를 이해하고 실전 같은 환경에서 대비할 수 있도록 설계하였습니다.';
const currentPage = 2;
const contents = [
  // {
  //   imageSrc: '/images/kimjaeha_small.png',
  //   imgText: '',
  //   program: '국어\n정규반',
  //   time: '월 08:30~12:00',
  //   date: '01/01(월)',
  // },
  {
    imageSrc: '/images/kimjaeha_small.png',
    imgText: '',
    program: '실통수\n수I',
    time: '금 18:00~22:00',
    // date: '01/05(금)',
  },
  {
    imageSrc: '/images/kimjaeha_small.png',
    imgText: '',
    program: '실통수\n수II',
    time: '토 14:00~18:00',
    // date: '12/30(토)',
  },
  {
    imageSrc: '/images/kimjaeha_small.png',
    imgText: '',
    program: '실통수\n미적분',
    time: '수 18:00~22:00',
    // date: '01/03(수)',
  },
  // {
  //   imageSrc: '/images/kimjaeha_small.png',
  //   imgText: '',
  //   program: '실통수\n확률과 통계',
  //   time: '토 19:00~22:00',
  //   date: '12/30(토)',
  // },
];

const Regular = () => {
  return (
    <PageLayout currentPage={currentPage} background={false}>
      <LeftContentBox title={title} text={text_1} button_text="접수하기" form={SATForm} />
      <RightContentBox>
        <RightTabContent currentPage={currentPage} contents={contents} />
      </RightContentBox>
    </PageLayout>
  );
};

export default Regular;
