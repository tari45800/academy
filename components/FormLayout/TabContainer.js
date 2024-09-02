import React from 'react';
import styled from 'styled-components';
import theme from '../theme';

const TabContainer = ({ tabItems, tab, setTab }) => {
  return (
    <Container>
      <TabBox>
        <p
          className={`${tab == 1 && 'pick'}`}
          onClick={() => {
            setTab(1);
          }}
        >
          {tabItems[0]}
        </p>

        <p
          className={`${tab == 2 && 'pick'}`}
          onClick={() => {
            setTab(2);
          }}
        >
          {/* 시즌제 탭의 윈터스쿨에 N이 들어가는 경우를 위한 조건 */}
          {/* {tabItems[1].includes('N') ? (
            <>
              <span className="now">N</span>
              {tabItems[1].split('N').map((text, i) => {
                return <span key={i}>{text}</span>;
              })}
            </>
          ) : (
            <>{tabItems[1]}</>
          )} */}
          {tabItems[1]}
          <span className="now">{tabItems[2]}</span>
        </p>
      </TabBox>
    </Container>
  );
};

const Container = styled.div`
  padding-left: 10px;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 49.375rem;
  padding-bottom: 1rem;
  @media ${theme.device.mobile} {
    padding: 0;
    max-width: 100%;
  }
`;
const TabBox = styled.div`
  display: flex;
  justify-content: center;
  max-width: 49.375rem;
  height: 3.75rem;
  flex-shrink: 0;
  width: 100%;
  p {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #969696;
    text-align: center;
    font-family: Pretendard;
    font-size: 1.2rem;
    font-style: normal;
    font-weight: 600;
    line-height: 1.75rem;
    border: 1px solid #e8eaf0;
    background: #f9f8f6;
    border-bottom: 1px solid #0b0b0b;
    cursor: pointer;
  }
  .pick {
    border: 1px solid #0b0b0b;
    border-bottom: none;
    color: #0b0b0b;
    background: none;
    .now {
      color: #701e1e;
    }
  }
  .now {
    color: rgba(112, 30, 30, 0.5);
    text-align: center;
    font-style: normal;
    font-weight: 900;
    margin-left: 5px;
  }
  @media ${theme.device.tabletL} {
    p {
      color: #969696;
      text-align: center;
      font-size: 18px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
    }
  }
  @media ${theme.device.mobile} {
    height: 28px;
    max-width: 100%;
    p {
      font-size: 12px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
`;
export default TabContainer;
