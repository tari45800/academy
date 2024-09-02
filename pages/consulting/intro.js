import React from 'react';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import TextContainer from '@/components/FormLayout/TextContainer';
import styled from 'styled-components';
import Button from '@/components/Button';
import theme from '@/components/theme';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import { consultingForm } from '@/components/formobjects/consultingForm';

const title = '입시 컨설팅';
const text =
  '대치 투에스에듀의 입시컨설팅은 대한민국 최고의 교육 전문가들이 학생들의 입시 여정을 가이드하며 학생들이 자신의 꿈을 현실로 만들 수 있도록 전문적인 지원을 아끼지 않습니다.<br>전략적으로 대비하여 목표하는 대학과 학과에 진학하세요.';

const currentPage = 3;
const formClass = 'intro';
const contents = [
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '심층적 분석 \n및 학습 가이드',
    content:
      '학생의 현재 위치, 학습 스타일, 강점과 약점, 개별 요구 사항 등을 면밀히 분석하여 중·장기 학습 목표와 학습 로드맵을 설정합니다.',
  },
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '맞춤형 입시 \n전략 개발',
    content:
      '학생의 성적, 성향, 진로 목표 등을 고려한 맞춤형 입시 전략을 수립하고 정기적인 컨설팅을 통해 올바른 방향성을 나아갈 수 있도록 합니다.',
  },
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '학부모와의 \n긴밀한 소통',
    content:
      '학부모님과 주기적으로 소통하여 학생의 현재 위치를 정확하게 파악할 수 있도록 보조하고 입시 준비 과정에서의 의사결정을 지원합니다. ',
  },
  {
    // imageSrc: '/images/ssedu_example.jpeg',
    leftTitle: '지속적인\n모니터링 및 피드백',
    content: '학생의 진행 상황을 지속적으로 모니터링하고, 필요에 따라 전략을 조정하며 정기적인 피드백을 제공합니다.',
  },
];

const intro = () => {
  return (
    <Container>
      <PageLayout currentPage={currentPage}>
        <LeftContentBox title={title} text={text} button_text="신청하기" form={consultingForm} />
        <RightContentBox>
          {/* <h1 className="h1Title">입시 컨설팅 내용</h1> */}
          <TextContainer contents={contents} currentPage={currentPage} formClass={formClass} />
          {/* <div className="button_box">
            <Button form={consultingForm}>접수하기</Button>
          </div> */}
        </RightContentBox>
      </PageLayout>
    </Container>
  );
};

const Container = styled.div`
  .h1Title {
    color: #0b0b0b;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 30px;
    font-style: normal;
    font-weight: 600;
    line-height: 56px;
    margin-bottom: 20px;
  }

  .button_box {
    height: 150px;
    display: flex;
    justify-content: center;
    align-items: end;
    @media ${theme.device.mobile} {
      height: 100px;
    }
  }

  .intro {
    gap: 20px;
  }
`;

export default intro;
