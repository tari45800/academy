import React from 'react';
import styled from 'styled-components';
import PageLayout from '@/components/DetailLayout/PageLayout';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import RightImageTextContent from '@/components/DetailLayout/RightImageTextContent';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import RightTabContent from '@/components/DetailLayout/RightTabContent';
import Header from '../TSpages/Header';
import theme from '@/components/theme';

// const title = '입시실적';
// const text_1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing .';
const title = '입시실적';
const text_1 =
  '대치 투에스에듀에서는 "상위권 학생은 만들어진다"는 신념을 가지고 있습니다.<br>상·중·하위권 성적대별 편견 없이 각각의 잠재력을 최대한 발휘할 수 있도록 지원하여 성공으로 이끌어내는 데 전념합니다.<br>대치 투에스에듀의 입시 실적은 이러한 포괄적인 교육 철학의 결과물이며 단순한 숫자를 넘어 학생 개개인의 끊임없는 노력이 만들어낸 결실입니다.';

const currentPage = 1;
const contents = [
  { id: 1, school: '의치한', count: 7 },
  { id: 2, school: '서울대', count: 17 },
  { id: 3, school: '연세대', count: 26 },
  { id: 4, school: '고려대', count: 26 },
  { id: 5, school: '한양대', count: 16 },
  { id: 6, school: '성균관대', count: 14 },
  { id: 7, school: '이화여대', count: 10 },
];

const Performance = () => {
  return (
    <PageLayout currentPage={currentPage}>
      <LeftContentBox title={title} text={text_1} />
      <RightContentBox>
        <TitleWrap>
          <div className="title_box">
            {contents.map((content) => {
              if (content.id <= 4) {
                return (
                  <div className="sorry" key={content.id}>
                    <div className="title">
                      <div className="school">{content.school}</div>
                      <div className="count">
                        <div>{content.count}</div>
                        <p>명</p>
                      </div>
                    </div>
                    <div className="line"></div>
                  </div>
                );
              }
            })}
          </div>
          <div className="sub_text">
            이 외 <b>카이스트(2명)</b>, <b>포항공대(1명)</b>, <b>성균관대(14명)</b>, <b>한양대(16명)</b>,
            <b>이화여대(10명)</b> 등 다수의 학생이 성적 향상을 이루어 주요 대학교 진학에 성공하였습니다.
          </div>
        </TitleWrap>
        <RightTabContent contents={contents} currentPage={currentPage} />
      </RightContentBox>
    </PageLayout>
  );
};

const TitleWrap = styled.div`
  .sorry {
  }

  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 10px;
  padding-left: 1rem;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 29.98px;
  margin-top: 66px;
  padding: 0 40px;
  .title_box {
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    text-align: center;
  }
  .title {
    display: flex;
    width: 90px;
    gap: 10px;
    flex-direction: column;
    align-items: center;
    flex-shrink: 0;
  }
  .line {
    width: 1px;
    height: 60px;
    flex-shrink: 0;
    background-color: #000;
  }
  .line:last-child {
    display: none;
  }
  .school {
    color: #545454;
    text-align: center;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 26px;
    font-style: normal;
    font-weight: 600;
    line-height: 30px;
  }
  .count {
    display: flex;
    justify-content: center;
    align-items: end;
    div {
      color: #545454;
      text-align: center;
      font-size: 46px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
    p {
      color: #545454;
      font-size: 28px;
      font-style: normal;
      font-weight: 500;
    }
  }
  .sub_text {
    /* display: flex; */
    /* justify-content: center; */
    /* align-items: center; */
    text-align: center;
    padding-bottom: 20px;
    color: #545454;
  }
  @media ${theme.device.tabletL} {
    padding: 0 20px;
  }
  @media ${theme.device.tablet} {
    padding: 0rem;
    margin-bottom: 20px;
    .title {
      width: 80px;
      gap: 10px;
    }
    .line {
      height: 50px;
    }
    .school {
      font-size: 24px;
      line-height: 26px;
    }
    .count {
      div {
        font-size: 40px;
        font-weight: 500;
      }
      p {
        font-size: 24px;
      }
    }
  }
  @media ${theme.device.mobile} {
    padding-left: 0rem;
    max-width: 400px;
    margin-top: 0px;
    .title {
      width: 40px;
      gap: 2px;
    }
    .small {
      width: 80px;
    }
    .line {
      height: 40px;
    }
    .school {
      font-size: 14px;
      line-height: 22px;
    }
    .small_school {
      font-size: 12px;
    }
    .count {
      div {
        font-size: 22px;
        font-weight: 500;
      }
      p {
        font-size: 14px;
      }
    }
    .sub_text {
      font-size: 0.875rem;
    }
  }
`;

const Ready = styled.p`
  width: 50%;
  display: flex;
  justify-content: center;
  color: #701e1e;
  @media ${theme.device.tablet} {
    width: 60%;
  }
  @media ${theme.device.mobile} {
    width: 100%;
    padding-left: 0rem;
    font-size: 0.625rem;
    padding-top: 20px;
  }
`;

export default Performance;
