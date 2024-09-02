import React from 'react';
import styled from 'styled-components';
import theme from '@/components/theme';
import { useRouter } from 'next/router';
import Button from '../Button';
// import { winterSchoolForm } from '../formobjects/winterSchoolForm';

const LeftContentBox = ({ title, text, button_text, form, url, link }) => {
  const splitTitle = title.split('<br>');
  const splitText = text && text.split('<br>');

  const leftButton =
    button_text && link ? (
      <div className="row">
        <CtaBtn>
          <Button url={link} add="season">
            더 알아보기
          </Button>
        </CtaBtn>
        <CtaBtn>
          <Button form={form} url={url}>
            {button_text}
          </Button>
        </CtaBtn>
      </div>
    ) : (
      <CtaBtn>
        <Button form={form} url={url}>
          {button_text}
        </Button>
      </CtaBtn>
    );

  return (
    <Container>
      <TextWrap>
        <div className="title">
          {splitTitle.map((title, idx) => {
            return <h1 key={idx}>{title}</h1>;
          })}
        </div>
        <div className="text_box">
          {splitText &&
            splitText.map((text, idx) => {
              return <p key={idx}>{text}</p>;
            })}
        </div>
      </TextWrap>

      {button_text && leftButton}
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
    padding-right: 0px;
    width: 40%;
  }
  @media ${theme.device.mobile} {
    margin: 20px 0 0;
    width: 100%;
    padding: 0;
  }
  .row {
    width: 100%;
    display: flex;

    @media ${theme.device.mobile} {
      gap: 20px;
    }
    @media ${theme.device.mobileL} {
      gap: 10px;
      /* flex-direction: column; */
    }

    .button {
      width: 12rem;
      margin-right: 20px;
      @media ${theme.device.tabletL} {
        width: 10rem;
      }
      @media ${theme.device.tablet} {
        width: 8rem;
      }
      @media ${theme.device.mobile} {
        border-radius: 10px;
        width: 100%;
      }
      @media ${theme.device.mobileL} {
        font-size: 14px;
      }
    }
  }

  .button {
    width: 12rem;
    margin-right: 10px;
    @media ${theme.device.tabletL} {
      width: 10rem;
    }
    @media ${theme.device.tablet} {
      width: 8rem;
    }
    @media ${theme.device.mobile} {
      border-radius: 10px;
      width: 12rem;
    }
    @media ${theme.device.mobileL} {
      font-size: 14px;
    }
  }
`;

const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  /* width: 90%; */
  /* font-size: 1.2rem; */
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
        font-style: normal;
        font-weight: 600;
        line-height: 2rem;
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
      white-space: pre-wrap;
      @media ${theme.device.tabletL} {
        color: #0b0b0b;
        font-feature-settings: 'clig' off, 'liga' off;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: 160%; /* 25.6px */
        letter-spacing: -0.5px;
      }
      @media ${theme.device.tablet} {
      }
      @media ${theme.device.tabletS} {
      }
      @media ${theme.device.mobile} {
        font-size: 0.875rem;
        font-weight: 400;
        line-height: 1.2rem;
        letter-spacing: 0em;
        text-align: left;
        margin-bottom: 14px;
        max-width: 100%;
      }
    }
  }
`;

const CtaBtn = styled.div`
  margin-top: 50px;
  @media ${theme.device.mobile} {
    width: 100%;

    margin-top: 20px;
  }
`;
export default LeftContentBox;
