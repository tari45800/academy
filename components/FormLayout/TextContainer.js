import React from 'react';
import Header from '@/pages/TSpages/Header';
import styled from 'styled-components';
import Image from 'next/image';
import theme from '../theme';
import Link from 'next/link';

const TextContainer = ({ contents, formClass, currentPage, border }) => {
  const createTextContainer = (item, idx) => {
    return (
      <div className="sorry" key={idx}>
        <div className="total_box" key={idx}>
          {item.imageSrc && (
            <div className="img_box">
              <Image
                src={item.imageSrc}
                alt={item.imageSrc}
                style={{ width: '100%', height: '100%' }}
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>
          )}
          {item.leftTitle && (
            <div className="left_box">
              <h2>{item.leftTitle}</h2>
              <div>{item.leftContent && item.leftContent}</div>
            </div>
          )}

          <div className="text_box">
            {item.title && <h2>{item.title}</h2>}
            {item.content && <div className="content">{item.content}</div>}
            <div>
              {item.contents &&
                item.contents.map((el, i) => (
                  <div className="contents_box" key={i}>
                    <div className="mark">{item.mark}</div>
                    <div>{el}</div>
                  </div>
                ))}
            </div>
          </div>

          {item.arrowImg && (
            <div className="arrow">
              <Image
                src={item.arrowImg}
                alt={item.imageSrc}
                style={{ width: '100%', height: '100%' }}
                sizes="100vw"
                width={0}
                height={0}
              />
            </div>
          )}
        </div>
        {border && <div className="border"></div>}
      </div>
    );
  };

  return (
    <>
      <Header currentPage={currentPage}></Header>
      <Container className={`${formClass}`}>
        {contents.map((item, idx) => {
          return !item.link ? (
            createTextContainer(item, idx)
          ) : (
            <Link className="link" href={item.link} target="_blank" key={idx}>
              {createTextContainer(item, idx)}
            </Link>
          );
        })}
      </Container>
    </>
  );
};

const Container = styled.div`
  .sorry {
    width: 100%;
  }

  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 20px;
  white-space: pre-wrap;
  padding-left: 10px;

  @media ${theme.device.mobile} {
    padding: 0;
  }

  .total_box {
    width: 100%;
    display: flex;
    gap: 10px;
    @media ${theme.device.tabletL} {
      flex-direction: column;
      border-radius: 9px;
      background: rgba(255, 255, 255, 0.5);
      padding: 10px 20px;
    }

    @media ${theme.device.mobile} {
      border-radius: 8px;
      background: #efefef;
      gap: 0;
    }
  }

  .img_box {
    min-width: 150px;
    max-width: 150px;
    min-height: 150px;
    max-height: 150px;

    @media ${theme.device.tabletL} {
      min-width: 120px;
      max-width: 120px;
      min-height: 120px;
      max-height: 120px;
    }
  }

  .left_box,
  .text_box {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 130px;
    align-items: center;
    border-radius: 9px;
    background: rgba(255, 255, 255, 0.5);

    @media ${theme.device.tabletL} {
      height: fit-content;
      justify-content: start;
      border-radius: 0;
      background: none;
    }
  }

  .left_box {
    min-width: fit-content;
    min-width: 215px;
    @media ${theme.device.tabletL} {
      white-space: normal;
    }

    h2 {
      color: #0b0b0b;
      text-align: center;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Pretendard;
      font-size: 18px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;

      @media ${theme.device.tabletL} {
        color: #333;
        text-align: center;
        font-feature-settings: 'liga' off;
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      @media ${theme.device.mobile} {
        color: #0b0b0b;
        font-feature-settings: 'liga' off;
        font-family: Pretendard;
        font-size: 12px;
        font-style: normal;
        font-weight: 700;
        line-height: 170%; /* 17px */
      }
    }
  }

  .text_box {
    display: flex;
    flex-direction: column;
    align-items: start;
    width: 100%;
    color: #0b0b0b;
    font-style: normal;
    padding: 0 25px;

    @media ${theme.device.tabletL} {
      padding: 0;
    }

    h2 {
      margin-bottom: 15px;
      font-size: 24px;
      font-weight: 500;
      line-height: 41.5px; /* 172.917% */

      @media ${theme.device.tabletL} {
        color: #333;
        text-align: center;
        font-feature-settings: 'liga' off;
        font-family: Pretendard;
        font-size: 18px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      @media ${theme.device.mobile} {
        color: #0b0b0b;
        font-feature-settings: 'liga' off;
        font-family: Pretendard;
        font-size: 10px;
        font-style: normal;
        font-weight: 700;
        line-height: 170%; /* 17px */
      }
    }

    div {
      color: #0b0b0b;
      font-feature-settings: 'clig' off, 'liga' off;
      font-family: Pretendard;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 160%; /* 25.6px */

      @media ${theme.device.tabletL} {
        color: rgba(51, 51, 51, 0.8);
        font-feature-settings: 'liga' off;
        font-family: Inter;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 180%;
      }

      @media ${theme.device.mobile} {
        color: #0b0b0b;
        font-feature-settings: 'liga' off;
        font-family: Pretendard;
        font-size: 10px;
        font-style: normal;
        font-weight: 400;
        line-height: 170%;
      }
    }

    .mark_box {
      display: flex;
    }
  }

  .border {
    border-bottom: 1px solid black;
    width: 100%;
  }

  .border:nth-last-of-type(1) {
    display: none;
  }

  .contents_box {
    display: flex;
  }
  .mark {
    margin-right: 5px;
  }
`;
export default TextContainer;
