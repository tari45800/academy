import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';

const LeftColumnContent = ({ title, columnText }) => {
  const splitTitle = title.split('<br>');
  return (
    <Container>
      <TextWrap>
        <div className="title">
          {splitTitle.map((title, idx) => {
            return <h1 key={idx}>{title}</h1>;
          })}
        </div>
      </TextWrap>
      <ColumnWrap>
        {columnText.map((columnText, idx) => {
          return (
            <div className="column_box" key={idx}>
              <p>{idx + 1}.</p>
              <div className="row">
                {columnText.split('<br>').map((text, i) => {
                  return <p key={i}>{text}</p>;
                })}
              </div>
            </div>
          );
        })}
      </ColumnWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 50%;
  padding-right: 3rem;
  @media ${theme.device.tabletL} {
    padding-right: 1rem;
  }
  @media ${theme.device.tablet} {
    width: 40%;
  }
  @media ${theme.device.mobile} {
    margin: 20px 0;
    width: 100%;
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 90%; */
  font-size: 1.5rem;
  word-break: keep-all;

  @media ${theme.device.mobile} {
    width: 100%;
  }
  .title {
    h1 {
      color: #0b0b0b;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 2.5rem;
      font-style: normal;
      font-weight: 700;
      line-height: 5.5rem;
      /* @media ${theme.device.tabletXL} {
        font-size: 3.6rem;
      }
      @media ${theme.device.tabletL} {
        font-size: 3rem;
      }
      @media ${theme.device.tablet} {
        font-size: 2.4rem;
        line-height: 4rem;
      }
      @media ${theme.device.tabletS} {
        font-size: 2.2rem;
        line-height: 3.6rem;
      } */
      @media ${theme.device.mobile} {
        font-size: 1.6rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: left;
      }
    }
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  width: 31.375rem;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem;
  margin-top: 0.94rem;
  .column_box {
    display: flex;
    max-width: 31.375rem;
    padding: 1.125rem 1.6875rem;
    align-items: flex-start;
    gap: 0.625rem;
    background: rgba(255, 255, 255, 0.28);
    flex-shrink: 0;
    p {
      color: #333;
      font-feature-settings: 'liga' off;
      font-size: 1.125rem;
      font-style: normal;
      font-weight: 400;
      line-height: 140%;
    }
    .row {
      display: flex;
      flex-direction: column;
    }
  }
`;

export default LeftColumnContent;
