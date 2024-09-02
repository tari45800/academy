import React, { useEffect } from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';

const MyPageList = ({ dbData = [], dbUserData = [], phone }) => {
  useEffect(() => {
    if (dbData) {
      return;
    }
    setApply(dbData[0]?.data());
  }, [dbData]);

  // 접수 내역이 있으면 접수내역(dbData)에서 유저 정보를 가져오고,
  // 접수내역이 없다면 사용자db(dbUserData)에서 가져오기
  const InfoContent = (
    <div className="mypage_box">
      <div className="mypage_row">
        <div className="mypage_row_title">이름</div>
        <div className="mypage_row_content">
          {(dbData !== '없다' && dbData[0]?.data().displayName) || (dbUserData && dbUserData[0]?.data().displayName)}
        </div>
      </div>
      <div className="mypage_border"></div>
      <div className="mypage_row">
        <div className="mypage_row_title">휴대폰 번호</div>
        <div className="mypage_row_content">
          {(dbData !== '없다' && dbData[0]?.data().phoneNumber) || (dbUserData && dbUserData[0]?.data().phoneNumber)}
        </div>
      </div>
      <div className="mypage_border"></div>
      <div className="mypage_row">
        <div className="mypage_row_title">이메일</div>
        <div className="mypage_row_content">
          {(dbData !== '없다' && dbData[0]?.data().email) || (dbUserData && dbUserData[0]?.data().email)}
        </div>
      </div>
      <div className="mypage_border"></div>
    </div>
  );

  const ApplyContent = (
    <>
      <div className="mypage_box">
        <div className="mypage_row">
          <div className="mypage_row_title">프로그램</div>

          {
            //접수내역(dbData)가 있는지 없는지 여부 확인
            dbData !== '없다' ? (
              <div className="mypage_row_content">
                {dbData.map((el, idx) => {
                  const createDate = new Date(el.data().createAt.seconds * 1000 + el.data().createAt.nanoseconds / 1e6);
                  const dateFormatOptions = { year: 'numeric', month: 'numeric', day: 'numeric' };
                  const formattedDate = createDate.toLocaleString('en-US', dateFormatOptions);
                  return (
                    el.data().phoneNumber === phone && (
                      <ApplyContanier key={idx}>
                        <div className="apply_box">
                          <h3>{el.data().kategorie || el.data().id}</h3>
                          <p>접수일 ({formattedDate.toLocaleString()})</p>
                        </div>
                      </ApplyContanier>
                    )
                  );
                })}
              </div>
            ) : (
              <div className="mypage_row_content">
                <ApplyContanier>
                  <div className="apply_box">
                    <h3 className="null">신청내역이 없습니다.</h3>
                  </div>
                </ApplyContanier>
              </div>
            )
          }
        </div>
        <div className="mypage_border"></div>
      </div>
    </>
  );

  return (
    <Container>
      <h1>신청 내역</h1>
      <div className="container">
        <InfoList>
          {InfoContent}
          {/* {
            접수내역(dbData)가 있는지 없는지 여부 확인
            dbData !== '없다' ? <>{ApplyContent}</> : <div className="null">프로그램 신청내역이 없습니다.</div>
          } */}

          {ApplyContent}
        </InfoList>
      </div>

      <div className="guide_text">
        <p>신청 관련 문의는 채널톡을 이용해주시면 보다 빠른 답변을 받아보실 수 있습니다.</p>
        <p>온라인 원서 접수 시 입학 담당자가 확인 후 개별 연락을 드리고 있습니다.</p>
        <p> 최종 입학 안내는 접수 후 1~2일 이내 확인하실 수 있습니다.</p>
      </div>
    </Container>
  );
};
const Container = styled.div`
  max-width: 700px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 90px 0;
  h1 {
    font-size: 28px;
    font-weight: 600;
    color: #0b0b0b;
    padding-top: 2rem;
  }
  .container {
    display: flex;
    width: 43.75rem;
    padding: 1.25rem 0rem;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.625rem;
  }

  .guide_text {
    p {
      color: #646667;
      font-size: 0.85rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.40625rem;
    }

    @media ${theme.device.mobile} {
      p {
        font-size: 0.65rem;
        font-weight: 400;
        line-height: 1rem;
      }
    }
  }

  @media ${theme.device.mobile} {
    max-width: 500px;
    padding: 20px 20px 80px;
    width: 100%;
    h1 {
      font-size: 1.125rem;
      font-weight: 600;
      margin-bottom: 1rem;
      padding-top: 1rem;
    }
    .container {
      width: 100%;
      padding: 0;
    }
  }
`;

const InfoList = styled.div`
  width: 100%;
  align-items: flex-start;
  gap: 1.25rem;
  .mypage_box {
    /* width: 100%; */
  }
  .mypage_row {
    display: flex;
    align-items: center;
    /* width: 100%; */
  }
  .mypage_row_title {
    width: 12.5rem;
    height: 1.625rem;
    flex-shrink: 0;
    color: #646667;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
  }
  .mypage_row_content {
    color: #0b0b0b;
    font-feature-settings: 'clig' off, 'liga' off;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.6875rem;
    width: 100%;
  }
  .mypage_border {
    border-bottom: 1px solid #cdcdcd;
    margin: 10px 0;
  }
  @media ${theme.device.mobile} {
    .mypage_row_title {
      width: 4.5rem;
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0.68px;
      display: flex;
      align-items: center;
    }
    .mypage_row_content {
      font-size: 12px;
      font-weight: 500;
      line-height: 16px;
      letter-spacing: 0.68px;
      /* display: flex;
      align-items: center; */
    }
    .mypage_border {
      margin: 5px 0;
    }
  }
`;

const ApplyContanier = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  &:not(:last-child) {
    border-bottom: 1px solid #cdcdcd;
  }
  .apply_box {
    min-width: 200px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    h3 {
      color: #0b0b0b;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 2.4rem;
    }
    p {
      color: #646667;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 0.75rem;
      font-style: normal;
      font-weight: 400;
      padding-left: 2rem;
    }
    .null {
      /* width: 100%;
    text-align: center; */
      color: #701e1e;
      /* font-size: 1rem;
    font-weight: 400;
    line-height: 60px; */
      /* @media ${theme.device.mobile} {
      font-size: 0.8rem;
      font-weight: 400;
    } */
    }
  }

  @media ${theme.device.mobile} {
    width: 100%;
    .apply_box {
      min-width: 100px;
      h3 {
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 2.4rem;
      }
      p {
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        padding-left: 0.8rem;
      }
    }
  }
`;

export default MyPageList;
