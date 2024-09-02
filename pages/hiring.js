import React, { useState } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import LeftContentBox from '@/components/DetailLayout/LeftContent';
import PageLayout from '@/components/DetailLayout/PageLayout';
import RightContentBox from '@/components/DetailLayout/RightContentBox';
import TabContainer from '@/components/FormLayout/TabContainer';
import Header from './TSpages/Header';

const title = '인재채용';
const text_1 = '대치 투에스에듀는 학생들의 성공 DNA를 깨워줄 수 있는 최고의 강사를 모집하고 육성합니다.';

const tabItems = ['강사채용', '조교채용'];

const Hiring = () => {
  const [tab, setTab] = useState(1);
  return (
    <PageLayout>
      <LeftContentBox
        title={title}
        text={text_1}
        button_text="양식 다운로드"
        form="hiring"
        url="/files/sseduTchrApply.xlsx"
      />
      <Header></Header>
      <RightContentBox>
        <TabContainer tabItems={tabItems} tab={tab} setTab={setTab} />
        {tab == 1 && (
          <TableBox>
            <table>
              <thead>
                <tr>
                  <th rowSpan="2" className="title">
                    지원분야
                  </th>
                </tr>
                <tr>
                  <td className="subject left_line">국어, 수학</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="title top_line">진행절차</th>
                  <td className="step top_line left_line">
                    <StepContainer>
                      <div className="step_box">
                        <div className="step_left">지원서 접수</div>
                        <div className="step_right">
                          <p>지원서 양식 작성 후 이메일로 제출</p>
                        </div>
                      </div>
                      <div className="down">▼</div>
                      <div className="step_box">
                        <div className="step_left">서류심사</div>
                        <div className="step_right">
                          <p>제출된 지원서 검토 후 개별 연락</p>
                        </div>
                      </div>
                      <div className="down">▼</div>
                      <div className="step_box">
                        <div className="step_left">면접</div>
                        <div className="step_right">
                          <p>1차 서류 합격자에 한하여 인터뷰 및 시범 강의 진행</p>
                        </div>
                      </div>
                      <div className="down">▼</div>
                      <div className="step_box">
                        <div className="step_left">합격 통지</div>
                        <div className="step_right">
                          <p>최종 합격통지, 추후 일정 안내</p>
                        </div>
                      </div>
                    </StepContainer>
                  </td>
                </tr>
                <tr>
                  <th className="title top_line bottom_line">지원방법</th>
                  <td colSpan="2" className="step top_line left_line how bottom_line">
                    지원서 양식 다운받아 작성 후 메일 발송 <br />
                    발송 메일 제목: [지원분야] 이름_과목 <i>(예: [강사지원] 김에듀_국어)</i>
                    <br />
                    지원 전용 메일 주소: hr@sseduacademy.com
                  </td>
                </tr>
              </tbody>
            </table>
          </TableBox>
        )}
        {tab == 2 && (
          <TableBox>
            <table>
              <thead>
                <tr>
                  <th rowSpan="2" className="title">
                    지원분야
                  </th>
                </tr>
                <tr>
                  <td className="subject left_line">국어, 수학</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th className="title top_line">진행절차</th>
                  <td className="step top_line left_line">
                    <StepContainer>
                      <div className="step_box">
                        <div className="step_left">지원서 접수</div>
                        <div className="step_right">
                          <p>지원서 양식 작성 후 이메일로 제출</p>
                        </div>
                      </div>
                      <div className="down">▼</div>
                      <div className="step_box">
                        <div className="step_left">서류심사</div>
                        <div className="step_right">
                          <p>제출된 지원서 검토 후 개별 연락</p>
                        </div>
                      </div>
                      <div className="down">▼</div>
                      <div className="step_box">
                        <div className="step_left">면접</div>
                        <div className="step_right">
                          <p>1차 서류 합격자에 한하여 면접 진행</p>
                        </div>
                      </div>
                      <div className="down">▼</div>
                      <div className="step_box">
                        <div className="step_left">합격 통지</div>
                        <div className="step_right">
                          <p>최종 합격통지, 추후 일정 안내</p>
                        </div>
                      </div>
                    </StepContainer>
                  </td>
                </tr>
                <tr>
                  <th className="title top_line bottom_line">지원방법</th>
                  <td colSpan="2" className="step top_line left_line how bottom_line">
                    지원서 양식 다운받아 작성 후 메일 발송 <br />
                    발송 메일 제목: [지원분야] 이름_과목 <i>(예: [조교지원] 김에스_수학)</i> <br />
                    지원 전용 메일 주소: hr@sseduacademy.com
                  </td>
                </tr>
              </tbody>
            </table>
          </TableBox>
        )}
      </RightContentBox>
    </PageLayout>
  );
};

const TableBox = styled.div`
  padding-left: 1rem;
  width: 100%;
  table {
    width: 100%;
    border-top: 3px solid #701e1e;
    border-spacing: 0px;
  }
  .title {
    width: 25%;
    /* height: 131px; */
    height: 100px;
    padding: 13px 15px;
    align-items: center;
    color: #000;
    font-family: Pretendard;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px; /* 162.5% */
    /* letter-spacing: 0.68px; */
  }
  .top_line {
    border-top: 1.5px solid #bcbcbc;
  }
  .bottom_line {
    border-bottom: 1.5px solid #bcbcbc;
  }
  .left_line {
    border-left: 1.5px solid #bcbcbc;
  }
  .subject {
    width: 45%;
  }
  td {
    width: 30%;
    padding: 13px 15px;
    gap: 10px;
    flex-shrink: 0;
    text-align: center;
    color: #000;
    text-align: center;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px; /* 185.714% */
    /* letter-spacing: 0.68px; */
  }
  .step {
    width: 75%;
    padding: 40px 30px;
  }
  .how {
    text-align: start;
  }
  @media ${theme.device.tabletL} {
    .step {
      padding: 10px 10px;
    }
  }
  @media ${theme.device.mobile} {
    padding-left: 0rem;
    .title {
      height: 60px;
      padding: 10px 10px;
      font-size: 14px;
      font-weight: 600;
      line-height: 20px;
    }
    td {
      padding: 10px 10px;
      font-size: 12px;
      line-height: 20px;
    }
    .step {
      padding: 10px 10px;
    }
    .how {
      text-align: center;
    }
  }
`;

const StepContainer = styled.div`
  .step_box {
    display: flex;
    align-items: center;
    gap: 15px;
  }
  .step_left {
    background: #701e1e;
    display: flex;
    width: 100px;
    padding: 5px 15px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    color: #fff;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 700;
    line-height: 26px;
  }
  .step_right {
    color: #000;
    font-family: Pretendard;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 26px;
    text-align: center;
    white-space: nowrap;
  }
  .down {
    font-size: 12px;
    display: flex;
    width: 100px;
    justify-content: center;
    align-items: center;
    color: #701e1e;
  }
  @media ${theme.device.tabletL} {
    .step_left {
      padding: 5px 5px;
    }
  }
  @media ${theme.device.mobile} {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0px;
    .step_box {
      flex-direction: column;
      gap: 8px;
    }
    .step_left {
      width: 80px;
      padding: 5px 2px;
      gap: 10px;
      font-size: 12px;
      line-height: 18px;
    }
    .step_right {
      font-size: 12px;
      line-height: 18px;
    }
    .down {
      font-size: 8px;
    }
  }
`;

export default Hiring;
