import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import { useRouter } from 'next/router';

const LeftTxetColumnContent = ({ title, text, columnText }) => {
  const splitTitle = title.split('<br>');
  const splitText = text.split('<br>');
  return (
    <Container>
      <TextWrap>
        <div className="title">
          {splitTitle.map((title, idx) => {
            return <h1 key={idx}>{title}</h1>;
          })}
        </div>
        <div className="text_box">
          {splitText.map((text, idx) => {
            return <p key={idx}>{text}</p>;
          })}
        </div>
      </TextWrap>
      <ColumnWrap>
        {columnText.map((columnText, idx) => {
          return (
            <div className="column_box" key={idx}>
              <p>{idx + 1}.</p>
              <p>{columnText}</p>
            </div>
          );
        })}
      </ColumnWrap>
    </Container>
  );
};

const Container = styled.div`
  width: 45%;

  padding-right: 3rem;
  @media ${theme.device.tabletL} {
    padding-right: 40px;
  }
  @media ${theme.device.tablet} {
    padding-right: 0;
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
  font-size: 1.5rem;
  word-break: keep-all;

  @media ${theme.device.mobile} {
    width: 100%;
  }
  .title {
    h1 {
      color: #0b0b0b;
      font-feature-settings: 'clig' off, 'liga' off;
      font-size: 2.35rem;
      font-style: normal;
      font-weight: 700;
      padding-bottom: 1rem;
      @media ${theme.device.mobile} {
        font-size: 1.125rem;
        font-weight: 600;
        line-height: 2rem;
        text-align: left;
      }
    }
  }
  .text_box {
    width: 100%;
    p {
      color: #0b0b0b;
      font-size: 1.2rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.68rem;
      margin-bottom: 20px;
      max-width: 31.375rem;
      @media ${theme.device.mobile} {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.2rem;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 0px;
      }
    }
  }
`;

const ColumnWrap = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: flex-start;
  gap: 1.5625rem;
  margin-top: 3rem;
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
  }
  @media ${theme.device.mobile} {
    margin-top: 0rem;
    gap: 0px;
    /* gap: 10px; */
    .column_box {
      /* padding: 0; */
      padding: 1.125rem 0rem 0rem;
      p {
        /* font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.2rem;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 14px; */
        color: #0b0b0b;
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: 22px;
      }
    }
    /* .column_box {
      border-radius: 8px;
      background: #efefef;
      display: flex;
      padding: 10px 20px;
      align-items: flex-start;
      p {
        color: #0b0b0b;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 170%;
      }
    } */
  }
`;

export default LeftTxetColumnContent;
